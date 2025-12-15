import * as THREE from "three";
import TWEEN from "@tweenjs/tween.js";
import * as Tone from "tone";

export default function PulseModule() {
  const PULSE_COUNT = 20;
  const BPM = 132;
  let scene, reverb, listener;
  let audioContextReady = false;
  let cylinders = [];
  let lastPulseTime = 0;

  function createCylinder() {
    const geometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 1,
      roughness: 0.1,
      transparent: true,
      opacity: 1,
    });
    const cylinder = new THREE.Mesh(geometry, material);

    // Position cylinder
    const startX = THREE.MathUtils.randFloatSpread(20);
    const startY = THREE.MathUtils.randFloatSpread(20);
    const startZ = THREE.MathUtils.randFloatSpread(20);

    cylinder.position.set(startX, startY, startZ);

    // Add positional audio only if listener is available and audio context is ready
    if (listener && audioContextReady && Tone.context && Tone.context.state === "running") {
      try {
        // Create a Tone.js-based audio system instead of using buffer-based audio
        // This allows us to add the biquad filter with resonance
        
        // Create an oscillator with FM modulation for more interesting sound
        const carrier = new Tone.Oscillator({
          frequency: 440 + Math.random() * 220, // Random frequency between 440-660Hz
          type: "sine",
          volume: -20
        });
        
        // Create a biquad filter with high resonance (DJ-style filter)
        const filter = new Tone.Filter({
          type: "bandpass",
          frequency: 1000,
          Q: 10 // High resonance for that DJ filter sweep effect
        });
        
        // Create a gain node for volume control
        const gain = new Tone.Gain(1);
        
        // Create a chopper effect (amplitude modulation)
        const chopRate = Math.random() * 19 + 1; // 1Hz to 20Hz
        const chopOsc = new Tone.Oscillator({
          frequency: chopRate,
          type: "square",
          volume: 0
        }).start();
        
        // Create lowpass filter for smoother transitions in the chopping
        const chopFilter = new Tone.Filter({
          frequency: 30,
          type: "lowpass"
        });
        
        // Connect chop oscillator to filter
        chopOsc.connect(chopFilter);
        
        // Create gain node for the chopping effect
        const chopGain = new Tone.Gain();
        
        // Connect filter to gain node's gain parameter
        chopFilter.connect(chopGain.gain);
        
        // Connect oscillator to filter to gain
        carrier.connect(filter);
        filter.connect(chopGain);
        chopGain.connect(gain);
        
        // Create a panner for spatial audio
        const panner = new Tone.Panner3D({
          positionX: cylinder.position.x,
          positionY: cylinder.position.y,
          positionZ: cylinder.position.z,
          rolloffFactor: 2,
          distanceModel: "exponential",
          maxDistance: 1000,
          refDistance: 5
        });
        
        // Connect gain to panner
        gain.connect(panner);
        
        // Connect panner to destination
        panner.toDestination();
        
        // Connect to reverb if available
        if (reverb) {
          panner.connect(reverb);
        }
        
        // Start the oscillator
        carrier.start();
        
        // Store audio components in cylinder's userData
        cylinder.userData.carrier = carrier;
        cylinder.userData.filter = filter;
        cylinder.userData.gain = gain;
        cylinder.userData.panner = panner;
        cylinder.userData.chopOsc = chopOsc;
        cylinder.userData.chopFilter = chopFilter;
        cylinder.userData.chopGain = chopGain;
        
        // Set up filter sweep based on position
        // We'll update this in the animation loop
        updateFilterSweep(cylinder);
        
        // Fade out the sound using the gain node
        new TWEEN.Tween({ volume: 0.02 })
          .to({ volume: 0 }, (60 / BPM) * 1000)
          .easing(TWEEN.Easing.Exponential.Out)
          .onUpdate(({ volume }) => {
            if (cylinder.userData.gain) {
              cylinder.userData.gain.gain.value = volume;
            }
          })
          .start();
      } catch (e) {
        console.warn("Error creating positional audio:", e);
      }
    }

    scene.add(cylinder);

    // Animation duration
    const duration = (60 / BPM) * 1000;

    // Fade-out and removal
    new TWEEN.Tween(cylinder.material)
      .to({ opacity: 0 }, duration)
      .onComplete(() => {
        // Clean up audio components
        if (cylinder.userData) {
          if (cylinder.userData.carrier) {
            cylinder.userData.carrier.stop();
            cylinder.userData.carrier.dispose();
          }
          if (cylinder.userData.filter) {
            cylinder.userData.filter.dispose();
          }
          if (cylinder.userData.gain) {
            cylinder.userData.gain.dispose();
          }
          if (cylinder.userData.panner) {
            cylinder.userData.panner.dispose();
          }
          if (cylinder.userData.chopOsc) {
            cylinder.userData.chopOsc.stop();
            cylinder.userData.chopOsc.dispose();
          }
          if (cylinder.userData.chopFilter) {
            cylinder.userData.chopFilter.dispose();
          }
          if (cylinder.userData.chopGain) {
            cylinder.userData.chopGain.dispose();
          }
        }
        scene.remove(cylinder);
      })
      .start();
      
    // Add animation to move the cylinder
    const endX = THREE.MathUtils.randFloatSpread(20);
    const endY = THREE.MathUtils.randFloatSpread(20);
    const endZ = THREE.MathUtils.randFloatSpread(20);
    
    new TWEEN.Tween(cylinder.position)
      .to({ x: endX, y: endY, z: endZ }, duration)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(() => {
        // Update filter sweep based on new position
        updateFilterSweep(cylinder);
        
        // Update panner position
        if (cylinder.userData.panner) {
          cylinder.userData.panner.positionX.value = cylinder.position.x;
          cylinder.userData.panner.positionY.value = cylinder.position.y;
          cylinder.userData.panner.positionZ.value = cylinder.position.z;
        }
      })
      .start();

    return cylinder;
  }
  
  // Update filter sweep based on cylinder position
  function updateFilterSweep(cylinder) {
    if (!cylinder.userData.filter) return;
    
    // X axis controls filter frequency (left to right = low to high)
    // Map from -10 to 10 range to 80Hz to 8000Hz (logarithmic scale)
    const normalizedX = (cylinder.position.x + 10) / 20; // 0 to 1
    const minFreq = 80;
    const maxFreq = 8000;
    const frequency = minFreq * Math.pow(maxFreq / minFreq, normalizedX);
    
    // Y axis controls filter Q (resonance)
    // Map from -10 to 10 range to Q of 1 to 20
    const normalizedY = (cylinder.position.y + 10) / 20; // 0 to 1
    const minQ = 1;
    const maxQ = 20;
    const q = minQ + normalizedY * (maxQ - minQ);
    
    // Z axis controls filter type
    // Different zones for different filter types
    const normalizedZ = (cylinder.position.z + 10) / 20; // 0 to 1
    let filterType = "bandpass"; // default
    
    if (normalizedZ < 0.33) {
      filterType = "lowpass";
    } else if (normalizedZ < 0.66) {
      filterType = "bandpass";
    } else {
      filterType = "highpass";
    }
    
    // Apply filter parameters
    cylinder.userData.filter.frequency.value = frequency;
    cylinder.userData.filter.Q.value = q;
    cylinder.userData.filter.type = filterType;
  }

  // Helper function to create a buffer with FM synthesis
  const createFMBuffer = (context, carrierFreq, modFreq, modDepth) => {
    const sampleRate = context.sampleRate;
    const duration = 1; // 1 second buffer
    const numSamples = sampleRate * duration;
    const buffer = context.createBuffer(1, numSamples, sampleRate);
    const channelData = buffer.getChannelData(0);

    // Add a slight attack and release to avoid clicks
    const attackTime = 0.01; // 10ms attack
    const releaseTime = 0.05; // 50ms release
    const attackSamples = Math.floor(attackTime * sampleRate);
    const releaseSamples = Math.floor(releaseTime * sampleRate);

    for (let i = 0; i < numSamples; i++) {
      const t = i / sampleRate;
      // FM synthesis formula: carrier + modulator
      const modulator = Math.sin(2 * Math.PI * modFreq * t) * modDepth;
      let sample = Math.sin(2 * Math.PI * carrierFreq * t + modulator) * 0.5;

      // Apply attack
      if (i < attackSamples) {
        sample *= i / attackSamples;
      }
      // Apply release
      else if (i > numSamples - releaseSamples) {
        sample *= (numSamples - i) / releaseSamples;
      }

      channelData[i] = sample;
    }

    return buffer;
  };

  // Update audio context
  const updateAudioContext = (context) => {
    if (context && context.state === "running") {
      audioContextReady = true;
      console.log("PulseModule: Audio context updated and ready");
    } else {
      audioContextReady = false;
      console.warn("PulseModule: Audio context not ready", context ? context.state : "no context");
    }
  };
  
  // Initialize module
  const init = (sceneRef, listenerRef, reverbRef) => {
    scene = sceneRef;
    listener = listenerRef;
    reverb = reverbRef;
    
    // Check if audio is ready
    if (Tone.context && Tone.context.state === "running") {
      audioContextReady = true;
      console.log("PulseModule: Audio context is ready on init");
    } else {
      console.warn("PulseModule: Audio context not ready on init");
    }
    
    // Start pulse animation
    startPulseAnimation();
    
    console.log("PulseModule initialized with scene, listener, and reverb");
    return true;
  };
  
  // Start pulse animation
  const startPulseAnimation = () => {
    console.log("Pulse animation starting...");
    
    // Set up interval for creating pulses
    setInterval(() => {
      const now = Date.now();
      // Only create a new pulse every beat (based on BPM)
      if (now - lastPulseTime > (60 / BPM) * 1000) {
        createCylinder();
        lastPulseTime = now;
      }
    }, (60 / BPM) * 1000 / 2); // Check twice per beat
    
    // Create initial pulse
    createCylinder();
    lastPulseTime = Date.now();
  };

  return {
    init,
    updateAudioContext,
    getOscillators: () => {
      // Return all oscillators from cylinders for mixer connection
      return cylinders
        .filter(cylinder => cylinder.carrier)
        .map(cylinder => cylinder.carrier);
    }
  };
}
