export function createAsset(scene, listener, THREE, Tone) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
  
    const reverb = new Tone.Reverb({
      decay: 2,
      wet: 0.5,
    }).toDestination();
  
    const synth = new Tone.Synth().connect(reverb);
  
    const oscillator = new Tone.Oscillator({
      frequency: "C4",
      type: "sine",
      volume: -20,
    }).connect(reverb);
  
    const positionalAudio = new THREE.PositionalAudio(listener);
    const gainNode = Tone.context.createGain();
    oscillator.connect(gainNode);
    positionalAudio.setNodeSource(gainNode);
    cube.add(positionalAudio);
  
    oscillator.start();
  
    return {
      object: cube,
      update: (delta) => {
        cube.rotation.x += delta * 0.5;
        cube.rotation.y += delta * 0.5;
  
        const distance = listener.position.distanceTo(cube.position);
        const volume = Math.max(-50, -distance * 2);
        gainNode.gain.value = Math.pow(10, volume / 20);
      },
    };
  }