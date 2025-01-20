import * as THREE from "three";
import TWEEN from "@tweenjs/tween.js";

export default function PulseModule() {
  const PULSE_COUNT = 20;
  const BPM = 132;
  let scene, reverb, listener;

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

    // Add positional audio
    const sound = new THREE.PositionalAudio(listener);
    const audioContext = listener.context;

    // Create FM synthesis buffer
    const buffer = createFMBuffer(audioContext, 440, 80, 100); // carrier freq, mod freq, mod depth
    sound.setBuffer(buffer);
    sound.setRefDistance(3);
    sound.setRolloffFactor(1.5);
    sound.setDistanceModel("exponential");
    sound.gain.gain.value = 0.2;
    sound.setLoop(true);
    cylinder.add(sound);
    sound.play();

    scene.add(cylinder);

    // Animation duration
    const duration = (60 / BPM) * 1000;

    // Fade-out and removal
    new TWEEN.Tween(cylinder.material)
      .to({ opacity: 0 }, duration)
      .onComplete(() => {
        sound.stop();
        scene.remove(cylinder);
      })
      .start();

    // Fade out the sound using the gain node
    new TWEEN.Tween({ volume: 0.2 })
      .to({ volume: 0 }, duration)
      .easing(TWEEN.Easing.Exponential.Out)
      .onUpdate(({ volume }) => {
        sound.gain.gain.value = volume;
      })
      .start();

    return cylinder;
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

  async function startPulseAnimation() {
    console.log("Pulse animation starting...");

    for (let i = 0; i < PULSE_COUNT; i++) {
      createCylinder();
      // Wait a bit before creating next pulse
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }

  return {
    init: (sharedScene, sharedListener, sharedReverb) => {
      scene = sharedScene;
      listener = sharedListener;
      reverb = sharedReverb;
      console.log("PulseModule initialized with scene, listener, and reverb");
    },
    startPulseAnimation,
    createCylinder,
  };
}
