import * as THREE from "three";
import * as Tone from "tone";
import TWEEN from "@tweenjs/tween.js";

// Constants
const CUBE_COUNT = 2; // Increased from 1 to 8 to make more cubes visible
const BPM = 60;
const CUBE_DURATION = (60 / BPM) * 1000 * 8; // 8 beats at 120 BPM (doubled from 4 beats)
const CUBE_SPREAD = 20; // Reduced to keep cubes within visible range (-10 to 10)

// Cube frequencies for wider octave range
const CUBE_FREQUENCIES = [
  // Lower octaves (added)
  110, // A2 (2 octaves below A3)
  130.8, // C3
  82.4, // E2
  98, // G2
  110, // A2 (1 octave below A3)
  // Original octave
  220, // A3
  261.6, // C4
  329.6, // E4
  392, // G4
  440, // A4
  // Higher octave
  523.2, // C5
  659.2, // E5
  784, // G5
  880, // A5
];

// Enhanced vaporwave colors with more vibrant options
const VAPORWAVE_COLORS = [
  { r: 1.0, g: 0.2, b: 0.8 }, // Hot pink
  { r: 0.0, g: 0.8, b: 1.0 }, // Cyan
  { r: 0.5, g: 0.0, b: 0.8 }, // Purple
  { r: 0.9, g: 0.2, b: 0.5 }, // Magenta
  { r: 0.2, g: 0.9, b: 0.8 }, // Teal
  { r: 0.8, g: 0.3, b: 1.0 }, // Lavender
  { r: 1.0, g: 0.5, b: 0.0 }, // Orange
  { r: 0.0, g: 0.5, b: 0.5 }, // Dark teal
  { r: 1.0, g: 0.8, b: 0.2 }, // Gold
  { r: 0.2, g: 1.0, b: 0.5 }, // Mint
  { r: 0.7, g: 0.0, b: 0.0 }, // Deep red
  { r: 0.0, g: 0.4, b: 0.8 }, // Royal blue
  { r: 1.0, g: 0.0, b: 0.5 }, // Neon pink
  { r: 0.0, g: 1.0, b: 1.0 }, // Bright cyan
  { r: 0.8, g: 0.0, b: 1.0 }, // Bright purple
  { r: 1.0, g: 0.0, b: 0.0 }, // Pure red
  { r: 0.0, g: 1.0, b: 0.0 }, // Pure green
  { r: 0.5, g: 1.0, b: 0.0 }, // Lime
  { r: 1.0, g: 0.0, b: 1.0 }, // Magenta
  { r: 1.0, g: 1.0, b: 0.0 }, // Yellow
];

// Shader code for cyberpunk materials
const cyberpunkVertexShader = `
  varying vec3 vNormal;
  varying vec3 vViewDir;
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
    vViewDir = normalize(cameraPosition - (modelMatrix * vec4(position, 1.0)).xyz);
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const cyberpunkFragmentShader = `
  uniform float time;
  uniform float transitionFactor; // 0-1 transition between styles
  uniform int materialStyle; // 0: neon, 1: tornasol, 2: vaporwave
  uniform vec3 neonColor;
  uniform vec3 secondaryColor;
  
  varying vec3 vNormal;
  varying vec3 vViewDir;
  varying vec2 vUv;
  varying vec3 vPosition;
  
  // Neon glow effect
  vec4 getNeonEffect() {
    float fresnelFactor = pow(1.0 - abs(dot(vNormal, vViewDir)), 4.0);
    vec3 glowColor = neonColor * (0.6 + 0.6 * sin(time * 2.0));
    float pulseIntensity = 0.8 + 0.4 * sin(time * 3.0);
    return vec4(glowColor * (fresnelFactor * 3.0 + 0.6) * pulseIntensity, 0.8);
  }
  
  // Tornasol (iridescent) effect
  vec4 getTornasolEffect() {
    float angle = dot(vNormal, vViewDir);
    float colorShift = 0.5 + 0.5 * sin(time * 0.5 + vPosition.x * 0.2 + vPosition.y * 0.1);
    vec3 color1 = neonColor;
    vec3 color2 = secondaryColor;
    vec3 iridescentColor = mix(color1, color2, angle * colorShift);
    float pulseIntensity = 0.8 + 0.2 * sin(time * 2.0);
    return vec4(iridescentColor * pulseIntensity, 0.7);
  }
  
  // Enhanced vaporwave gradient effect
  vec4 getVaporwaveEffect() {
    // Create a gradient based on position and time
    float gradientFactor = vUv.y + 0.3 * sin(time * 0.2 + vUv.x * 5.0);
    
    // Enhanced vaporwave colors
    vec3 purpleColor = vec3(0.5, 0.0, 0.8);
    vec3 cyanColor = vec3(0.0, 0.8, 1.0);
    vec3 pinkColor = vec3(1.0, 0.2, 0.8);
    vec3 tealColor = vec3(0.2, 0.9, 0.8);
    vec3 orangeColor = vec3(1.0, 0.5, 0.0);
    
    // More complex gradient with 5 colors
    vec3 gradientColor;
    if (gradientFactor < 0.2) {
      gradientColor = mix(purpleColor, cyanColor, gradientFactor * 5.0);
    } else if (gradientFactor < 0.4) {
      gradientColor = mix(cyanColor, pinkColor, (gradientFactor - 0.2) * 5.0);
    } else if (gradientFactor < 0.6) {
      gradientColor = mix(pinkColor, tealColor, (gradientFactor - 0.4) * 5.0);
    } else if (gradientFactor < 0.8) {
      gradientColor = mix(tealColor, orangeColor, (gradientFactor - 0.6) * 5.0);
    } else {
      gradientColor = mix(orangeColor, purpleColor, (gradientFactor - 0.8) * 5.0);
    }
    
    // Add scanlines
    float scanline = 0.9 + 0.1 * sin(vUv.y * 50.0 + time * 5.0);
    
    // Add grid effect
    float grid = 1.0;
    if (mod(vUv.x * 20.0, 1.0) < 0.05 || mod(vUv.y * 20.0, 1.0) < 0.05) {
      grid = 1.2;
    }
    
    // Add glitch effect
    float glitch = 1.0;
    if (sin(time * 10.0) > 0.95) {
      float glitchLine = floor(vUv.y * 20.0) / 20.0;
      if (sin(glitchLine * 100.0 + time * 50.0) > 0.5) {
        glitch = 1.5;
        gradientColor = vec3(1.0) - gradientColor; // Invert colors for glitch
      }
    }
    
    return vec4(gradientColor * scanline * grid * glitch, 0.7);
  }
  
  void main() {
    // Get all three effects
    vec4 neonEffect = getNeonEffect();
    vec4 tornasolEffect = getTornasolEffect();
    vec4 vaporwaveEffect = getVaporwaveEffect();
    
    // Blend between current and next style based on transitionFactor
    vec4 finalColor;
    
    if (materialStyle == 0) {
      // Transition from neon to tornasol
      finalColor = mix(neonEffect, tornasolEffect, transitionFactor);
    } else if (materialStyle == 1) {
      // Transition from tornasol to vaporwave
      finalColor = mix(tornasolEffect, vaporwaveEffect, transitionFactor);
    } else {
      // Transition from vaporwave to neon
      finalColor = mix(vaporwaveEffect, neonEffect, transitionFactor);
    }
    
    gl_FragColor = finalColor;
  }
`;

// Module state
let scene;
let listener;
let reverb;
let cubes = [];
let lastCubeTime = 0;
let materialTransitionTimer = 0;
let currentMaterialStyle = 0; // 0: neon, 1: tornasol, 2: vaporwave
let transitionFactor = 0; // 0-1 for transitions between styles
let audioContextReady = false;
let cubeInterval;

// Create a cube with cyberpunk material
const createCube = () => {
  // Create geometry
  const size = Math.random() * 40.5 + 0.5; // Random size between 0.5 and 2.0
  const geometry = new THREE.BoxGeometry(size, size, size);
  
  // Create cyberpunk material
  const material = new THREE.ShaderMaterial({
    vertexShader: cyberpunkVertexShader,
    fragmentShader: cyberpunkFragmentShader,
    uniforms: {
      time: { value: 0 },
      transitionFactor: { value: 0 },
      materialStyle: { value: currentMaterialStyle },
      neonColor: { value: new THREE.Color(VAPORWAVE_COLORS[Math.floor(Math.random() * VAPORWAVE_COLORS.length)]) },
      secondaryColor: { value: new THREE.Color(VAPORWAVE_COLORS[Math.floor(Math.random() * VAPORWAVE_COLORS.length)]) }
    },
    transparent: true,
    side: THREE.DoubleSide
  });
  
  // Create mesh
  const cube = new THREE.Mesh(geometry, material);
  
  // Position within bounds
  cube.position.set(
    (Math.random() - 0.5) * CUBE_SPREAD,
    (Math.random() - 0.5) * CUBE_SPREAD,
    (Math.random() - 0.5) * CUBE_SPREAD
  );
  
  // Random rotation
  cube.rotation.set(
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2
  );
  
  // Add to scene
  if (scene) {
    scene.add(cube);
    console.log("CubeModule: Added cube to scene at position", cube.position);
  } else {
    console.warn("CubeModule: Scene not available, cube not added");
  }
  
  // Add point light to make cube glow
  const colorIndex = Math.floor(Math.random() * VAPORWAVE_COLORS.length);
  const color = new THREE.Color(
    VAPORWAVE_COLORS[colorIndex].r,
    VAPORWAVE_COLORS[colorIndex].g,
    VAPORWAVE_COLORS[colorIndex].b
  );
  
  const light = new THREE.PointLight(color, 1, 10);
  light.position.copy(cube.position);
  if (scene) {
    scene.add(light);
  }
  
  // Store light and animation parameters in cube's userData
  cube.userData = {
    light: light,
    startTime: Date.now(),
    duration: CUBE_DURATION,
    colorIndex: colorIndex,
    materialType: Math.floor(Math.random() * 4), // 0-3 for different material types
    velocity: new THREE.Vector3(
      (Math.random() - 0.5) * 0.01,
      (Math.random() - 0.5) * 0.01,
      (Math.random() - 0.5) * 0.01
    ),
    rotationVelocity: new THREE.Vector3(
      (Math.random() - 0.5) * 0.01,
      (Math.random() - 0.5) * 0.01,
      (Math.random() - 0.5) * 0.01
    )
  };
  
  // Create audio for the cube if audio context is ready
  if (audioContextReady) {
    createAudioForCube(cube);
  }
  
  // Add to cubes array
  cubes.push(cube);
  
  return cube;
};

// Update cube animation in the animation loop
const updateCubes = () => {
  const now = Date.now();
  
  cubes.forEach(cube => {
    if (!cube || !cube.userData) return;
    
    // Update position with velocity
    cube.position.x += cube.userData.velocity.x;
    cube.position.y += cube.userData.velocity.y;
    cube.position.z += cube.userData.velocity.z;
    
    // Boundary check to keep within -10 to 10 range
    const boundary = 10;
    if (Math.abs(cube.position.x) > boundary) {
      cube.userData.velocity.x *= -1;
      cube.position.x = Math.sign(cube.position.x) * boundary;
    }
    if (Math.abs(cube.position.y) > boundary) {
      cube.userData.velocity.y *= -1;
      cube.position.y = Math.sign(cube.position.y) * boundary;
    }
    if (Math.abs(cube.position.z) > boundary) {
      cube.userData.velocity.z *= -1;
      cube.position.z = Math.sign(cube.position.z) * boundary;
    }
    
    // Update rotation
    cube.rotation.x += cube.userData.rotationVelocity.x;
    cube.rotation.y += cube.userData.rotationVelocity.y;
    cube.rotation.z += cube.userData.rotationVelocity.z;
    
    // Update material uniforms
    if (cube.material && cube.material.uniforms) {
      cube.material.uniforms.time.value = now * 0.001;
    }
    
    // Update light position
    if (cube.userData.light) {
      cube.userData.light.position.copy(cube.position);
      
      // Pulse light intensity
      const elapsed = now - cube.userData.startTime;
      const progress = Math.min(elapsed / cube.userData.duration, 1);
      const intensity = 1 - progress * 0.5 + Math.sin(elapsed * 0.002) * 0.3;
      cube.userData.light.intensity = Math.max(0.2, intensity);
    }
    
    // Update audio panner position if available
    if (cube.userData.panner) {
      cube.userData.panner.positionX.value = cube.position.x;
      cube.userData.panner.positionY.value = cube.position.y;
      cube.userData.panner.positionZ.value = cube.position.z;
    }
  });
};

// Update material transitions
const updateMaterials = (deltaTime) => {
  // Update transition timer
  materialTransitionTimer += deltaTime;
  
  // Check if it's time to transition (every 10 seconds)
  if (materialTransitionTimer >= 10000) {
    // Reset timer
    materialTransitionTimer = 0;
    
    // Start transition
    transitionFactor = 0;
    
    // Schedule the style change for halfway through the transition
    setTimeout(() => {
      // Move to next style
      currentMaterialStyle = (currentMaterialStyle + 1) % 3;
      
      // Update all cube materials
      cubes.forEach(cube => {
        if (cube.material && cube.material.uniforms) {
          cube.material.uniforms.materialStyle.value = currentMaterialStyle;
        }
      });
    }, 500); // Change style after 0.5 seconds (halfway through transition)
  }
  
  // Update transition factor during transitions
  if (materialTransitionTimer < 1000) {
    // First second: transition from 0 to 1
    transitionFactor = materialTransitionTimer / 1000;
  } else if (materialTransitionTimer > 9000) {
    // Last second: transition from 0 to 1 again
    transitionFactor = (materialTransitionTimer - 9000) / 1000;
  } else {
    // Middle period: stay at 0
    transitionFactor = 0;
  }
  
  // Update all cube materials
  const time = Date.now() * 0.001; // Current time in seconds
  cubes.forEach(cube => {
    if (cube.material && cube.material.uniforms) {
      cube.material.uniforms.time.value = time;
      cube.material.uniforms.transitionFactor.value = transitionFactor;
    }
  });
};

// Start cube animation
const startCubeAnimation = () => {
  console.log("CubeModule: Starting cube animation");
  
  // Clear existing cubes
  cubes.forEach(cube => {
    if (cube.parent) {
      cube.parent.remove(cube);
    }
    if (cube.userData.light && cube.userData.light.parent) {
      cube.userData.light.parent.remove(cube.userData.light);
    }
  });
  
  cubes = [];
  
  // Create initial cubes
  for (let i = 0; i < CUBE_COUNT; i++) {
    createCube();
  }
  
  console.log(`CubeModule: Created ${cubes.length} cubes`);
  
  // Schedule cube creation at regular intervals
  if (cubeInterval) {
    clearInterval(cubeInterval);
  }
  
  // Create new cubes at regular intervals (every 2 seconds)
  cubeInterval = setInterval(() => {
    // Remove old cubes if we have too many
    if (cubes.length > CUBE_COUNT * 2) {
      const oldCube = cubes.shift();
      if (oldCube) {
        // Remove audio components
        if (oldCube.userData.fmOsc) {
          oldCube.userData.fmOsc.stop();
          oldCube.userData.fmOsc.dispose();
        }
        if (oldCube.userData.panner) {
          oldCube.userData.panner.dispose();
        }
        
        // Remove from scene
        if (oldCube.parent) {
          oldCube.parent.remove(oldCube);
        }
        
        // Remove light
        if (oldCube.userData.light && oldCube.userData.light.parent) {
          oldCube.userData.light.parent.remove(oldCube.userData.light);
        }
      }
    }
    
    // Create a new cube
    const newCube = createCube();
    
    // Connect new cube's audio to mixer if available
    // @ts-ignore - Accessing global audioMixer
    if (window.audioMixer && newCube && newCube.userData && newCube.userData.fmOsc) {
      try {
        // @ts-ignore - Accessing global audioMixer
        window.audioMixer.connectNode(newCube.userData.fmOsc, "cubeOscillators");
        console.log("Connected new cube oscillator to mixer");
      } catch (e) {
        console.error("Error connecting new cube oscillator to mixer:", e);
      }
    }
  }, 2000);
};

// Update audio context
const updateAudioContext = (context) => {
  if (context && context.state === "running") {
    audioContextReady = true;
    console.log("CubeModule: Audio context is ready");
    
    // Create audio for existing cubes
    cubes.forEach(cube => {
      if (!cube.userData.hasAudio) {
        createAudioForCube(cube);
      }
    });
  } else {
    audioContextReady = false;
    console.log("CubeModule: Audio context is not ready");
  }
};

// Create audio components for a cube
const createAudioForCube = (cube) => {
  // Only create audio if context is ready
  if (!audioContextReady || !Tone.context || Tone.context.state !== "running") {
    console.warn("CubeModule: Cannot create audio, context not ready");
    return;
  }
  
  try {
    // Clean up any existing audio components
    if (cube.userData.fmOsc) {
      cube.userData.fmOsc.stop();
      cube.userData.fmOsc.dispose();
    }
    if (cube.userData.panner) {
      cube.userData.panner.dispose();
    }
    
    // Select random frequency from the array
    const carrierFreq = CUBE_FREQUENCIES[Math.floor(Math.random() * CUBE_FREQUENCIES.length)];
    const modulatorFreq = carrierFreq * (Math.random() * 0.5 + 0.75);
    
    // Create FM oscillator
    const fmOsc = new Tone.FMOscillator({
      frequency: carrierFreq,
      harmonicity: Math.random() * 2 + 0.5,
      modulationIndex: Math.random() * 10 + 1,
      volume: -30, // Much lower volume
    }).start();
    
    // Create a panner for spatial audio
    const panner = new Tone.Panner3D({
      positionX: cube.position.x,
      positionY: cube.position.y,
      positionZ: cube.position.z,
      rolloffFactor: 2,
      distanceModel: "exponential",
      maxDistance: 10000,
      refDistance: 5,
    });
    
    // Connect oscillator to panner to destination
    fmOsc.connect(panner);
    panner.toDestination();
    
    // Connect to reverb if available
    if (reverb) {
      panner.connect(reverb);
    }
    
    // Store audio components in cube's userData
    cube.userData.fmOsc = fmOsc;
    cube.userData.panner = panner;
    cube.userData.hasAudio = true;
    
    console.log("CubeModule: Audio created for cube");
  } catch (e) {
    console.error("CubeModule: Error creating audio for cube:", e);
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
  
  console.log("CubeModule initialized with scene, listener, and reverb");
};

// Get cubes array
const getCubes = () => {
  return cubes;
};

// Return public methods
export default function CubeModule() {
  return {
    init,
    startCubeAnimation,
    getCubes,
    updateAudioContext,
    updateCubes,
    getOscillators: () => {
      // Return all oscillators from cubes for mixer connection
      return cubes
        .filter(cube => cube.userData.fmOsc)
        .map(cube => cube.userData.fmOsc);
    }
  };
}
