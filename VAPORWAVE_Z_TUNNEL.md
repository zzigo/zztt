# Vaporwave Z-Tunnel Audio-Visual Experience

## Overview
An infinite z-tunnel experience combining Three.js 3D graphics with Web Audio API spatial audio, designed with a slow, evolving, poignant vaporwave aesthetic.

---

## File Structure

### Main Implementation Files

#### Core Experience
- **`src/components/hero.astro`** - Main z-tunnel implementation (750+ lines)
  - Camera z-axis advancement logic
  - Module spawning and lifecycle management
  - Post-processing pipeline setup
  - Audio-visual synchronization
  - God rays and fog configuration

#### Audio Modules (Legacy - Not Used in Current Implementation)
- **`src/components/sphereModule.js`** - Sphere audio-visual module
  - XOR inversion shader effects
  - Spatial oscillator creation
  - LFO modulation with chop effect
  
- **`src/components/cubeModule.js`** - Cube audio-visual module
  - Cyberpunk shader materials (neon, tornasol, vaporwave)
  - FM synthesis audio generation
  - Material transition system
  
- **`src/components/pulseModule.js`** - Pulse ring module
  - Torus geometry wireframes
  - Panning audio effects

- **`src/components/audioMixer.js`** - Central audio routing
  - Big reverb configuration (8s decay)
  - Master volume control
  - Channel management for all audio sources

#### Page Integration
- **`src/pages/index.astro`** - Homepage integration
  - Hero container setup (currently disabled)
  - Works mosaic grid display
  - Audio context initialization scripts

#### Shader Assets
- **`src/components/shaders/godray.vert`** - God rays vertex shader
- **`src/components/shaders/godray.frag`** - God rays fragment shader

### Current Implementation Status

**Active Components:**
- `hero.astro` - Fully self-contained z-tunnel with embedded shaders and audio
- `index.astro` - Page wrapper (hero currently commented out)

**Legacy Components (Not Currently Used):**
- `sphereModule.js`, `cubeModule.js`, `pulseModule.js` - Original modular system
- `audioMixer.js` - Replaced by inline audio setup in hero.astro
- `HeroScene.jsx` - React component (deprecated)

### Component Relationships

```
index.astro
  └── hero.astro (commented out - to re-enable, uncomment lines 122-124)
        ├── Embedded Shaders
        │     ├── God rays shader (vertex + fragment)
        │     ├── Sphere vaporwave gradient shader
        │     ├── Cube grid pattern shader
        │     └── Color correction shader
        │
        ├── Audio System
        │     ├── Tone.js setup
        │     ├── Web Audio API Panner3D
        │     ├── Reverb (8s decay)
        │     └── Per-module oscillators
        │
        └── Visual System
              ├── Three.js scene
              ├── Fog system
              ├── Post-processing (EffectComposer)
              │     ├── RenderPass
              │     ├── God rays pass
              │     ├── UnrealBloomPass
              │     └── Color correction pass
              └── Module spawning system
```

### To Enable/Disable Z-Tunnel Header

**Edit `src/pages/index.astro`** - Set the configuration variable at the top:

```javascript
// HERO HEADER CONFIG - Set to true to enable the vaporwave z-tunnel header
const ENABLE_HERO_HEADER = false;  // Change to true to enable
```

When `ENABLE_HERO_HEADER = true`:
- Full-screen vaporwave z-tunnel displays above the works mosaic
- Spatial audio system activates on user interaction
- Infinite camera z-axis advancement begins

When `ENABLE_HERO_HEADER = false` (current setting):
- Header is hidden
- Works mosaic displays immediately
- Page loads faster without Three.js/Tone.js overhead

---

## Core Concept

### 1. **Z-Tunnel Infinite Loop**
- Camera continuously advances along the Z-axis at **0.03 units/frame** (slow, meditative pace)
- Modules spawn ahead of the camera (~150 units) and are recycled when they pass behind
- Creates an **endless journey** through space
- Gentle camera wobble (sine/cosine oscillation) adds organic feel

### 2. **Random Module Positioning & Activities**
Three types of audio-visual modules appear at random positions:
- **Spheres**: Gradient vaporwave colors (pink/cyan), pulsing scale
- **Cubes**: Grid patterns with yellow/pink gradients, edge glow
- **Pulses**: Wireframe torus rings, random colors

Each module has:
- Random 3D position (X: -20 to 20, Y: -15 to 15, Z: spawns ahead)
- Slow drift velocity (0.02 units/frame)
- Gentle rotation (0.003 rad/frame)
- Independent point light source
- Spatial audio source with unique frequency

---

## Audio System

### 3. **Spatial Audio Implementation**

#### Web Audio API Configuration
```javascript
AUDIO_CONFIG = {
  reverbDecay: 8.0,          // 8-second reverb tail
  reverbWet: 0.4,            // 40% wet mix
  masterVolume: -25,         // Subtle overall mix
  spatialRolloff: 1.5,       // Slow distance attenuation
}
```

#### Per-Module Audio Chain
```
Oscillator (55-455 Hz)
  ↓
LFO Modulation (0.1-0.4 Hz)
  ↓
Lowpass Filter (800-2000 Hz)
  ↓
Panner3D (spatial positioning)
  ↓
Reverb (8s decay)
  ↓
Master Out (-25dB)
```

#### Spatial Audio Features
- **Panner3D** with exponential distance model
- Real-time position updates as modules move
- Automatic fade-out when modules pass behind camera (30-unit range)
- Each module uses random waveform (sine/triangle/sawtooth)
- LFO creates subtle pitch drift (±5% of base frequency)

---

## Visual System

### 4. **Fog Implementation**
```javascript
scene.fog = new THREE.Fog(
  0x1a0520,  // Deep purple color
  20,        // Near plane (fog starts)
  180        // Far plane (complete fog)
)
```
Creates **depth perception** and **atmospheric perspective** essential for vaporwave aesthetic.

---

### 5. **God Rays Shader**

#### Implementation
Post-processing shader using **radial blur** technique:
- Light position at screen center (0.5, 0.5)
- 50 samples per pixel
- Decay factor: 0.95
- Exposure: 0.3 (subtle effect)

#### Algorithm
```glsl
// For each pixel:
1. Calculate vector from pixel to light source
2. March along this vector in steps
3. Sample and accumulate color at each step
4. Apply exponential decay
5. Multiply by exposure
```

Creates **volumetric light rays** emanating from distant light sources, enhancing the dreamy vaporwave atmosphere.

---

### 6. **Vaporwave Aesthetic Parameters**

#### All Parameters Slowed Down
- Camera speed: **0.03** (was typically 0.1-0.3)
- Rotation speed: **0.003 rad/frame** (was 0.01+)
- Module drift: **0.02 units/frame** (was 0.1+)
- LFO rate: **0.1-0.4 Hz** (was 1-5 Hz)
- Scale pulse: **sin(time * 0.5)** (was 2.0+)

#### Visual Style
```javascript
VISUAL_CONFIG = {
  bloomStrength: 0.8,      // Soft glow
  bloomRadius: 0.6,        // Wider spread
  bloomThreshold: 0.7,     // Only bright areas
  saturation: 1.4,         // Vibrant colors
  brightness: 0.9,         // Slightly dark
}
```

#### Color Palette
- **Background**: Deep purple gradient `#1a0520` → `#0d0310`
- **Modules**: 
  - Magenta `#ff00ff`
  - Cyan `#00ffff`
  - Pink `#ff0099`
  - Yellow `#ffff00`
- **Fog**: Matches background `0x1a0520`
- **Lights**: Soft pastels with RGB variation

---

## Technical Architecture

### Module Lifecycle
```
1. SPAWN (behind camera + 150 units)
   ↓
2. DRIFT (slow forward + random XY motion)
   ↓
3. UPDATE (position, rotation, audio, visuals)
   ↓
4. FADE (audio fades as it passes camera)
   ↓
5. RECYCLE (removed at camera - 100 units)
```

### Module Data Structure
```javascript
{
  id: number,
  type: 'sphere' | 'cube' | 'pulse',
  mesh: THREE.Mesh,
  light: THREE.PointLight,
  position: Vector3,
  velocity: Vector3,
  rotation: Vector3,
  rotationSpeed: Vector3,
  scale: number,
  audio: {
    osc: Tone.Oscillator,
    lfo: Tone.LFO,
    filter: Tone.Filter,
    panner: Tone.Panner3D
  }
}
```

---

## Shader Details

### Sphere Vaporwave Gradient Shader
```glsl
// Vertical sine wave pattern
float pattern = sin(vPosition.y * 5.0 + time * 0.3) * 0.5 + 0.5;

// Blend between two colors
vec3 color = mix(magenta, cyan, pattern);

// Fresnel edge glow
float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 2.0);
color += fresnel * 0.5;
```

### Cube Grid Pattern Shader
```glsl
// Grid lines
float grid = 0.0;
if (mod(vUv.x * 10.0, 1.0) < 0.1 || 
    mod(vUv.y * 10.0, 1.0) < 0.1) {
  grid = 1.0;
}

// Color gradient + grid overlay
vec3 color = mix(pink, yellow, vUv.y);
color = mix(color, white, grid * 0.5);

// Fresnel highlight
float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 3.0);
```

---

## Post-Processing Pipeline

```
Scene Render
  ↓
God Rays (radial blur from light source)
  ↓
Bloom (glow on bright areas)
  ↓
Color Correction (saturation, brightness, contrast)
  ↓
Screen Output
```

---

## Performance Optimizations

1. **Module Recycling**: Old modules removed and new ones spawned
2. **Distance Culling**: Modules >100 units behind camera are disposed
3. **Audio Fade**: Distant audio fades instead of hard cutoff
4. **Limited Module Count**: ~15-25 modules active at once
5. **LOD Materials**: Simple shaders for performance
6. **Exponential Spatial Audio**: Natural falloff without expensive calculations

---

## Usage

### Starting the Experience
1. User clicks "Start Vaporwave Experience" button
2. Tone.js initializes Web Audio API context
3. Reverb is configured (8s decay, 40% wet)
4. Initial 15 modules spawn ahead
5. Animation loop begins
6. Camera starts advancing on Z-axis

### User Interaction
- **Auto-start audio**: First click/touch/keystroke activates audio
- **Continuous**: No user input needed after start
- **Infinite**: Tunnel never ends, modules continuously cycle

---

## Configuration Reference

### Tuneable Parameters

```javascript
// Z-Tunnel
zSpeed: 0.03              // Camera forward speed
moduleSpawnDistance: 150  // How far ahead to spawn
moduleLifetime: 100       // How long behind camera before removal

// Fog
fogNear: 20              // Fog start distance
fogFar: 180              // Full fog distance
fogColor: 0x1a0520       // Deep purple

// Audio
reverbDecay: 8.0         // Reverb length in seconds
reverbWet: 0.4           // 40% reverb mix
masterVolume: -25        // dB
spatialRolloff: 1.5      // Distance attenuation rate

// Visual
bloomStrength: 0.8       // Glow intensity
bloomRadius: 0.6         // Glow spread
saturation: 1.4          // Color vibrancy
brightness: 0.9          // Overall darkness
```

---

## Artistic Intent

**Poignant, nostalgic, ochre vaporwave aesthetic** achieved through:
- **Slow everything**: Movement, rotation, audio modulation
- **Deep reverb**: 8-second tail creates space and memory
- **Fog**: Obscures distant objects, creates mystery
- **God rays**: Ethereal light suggests transcendence
- **Muted volumes**: -25dB master, -40dB per source
- **Pastel glows**: Bloom on vibrant colors
- **Spatial audio**: Sound moves through 3D space
- **Infinite tunnel**: Endless forward journey, meditative

The experience evokes:
- 🌊 Drift
- 🌅 Nostalgia  
- 🌌 Infinity
- 💭 Memory
- 🎹 Synthesis
- 👁️ Contemplation

---

## Technical Stack

- **Three.js**: 3D rendering, post-processing
- **Tone.js**: Web Audio API wrapper, spatial audio
- **GLSL**: Custom shaders for materials and effects
- **Astro**: Component framework
- **TypeScript**: Type safety

---

## Future Enhancements

- [ ] Interactive camera control (mouse/touch)
- [ ] MIDI input for live parameter control
- [ ] Additional module types (pyramids, toruses)
- [ ] Particle systems
- [ ] Audio reactive visuals (FFT analysis)
- [ ] Save/load preset configurations
- [ ] VR support
- [ ] Generative music system

---

*Created with nostalgia for the future* 🌸✨
