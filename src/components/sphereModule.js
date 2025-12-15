import * as THREE from "three";
import * as Tone from "tone";

// Constants
const SPHERE_COUNT = 10;
const SPHERE_SPREAD = 1;
const SPHERE_SIZE_MULTIPLIER = 15.5;

// Module state
let scene;
let listener;
let reverb;
let spheres = [];
let audioContextReady = false;

// Create a sphere with glowing material
const createSphere = () => {
  // Create geometry with higher detail for better shader effects
  const radius = (Math.random() * 0.8 + 0.4) * SPHERE_SIZE_MULTIPLIER;
  const geometry = new THREE.SphereGeometry(radius, 32, 32);
  
  // Create glowing material with XOR inversion shader
  const color = new THREE.Color();
  color.setHSL(Math.random(), 0.8, 0.6);
  
  // Create custom shader material for XOR inversion effect
  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      baseColor: { value: color }
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec2 vUv;
      varying vec3 vViewPosition;
      
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        vUv = uv;
        
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vec4 mvPosition = viewMatrix * worldPosition;
        vViewPosition = -mvPosition.xyz;
        
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 baseColor;
      
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec2 vUv;
      varying vec3 vViewPosition;
      
      void main() {
        // Fresnel effect for edge glow
        vec3 viewDirection = normalize(vViewPosition);
        float fresnel = pow(1.0 - abs(dot(vNormal, viewDirection)), 3.0);
        
        // XOR pattern based on position and time
        float xorPattern = 0.0;
        float scale = 10.0;
        float timeScale = time * 0.2;
        
        // Create XOR pattern using bitwise-like operations
        vec3 scaledPos = vPosition * scale;
        float xorX = step(0.5, fract(scaledPos.x + timeScale));
        float xorY = step(0.5, fract(scaledPos.y + timeScale * 0.7));
        float xorZ = step(0.5, fract(scaledPos.z + timeScale * 0.3));
        
        // Simulate XOR operation
        xorPattern = abs(xorX - xorY);
        xorPattern = abs(xorPattern - xorZ);
        
        // Add wave pattern
        float wavePattern = sin(vUv.x * 20.0 + time) * sin(vUv.y * 20.0 + time * 0.7) * 0.5 + 0.5;
        
        // Combine patterns
        float pattern = mix(xorPattern, wavePattern, 0.3);
        
        // Inversion effect
        vec3 invertedColor = vec3(1.0) - baseColor;
        vec3 finalColor = mix(baseColor, invertedColor, pattern * 0.7);
        
        // Add pulsing glow
        float pulse = 0.5 + 0.5 * sin(time * 0.5);
        finalColor *= 0.8 + 0.4 * pulse;
        
        // Add fresnel edge glow
        finalColor = mix(finalColor, vec3(1.0), fresnel * 0.7);
        
        // Calculate opacity with XOR transparency effect
        float opacity = 0.2 + 0.3 * fresnel + 0.2 * pattern;
        
        // Output final color with transparency
        gl_FragColor = vec4(finalColor, opacity);
      }
    `,
    transparent: true,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  
  // Create mesh
  const sphere = new THREE.Mesh(geometry, material);
  
  // Random position
  sphere.position.set(
    THREE.MathUtils.randFloatSpread(SPHERE_SPREAD),
    THREE.MathUtils.randFloatSpread(SPHERE_SPREAD),
    THREE.MathUtils.randFloatSpread(SPHERE_SPREAD)
  );
  
  // Add to scene
  scene.add(sphere);
  
  // Add point light to make sphere glow
  const light = new THREE.PointLight(color, 0.8, 10);
  light.position.copy(sphere.position);
  scene.add(light);
  
  // Store light in sphere's userData
  sphere.userData = {
    light: light,
    baseColor: color.clone(),
    startTime: Date.now(),
  };
  
  return sphere;
};

// Update spheres
const updateSpheres = () => {
  const time = Date.now() * 0.001;
  
  spheres.forEach((sphere, index) => {
    // Gentle floating motion
    sphere.position.y += Math.sin(time + index) * 0.001;
    
    // Rotate sphere
    sphere.rotation.x += 0.003;
    sphere.rotation.y += 0.005;
    
    // Update shader uniforms
    if (sphere.material.uniforms) {
      sphere.material.uniforms.time.value = time;
    }
    
    // Update light position and color
    if (sphere.userData.light) {
      sphere.userData.light.position.copy(sphere.position);
      
      // Pulsing light intensity
      const pulseIntensity = 0.5 + 0.3 * Math.sin(time * 0.5 + index);
      sphere.userData.light.intensity = pulseIntensity;
      
      // Subtle color shift
      const hue = (sphere.userData.baseColor.getHSL({}).h + time * 0.05) % 1;
      const color = new THREE.Color().setHSL(
        hue,
        sphere.userData.baseColor.getHSL({}).s,
        sphere.userData.baseColor.getHSL({}).l
      );
      sphere.userData.light.color.copy(color);
    }
  });
  
  // Request next frame
  requestAnimationFrame(updateSpheres);
};

// Start sphere animation
const startSphereAnimation = () => {
  console.log("Sphere animation starting...");
  
  // Create initial spheres
  for (let i = 0; i < SPHERE_COUNT; i++) {
    const sphere = createSphere();
    spheres.push(sphere);
  }
  
  // Start animation loop
  updateSpheres();
};

// Update audio context
const updateAudioContext = (context) => {
  if (context && context.state === "running") {
    audioContextReady = true;
    console.log("SphereModule: Audio context updated and ready");
    
    // If we have spheres already, update their audio components
    if (spheres.length > 0) {
      console.log(`SphereModule: Updating audio for ${spheres.length} existing spheres`);
      spheres.forEach(sphere => {
        // If the sphere has audio components, try to reconnect them
        if (sphere.userData) {
          try {
            // Create new audio components for this sphere
            createAudioForSphere(sphere);
          } catch (e) {
            console.warn("SphereModule: Error updating audio for sphere:", e);
          }
        }
      });
    }
  } else {
    audioContextReady = false;
    console.warn("SphereModule: Audio context not ready", context ? context.state : "no context");
  }
};

// Create audio components for a sphere
const createAudioForSphere = (sphere) => {
  // Only create audio if context is ready
  if (!audioContextReady || !Tone.context || Tone.context.state !== "running") {
    console.warn("SphereModule: Cannot create audio, context not ready");
    return;
  }
  
  try {
    // Clean up any existing audio components
    if (sphere.userData.oscillator) {
      sphere.userData.oscillator.stop();
      sphere.userData.oscillator.dispose();
    }
    if (sphere.userData.panner) {
      sphere.userData.panner.dispose();
    }
    
    // Create a simple oscillator
    const frequency = 220 + Math.random() * 440; // Random frequency between 220-660Hz
    const oscillator = new Tone.Oscillator({
      frequency: frequency,
      type: "sine",
      volume: -20, // Lower volume
    }).start();
    
    // Create a filter
    const filter = new Tone.Filter({
      type: "lowpass",
      frequency: 1000,
      Q: 2,
    });
    
    // Add chop effect with LFO
    const chopper = new Tone.Gain();
    const chopLFO = new Tone.LFO({
      frequency: Math.random() * 0.5 + 0.1, // Slow chop rate between 0.1-0.6 Hz
      min: 0,
      max: 1,
      type: "square"
    }).start();
    
    // Connect LFO to chopper gain
    chopLFO.connect(chopper.gain);
    
    // Create a panner for spatial audio
    const panner = new Tone.Panner3D({
      positionX: sphere.position.x,
      positionY: sphere.position.y,
      positionZ: sphere.position.z,
      rolloffFactor: 2,
      distanceModel: "exponential",
      maxDistance: 10000,
      refDistance: 5,
    });
    
    // Connect oscillator to filter to chopper to panner to destination
    oscillator.connect(filter);
    filter.connect(chopper);
    chopper.connect(panner);
    panner.toDestination();
    
    // Connect to reverb if available
    if (reverb) {
      panner.connect(reverb);
    }
    
    // Store audio components in sphere's userData
    sphere.userData.oscillator = oscillator;
    sphere.userData.filter = filter;
    sphere.userData.chopper = chopper;
    sphere.userData.chopLFO = chopLFO;
    sphere.userData.panner = panner;
    sphere.userData.frequency = frequency;
    sphere.userData.hasAudio = true;
    
    console.log("SphereModule: Audio created for sphere");
  } catch (e) {
    console.error("SphereModule: Error creating audio for sphere:", e);
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
  }
  
  // Start animation
  startSphereAnimation();
  
  console.log("SphereModule initialized with scene, listener, and reverb");
};

// Get spheres array
const getSpheres = () => {
  return spheres;
};

// Export module
export default function SphereModule() {
  return {
    init,
    getSpheres,
    updateAudioContext,
    updateSpheres,
    getOscillators: () => {
      // Return all oscillators from spheres for mixer connection
      return spheres
        .filter(sphere => sphere.userData && sphere.userData.oscillator)
        .map(sphere => sphere.userData.oscillator);
    }
  };
} 