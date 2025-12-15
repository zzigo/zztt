import { useEffect, useRef } from 'react';

export default function HeroScene() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (typeof window === 'undefined' || !window.THREE) return;

    let audioStarted = false;
    let audioContext;
    let oscillator;
    let scene, camera, renderer, controls, movingCube, clock;

    const initializeThreeJS = () => {
      // **Three.js setup**
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (containerRef.current) {
        containerRef.current.appendChild(renderer.domElement);
      }

      // Add grid helper
      const gridHelper = new THREE.GridHelper(20, 20);
      scene.add(gridHelper);

      // Add a moving cube
      const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
      const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      movingCube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      scene.add(movingCube);

      // Camera setup
      camera.position.set(0, 5, 10);
      camera.lookAt(0, 0, 0);

      // Orbit Controls
      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.1;

      // WASD Controls
      const keyState = { w: false, a: false, s: false, d: false };
      window.addEventListener("keydown", (e) => (keyState[e.key.toLowerCase()] = true));
      window.addEventListener("keyup", (e) => (keyState[e.key.toLowerCase()] = false));

      const handleWASD = (delta) => {
        const moveSpeed = 5 * delta;
        if (keyState.w) camera.position.z -= moveSpeed;
        if (keyState.s) camera.position.z += moveSpeed;
        if (keyState.a) camera.position.x -= moveSpeed;
        if (keyState.d) camera.position.x += moveSpeed;

        // Keep camera looking at the origin
        camera.lookAt(0, 0, 0);
      };

      // Resize listener
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", handleResize);

      // Initialize clock
      clock = new THREE.Clock();

      // Start animation
      animate();

      // Return cleanup function for resize listener
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    };

    const initializeAudio = async () => {
      try {
        // Create audio context
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        await audioContext.resume();

        // Create oscillator
        oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        gainNode.gain.value = 0.01; // Lower volume

        // Connect nodes
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Set oscillator type and frequency
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // A4 note

        // Start oscillator
        oscillator.start();
        
        console.log("Audio initialized successfully");
        audioStarted = true;
      } catch (error) {
        console.error("Failed to initialize audio:", error);
      }
    };

    const animate = () => {
      const delta = clock.getDelta();

      // Update OrbitControls
      controls.update();

      // Rotate cube
      if (movingCube) {
        movingCube.rotation.x += delta * 0.5;
        movingCube.rotation.y += delta * 0.5;
      }

      // Render scene
      renderer.render(scene, camera);

      requestAnimationFrame(animate);
    };

    // Initialize Three.js first
    const cleanup = initializeThreeJS();

    // Add interaction listeners for audio
    const startAudioContext = async (event) => {
      if (!audioStarted) {
        console.log("Starting audio context from", event.type);
        await initializeAudio();
      }
    };

    const audioListeners = ["click", "keydown", "touchstart"].map(event => {
      const listener = (e) => {
        startAudioContext(e).catch(console.error);
      };
      window.addEventListener(event, listener, { once: true });
      return { event, listener };
    });

    // Cleanup
    return () => {
      if (oscillator) {
        oscillator.stop();
      }
      if (audioContext) {
        audioContext.close();
      }
      if (renderer) {
        renderer.dispose();
      }
      if (containerRef.current && renderer) {
        containerRef.current.removeChild(renderer.domElement);
      }
      // Remove event listeners
      audioListeners.forEach(({ event, listener }) => {
        window.removeEventListener(event, listener);
      });
      // Call cleanup from initializeThreeJS
      if (cleanup) cleanup();
    };
  }, []);

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-screen z-1 overflow-hidden" />;
}
