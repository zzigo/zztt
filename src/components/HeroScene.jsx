import { useEffect, useRef, useState } from 'react';

export default function HeroScene() {
  const containerRef = useRef(null);
  const [gyroEnabled, setGyroEnabled] = useState(false);
  const gyroData = useRef({ beta: 0, gamma: 0 });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.THREE) return;

    let audioStarted = false;
    let audioContext;
    let oscillator;
    let scene, camera, renderer, controls, movingCube, clock;

    const handleGyroEnable = () => {
      if (gyroEnabled) return;
      if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
          .then(permissionState => {
            if (permissionState === 'granted') {
              window.addEventListener('deviceorientation', (e) => {
                gyroData.current = { beta: e.beta, gamma: e.gamma };
              });
              setGyroEnabled(true);
            }
          })
          .catch(console.error);
      } else {
        // For devices that don't require permission
        window.addEventListener('deviceorientation', (e) => {
          gyroData.current = { beta: e.beta, gamma: e.gamma };
        });
        setGyroEnabled(true);
      }
    };

    const initializeThreeJS = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (containerRef.current) {
        containerRef.current.appendChild(renderer.domElement);
      }

      const gridHelper = new THREE.GridHelper(20, 20);
      scene.add(gridHelper);

      const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
      const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      movingCube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      scene.add(movingCube);

      camera.position.set(0, 5, 10);
      camera.lookAt(0, 0, 0);

      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.1;

      const keyState = { w: false, a: false, s: false, d: false, arrowup: false, arrowdown: false, arrowleft: false, arrowright: false };
      window.addEventListener("keydown", (e) => (keyState[e.key.toLowerCase()] = true));
      window.addEventListener("keyup", (e) => (keyState[e.key.toLowerCase()] = false));

      const handleKeyboard = (delta) => {
        const moveSpeed = 5 * delta;
        if (keyState.w || keyState.arrowup) camera.position.z -= moveSpeed;
        if (keyState.s || keyState.arrowdown) camera.position.z += moveSpeed;
        if (keyState.a || keyState.arrowleft) camera.position.x -= moveSpeed;
        if (keyState.d || keyState.arrowright) camera.position.x += moveSpeed;
      };
      
      const handleGyro = (delta) => {
        if (!gyroEnabled) return;
        const moveSpeed = 2 * delta;
        
        const beta = gyroData.current.beta || 0;
        const gamma = gyroData.current.gamma || 0;

        if (beta > 15) camera.position.z -= moveSpeed * Math.abs(beta-15)/10;
        if (beta < -5) camera.position.z += moveSpeed * Math.abs(beta+5)/10;
        if (gamma > 5) camera.position.x += moveSpeed * Math.abs(gamma-5)/10;
        if (gamma < -5) camera.position.x -= moveSpeed * Math.abs(gamma+5)/10;
      };

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", handleResize);

      clock = new THREE.Clock();
      animate();

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("keydown", (e) => (keyState[e.key.toLowerCase()] = true));
        window.removeEventListener("keyup", (e) => (keyState[e.key.toLowerCase()] = false));
      };
    };

    const initializeAudio = async () => {
      try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        await audioContext.resume();
        oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        gainNode.gain.value = 0.01;
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
        oscillator.start();
        console.log("Audio initialized successfully");
        audioStarted = true;
      } catch (error) {
        console.error("Failed to initialize audio:", error);
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();

      handleKeyboard(delta);
      handleGyro(delta);
      
      controls.update();

      if (movingCube) {
        movingCube.rotation.x += delta * 0.5;
        movingCube.rotation.y += delta * 0.5;
      }
      
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };

    const cleanup = initializeThreeJS();

    const handleFirstInteraction = async (event) => {
      if (!audioStarted) {
        console.log("Starting audio context from", event.type);
        await initializeAudio();
      }
      if (event.type === 'touchstart') {
        handleGyroEnable();
      }
    };

    const interactionListeners = ["click", "keydown", "touchstart"].map(event => {
      const listener = (e) => {
        handleFirstInteraction(e).catch(console.error);
      };
      window.addEventListener(event, listener, { once: true });
      return { event, listener };
    });

    return () => {
      if (oscillator) oscillator.stop();
      if (audioContext) audioContext.close();
      if (renderer) renderer.dispose();
      if (containerRef.current && renderer.domElement.parentElement === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      interactionListeners.forEach(({ event, listener }) => {
        window.removeEventListener(event, listener);
      });
      if (cleanup) cleanup();
    };
  }, []);
  
  return (
    <div ref={containerRef} className="fixed top-0 left-0 w-full h-screen z-1 overflow-hidden" />
  );
}
