import { useEffect, useRef } from "react";

export default function HeroScene() {
  const containerRef = useRef(null);
  const hudRef = useRef(null);

  const gyroEnabledRef = useRef(false);
  const gyroDataRef = useRef({ x: 0, y: 0, z: 0 });

  const audioStartedRef = useRef(false);
  const isMobileRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.THREE) return;

    let audioContext;
    let oscillator;

    let scene, camera, renderer, controls, movingCube, clock;

    isMobileRef.current =
      matchMedia("(pointer: coarse)").matches ||
      /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const fmt = (v) => (Number.isFinite(v) ? v.toFixed(1) : "0.0");

    const updateHUD = () => {
      if (!hudRef.current) return;
      if (!isMobileRef.current) return;
      if (!gyroEnabledRef.current) return;

      const { x, y, z } = gyroDataRef.current;
      // x top, y middle, z bottom
      hudRef.current.innerHTML = `${fmt(x)}<br/>${fmt(y)}<br/>${fmt(z)}`;
    };

    const onDeviceOrientation = (e) => {
      // x,y,z mapping (beta,gamma,alpha)
      gyroDataRef.current.x = e.beta ?? 0;
      gyroDataRef.current.y = e.gamma ?? 0;
      gyroDataRef.current.z = e.alpha ?? 0;
      updateHUD();
    };

    const enableGyro = async () => {
      if (gyroEnabledRef.current) return;

      if (typeof DeviceOrientationEvent === "undefined") {
        console.warn("DeviceOrientationEvent not supported.");
        return;
      }

      try {
        if (typeof DeviceOrientationEvent.requestPermission === "function") {
          const permissionState = await DeviceOrientationEvent.requestPermission();
          console.log("DeviceOrientation permission:", permissionState);
          if (permissionState !== "granted") return;
        }

        window.addEventListener("deviceorientation", onDeviceOrientation, true);
        gyroEnabledRef.current = true;
        console.log("Gyro enabled.");
        updateHUD();
      } catch (err) {
        console.error("Gyro enable failed:", err);
      }
    };

    const initializeAudio = async () => {
      if (audioStartedRef.current) return;

      try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        await audioContext.resume();

        oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        gainNode.gain.value = 0.01;

        oscillator.type = "sawtooth";
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime);

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        audioStartedRef.current = true;

        console.log("Audio initialized.");
      } catch (e) {
        console.error("Audio init failed:", e);
      }
    };

    const initializeThreeJS = () => {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);

      if (containerRef.current) containerRef.current.appendChild(renderer.domElement);

      scene.add(new THREE.GridHelper(20, 20));

      movingCube = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({ color: 0xff0000 })
      );
      scene.add(movingCube);

      camera.position.set(0, 5, 10);
      camera.lookAt(0, 0, 0);

      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.1;

      const keyState = {
        w: false,
        a: false,
        s: false,
        d: false,
        arrowup: false,
        arrowdown: false,
        arrowleft: false,
        arrowright: false,
      };

      const onKeyDown = (e) => {
        keyState[e.key.toLowerCase()] = true;
      };
      const onKeyUp = (e) => {
        keyState[e.key.toLowerCase()] = false;
      };

      window.addEventListener("keydown", onKeyDown);
      window.addEventListener("keyup", onKeyUp);

      const handleKeyboard = (delta) => {
        const moveSpeed = 5 * delta;
        if (keyState.w || keyState.arrowup) camera.position.z -= moveSpeed;
        if (keyState.s || keyState.arrowdown) camera.position.z += moveSpeed;
        if (keyState.a || keyState.arrowleft) camera.position.x -= moveSpeed;
        if (keyState.d || keyState.arrowright) camera.position.x += moveSpeed;
      };

      const handleGyro = (delta) => {
        if (!gyroEnabledRef.current) return;

        const moveSpeed = 2 * delta;
        const { x, y } = gyroDataRef.current;

        if (x > 15) camera.position.z -= (moveSpeed * Math.abs(x - 15)) / 10;
        if (x < -5) camera.position.z += (moveSpeed * Math.abs(x + 5)) / 10;
        if (y > 5) camera.position.x += (moveSpeed * Math.abs(y - 5)) / 10;
        if (y < -5) camera.position.x -= (moveSpeed * Math.abs(y + 5)) / 10;
      };

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onResize);

      clock = new THREE.Clock();

      const animate = () => {
        requestAnimationFrame(animate);

        const delta = clock.getDelta();

        handleKeyboard(delta);
        handleGyro(delta);

        controls.update();

        movingCube.rotation.x += delta * 0.5;
        movingCube.rotation.y += delta * 0.5;

        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener("resize", onResize);
        window.removeEventListener("keydown", onKeyDown);
        window.removeEventListener("keyup", onKeyUp);
      };
    };

    const cleanupThree = initializeThreeJS();

    const onFirstUserGesture = async (e) => {
      await initializeAudio();
      await enableGyro();

      window.removeEventListener("pointerup", onFirstUserGesture);
      window.removeEventListener("touchend", onFirstUserGesture);
      window.removeEventListener("click", onFirstUserGesture);
    };

    window.addEventListener("pointerup", onFirstUserGesture, { once: true });
    window.addEventListener("touchend", onFirstUserGesture, { once: true });
    window.addEventListener("click", onFirstUserGesture, { once: true });

    return () => {
      window.removeEventListener("deviceorientation", onDeviceOrientation, true);

      window.removeEventListener("pointerup", onFirstUserGesture);
      window.removeEventListener("touchend", onFirstUserGesture);
      window.removeEventListener("click", onFirstUserGesture);

      if (oscillator) oscillator.stop();
      if (audioContext) audioContext.close();

      if (cleanupThree) cleanupThree();

      if (renderer) renderer.dispose();

      if (containerRef.current && renderer?.domElement?.parentElement === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-screen z-1 overflow-hidden"
      style={{ touchAction: "none", position: "fixed" }}
    >
      <div ref={hudRef} className="gyro-hud" />
      <style>{`
        .gyro-hud{
          display:none;
          position:absolute;
          left:10px;
          bottom:10px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size:12px;
          line-height:1.15;
          opacity:0.5;
          color:white;
          user-select:none;
          pointer-events:none;
        }
        @media (pointer: coarse){
          .gyro-hud{ display:block; }
        }
      `}</style>
    </div>
  );
}