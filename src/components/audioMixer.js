import * as Tone from "tone";
import * as THREE from "three";

export default function AudioMixer() {
  // Main mixer components
  let masterGain;
  let reverbNode;
  let delayNode;
  
  // Gain nodes for different audio sources
  let gainNodes = {
    // Sphere audio
    sphereOscillators: null,
    sphereGrainPlayers: null,
    
    // Cube audio
    cubeOscillators: null,
    
    // Lighting bar audio
    lightingBarNoise: null,
    
    // Pulse audio
    pulseOscillators: null,
    
    // Floating model audio
    floatingModelAudio: null,
    
    // Effect sends
    reverbSend: null,
    delaySend: null
  };
  
  // UI elements
  let mixerElement;
  let isVisible = false;
  
  // Initialize the mixer
  const init = () => {
    console.log("Initializing Audio Mixer");
    
    // Create master gain
    masterGain = new Tone.Gain(0.8).toDestination();
    
    // Create effect nodes
    reverbNode = new Tone.Reverb({
      decay: 5,
      wet: 0.5,
      preDelay: 0.1
    });
    
    delayNode = new Tone.FeedbackDelay({
      delayTime: 0.25,
      feedback: 0.4,
      wet: 0.3
    });
    
    // Create gain nodes for each audio source
    Object.keys(gainNodes).forEach(key => {
      gainNodes[key] = new Tone.Gain(0.8);
      
      // Connect source gains to master
      if (key !== 'reverbSend' && key !== 'delaySend') {
        gainNodes[key].connect(masterGain);
      }
    });
    
    // Connect effect sends
    gainNodes.reverbSend.connect(reverbNode);
    reverbNode.connect(masterGain);
    
    gainNodes.delaySend.connect(delayNode);
    delayNode.connect(masterGain);
    
    // Create UI
    createMixerUI();
    
    return {
      gainNodes,
      masterGain,
      reverbNode,
      delayNode
    };
  };
  
  // Connect an audio node to the mixer
  const connectNode = (node, type) => {
    if (!node || !gainNodes[type]) return;
    
    // Disconnect from any previous connections to destination
    try {
      node.disconnect(Tone.Destination);
    } catch (e) {
      // Ignore errors if not connected
    }
    
    // Connect to appropriate gain node
    node.connect(gainNodes[type]);
    
    // Also connect to effects based on type
    if (type.includes('Oscillators') || type.includes('GrainPlayers') || type === 'floatingModelAudio') {
      // Create a split to send to effects
      const splitter = new Tone.Split();
      node.connect(splitter);
      splitter.connect(gainNodes.reverbSend, 0);
      splitter.connect(gainNodes.delaySend, 1);
    }
    
    console.log(`Connected ${type} to mixer`);
  };
  
  // Connect a Three.js positional audio to the mixer
  const connectThreeAudio = (threeAudio, type) => {
    if (!threeAudio) return;
    
    // Store the original volume
    const originalVolume = threeAudio.getVolume();
    
    // Create a gain control for this Three.js audio
    const gainControl = {
      setVolume: (value) => {
        threeAudio.setVolume(originalVolume * value);
      }
    };
    
    // Add to a list of Three.js audio objects to control
    threeAudioControls[type] = gainControl;
    
    console.log(`Connected Three.js ${type} to mixer`);
  };
  
  // Storage for Three.js audio controls
  const threeAudioControls = {};
  
  // Create the mixer UI
  const createMixerUI = () => {
    // Create mixer container
    mixerElement = document.createElement('div');
    mixerElement.id = 'audio-mixer';
    mixerElement.style.position = 'fixed';
    mixerElement.style.bottom = '15px';
    mixerElement.style.right = '15px';
    mixerElement.style.width = '200px';
    mixerElement.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    mixerElement.style.borderRadius = '0px';
    mixerElement.style.padding = '10px';
    mixerElement.style.color = '#fff';
    mixerElement.style.fontFamily = 'Arial, sans-serif';
    mixerElement.style.zIndex = '1000';
    mixerElement.style.display = 'none';
    mixerElement.style.boxShadow = '0 0 20px rgba(197, 197, 197, 0.5)';
    mixerElement.style.backdropFilter = 'blur(10px)';
    
    // Create mixer title
    const title = document.createElement('h2');
    title.textContent = '';
    title.style.margin = '0 0 15px 0';
    title.style.textAlign = 'center';
    title.style.color = 'rgba(188, 188, 188, 1)';
    mixerElement.appendChild(title);
    
    // Create master volume control
    createSlider(mixerElement, 'Master Volume', 0.8, (value) => {
      masterGain.gain.value = value;
    });
    
    // Create section divider
    createDivider(mixerElement, 'Sound Sources');
    
    // Create sliders for each audio source
    createSlider(mixerElement, 'Sphere Oscillators', 0.8, (value) => {
      if (gainNodes.sphereOscillators) gainNodes.sphereOscillators.gain.value = Math.min(1, Math.max(0, value));
    });
    
    createSlider(mixerElement, 'Sphere Grain Players', 0.8, (value) => {
      if (gainNodes.sphereGrainPlayers) gainNodes.sphereGrainPlayers.gain.value = Math.min(1, Math.max(0, value));
    });
    
    createSlider(mixerElement, 'Cube Oscillators', 0.8, (value) => {
      if (gainNodes.cubeOscillators) gainNodes.cubeOscillators.gain.value = Math.min(1, Math.max(0, value));
    });
    
    createSlider(mixerElement, 'Lighting Bar Noise', 0.8, (value) => {
      if (gainNodes.lightingBarNoise) gainNodes.lightingBarNoise.gain.value = Math.min(1, Math.max(0, value));
    });
    
    createSlider(mixerElement, 'Pulse Oscillators', 0.8, (value) => {
      if (gainNodes.pulseOscillators) gainNodes.pulseOscillators.gain.value = Math.min(1, Math.max(0, value));
    });
    
    createSlider(mixerElement, 'Floating Model Audio', 0.8, (value) => {
      if (gainNodes.floatingModelAudio) gainNodes.floatingModelAudio.gain.value = Math.min(1, Math.max(0, value));
      if (threeAudioControls.floatingModelAudio) threeAudioControls.floatingModelAudio.setVolume(Math.min(1, Math.max(0, value)));
    });
    
    // Create section divider
    createDivider(mixerElement, 'Effects');
    
    // Create effect controls
    createSlider(mixerElement, 'Reverb Amount', 1, (value) => {
      reverbNode.wet.value = Math.min(1, Math.max(0, value));
    });
    
    createSlider(mixerElement, 'Delay Amount', 0.3, (value) => {
      delayNode.wet.value = Math.min(1, Math.max(0, value));
    });
    
    createSlider(mixerElement, 'Delay Time', 0.25, (value) => {
      delayNode.delayTime.value = Math.min(2, Math.max(0, value * 2)); // 0-2 seconds
    });
    
    createSlider(mixerElement, 'Delay Feedback', 0.4, (value) => {
      delayNode.feedback.value = Math.min(1, Math.max(0, value));
    });
    
    // Create toggle button
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'mixer';
    toggleButton.style.position = 'fixed';
    toggleButton.style.bottom = '15px';
    toggleButton.style.right = '15px';
    toggleButton.style.padding = '10px 10px';
    toggleButton.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    toggleButton.style.color = 'rgba(147, 147, 147, 1)';
    toggleButton.style.border = '1px solid rgba(218, 218, 218, 1)';
    toggleButton.style.borderRadius = '5px';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.zIndex = '1001';
    toggleButton.style.boxShadow = '0 0 10px rgba(146, 146, 146, 0.5)';
    
    toggleButton.onclick = () => {
      isVisible = !isVisible;
      mixerElement.style.display = isVisible ? 'block' : 'none';
      toggleButton.textContent = isVisible ? 'mixer-' : 'mixer+';
    };
    
    // Add elements to document
    document.body.appendChild(mixerElement);
    document.body.appendChild(toggleButton);
  };
  
  // Helper to create a slider
  const createSlider = (parent, label, defaultValue, onChange) => {
    const container = document.createElement('div');
    container.style.marginBottom = '10px';
    
    const labelElement = document.createElement('div');
    labelElement.textContent = label;
    labelElement.style.marginBottom = '5px';
    container.appendChild(labelElement);
    
    const sliderContainer = document.createElement('div');
    sliderContainer.style.display = 'flex';
    sliderContainer.style.alignItems = 'center';
    
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '0';
    slider.max = '1';
    slider.step = '0.01';
    slider.value = defaultValue.toString();
    slider.style.flex = '1';
    slider.style.height = '20px';
    slider.style.accentColor = 'rgba(222, 222, 222, 1)';
    
    const valueDisplay = document.createElement('span');
    valueDisplay.textContent = defaultValue.toFixed(2);
    valueDisplay.style.marginLeft = '10px';
    valueDisplay.style.width = '40px';
    valueDisplay.style.textAlign = 'right';
    
    slider.oninput = () => {
      const value = parseFloat(slider.value);
      // Clamp value to valid range
      const clampedValue = Math.min(1, Math.max(0, value));
      valueDisplay.textContent = clampedValue.toFixed(2);
      onChange(clampedValue);
    };
    
    sliderContainer.appendChild(slider);
    sliderContainer.appendChild(valueDisplay);
    container.appendChild(sliderContainer);
    parent.appendChild(container);
  };
  
  // Helper to create a section divider
  const createDivider = (parent, title) => {
    const divider = document.createElement('div');
    divider.style.margin = '15px 0';
    divider.style.borderBottom = '1px solid rgba(164, 164, 164, 1)';
    divider.style.paddingBottom = '5px';
    divider.style.color = 'rgba(118, 118, 118, 1)';
    divider.style.fontWeight = 'bold';
    divider.textContent = title;
    parent.appendChild(divider);
  };
  
  // Update audio context status
  const updateAudioContext = (audioContext) => {
    if (audioContext && audioContext.state === "running") {
      audioContextReady = true;
    } else {
      audioContextReady = false;
    }
  };
  
  // Return public methods
  return {
    init,
    connectNode,
    connectThreeAudio,
    updateAudioContext,
    getGainNodes: () => gainNodes,
    getMasterGain: () => masterGain,
    getReverbNode: () => reverbNode,
    getDelayNode: () => delayNode
  };
} 