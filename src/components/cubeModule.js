import * as THREE from "three";
import * as Tone from "tone";
import TWEEN from "@tweenjs/tween.js";

export default function CubeModule() {
  const CUBE_COUNT = 5;
  const BPM = 132;
  const cubeDuration = (60 / BPM) * 1000;
  let scene, reverb, listener;

  const createCube = () => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({
      color: Math.random() * 0xffffff,
      emissive: Math.random() * 0xffffff,
      emissiveIntensity: 0.5,
    });
    const cube = new THREE.Mesh(geometry, material);

    const startX = THREE.MathUtils.randFloatSpread(20);
    const startY = THREE.MathUtils.randFloatSpread(20);
    const startZ = THREE.MathUtils.randFloatSpread(20);
    cube.position.set(startX, startY, startZ);

    // Add positional audio
    const sound = new THREE.PositionalAudio(listener);
    const audioContext = listener.context;

    // Create a buffer with a sine wave tone
    const buffer = createToneBuffer(audioContext, 220); // A3 note
    sound.setBuffer(buffer);
    sound.setRefDistance(5);
    sound.setRolloffFactor(2);
    sound.setDistanceModel("exponential");
    sound.gain.gain.value = 0.3;
    sound.setLoop(true);
    cube.add(sound);
    sound.play();

    scene.add(cube);

    const endX = THREE.MathUtils.randFloatSpread(20);
    const endY = THREE.MathUtils.randFloatSpread(20);
    const endZ = THREE.MathUtils.randFloatSpread(20);

    // Animate immediately
    new TWEEN.Tween(cube.position)
      .to({ x: endX, y: endY, z: endZ }, cubeDuration)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onComplete(() => {
        sound.stop();
        scene.remove(cube);
      })
      .start();

    // Fade out the sound
    new TWEEN.Tween({ volume: 0.3 })
      .to({ volume: 0 }, cubeDuration)
      .easing(TWEEN.Easing.Exponential.Out)
      .onUpdate(({ volume }) => {
        sound.gain.gain.value = volume;
      })
      .start();

    return cube;
  };

  // Helper function to create a buffer with a sine wave tone
  const createToneBuffer = (context, frequency) => {
    const sampleRate = context.sampleRate;
    const duration = 1; // 1 second buffer
    const numSamples = sampleRate * duration;
    const buffer = context.createBuffer(1, numSamples, sampleRate);
    const channelData = buffer.getChannelData(0);

    for (let i = 0; i < numSamples; i++) {
      channelData[i] = Math.sin((2 * Math.PI * frequency * i) / sampleRate);
    }

    return buffer;
  };

  const startCubeAnimation = async () => {
    console.log("Cube animation starting...");

    for (let i = 0; i < CUBE_COUNT; i++) {
      createCube();
      // Wait a bit before creating next cube
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  };

  return {
    init: (sharedScene, sharedListener, sharedReverb) => {
      scene = sharedScene;
      listener = sharedListener;
      reverb = sharedReverb;
      console.log("CubeModule initialized with scene, listener, and reverb");
    },
    startCubeAnimation,
    createCube,
  };
}
