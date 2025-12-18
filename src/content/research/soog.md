---
title: SOOG
description:The Speculative Organology Organogram Generator 
pubDate: 2024-12-17
codeURL: https://github.com/azzigotti/soog
url: https://soog.zztt.org
heroImage: https://i.imgur.com/0iLlcGo.png
---



SOOG is an innovative online platform that leverages AI to create and visualize organograms for musical instruments, blending speculative instrumental invention with structured organological analysis. Inspired by Mantle Hood’s organograms, SOOG employs a graph-based data structure to represent instruments (nodes) and their taxonomic, functional, or cultural connections (edges). This approach formalizes speculative organology as a distributed cognitive process (shared by human and non-human agents), a generative and performative network that enables computational exploration of instrument thinking, classification, and cross-cultural diffusion. The AI integrates hierarchical realms (speculative, fictional, or conceptual ideas) with non-hierarchical realms (the structured domains of playable instrument components), deliberately preserving ambiguity where traditional classification systems tend to collapse complexity.

  

Mantle Hood’s [organogram](https://www.researchgate.net/publication/319560743_Musical_Organics_A_Heterarchical_Approach_to_Digital_Organology) emerged as a response to the limitations of static, lineage-based classification systems such as Sachs–Hornbostel. Rather than asking what an instrument is in a taxonomic sense, Hood proposed a functional diagram that asks how an instrument operates as a system. His organograms decompose instruments into interacting domains such as *sound production*, *interface* *excitation*, *control*, *resonance*, and *cultural context*, emphasizing process, performative **affordance**, and internal relations over typological labels. The organogram is therefore not a taxonomy but a functional instrumental score: a way to visualize instrumental components as an operational configuration.

  

Understanding this shift is essential to understanding the strength of SOOG. SOOG does not merely reference Hood’s organograms as a historical model; it extends their logic into a computational, generative environment. By translating functional relations into graph structures, SOOG turns the organogram into an active system that can be queried, recombined, simulated, and expanded beyond existing instruments. What was originally an analytical diagram becomes, in SOOG, a productive engine: capable of generating speculative instruments, tracing hybrid genealogies, and negotiating between physical components, materials, gestures, and cultural imaginaries. Without grasping Hood’s move from classification to function, SOOG risks being misread as another taxonomy tool, rather than what it actually is: a framework for instrumental thought that operates across analysis, invention, and fabrication.



In its first stage, SOOG generates symbolic organograms that combine acoustic and augmented instrument designs with contemporary technological elements. In the second stage, it produces data-informed outputs, including material suggestions, 3D models, and schematics tailored for digital fabrication. Key applications include dynamic taxonomy generation, modeling of cultural transmission, and predictive instrument innovation, linking object-oriented composition, music, and future design practices to a deeper, functionally grounded organological understanding.



## Original Mantle Hood prompt (experimental setup)

  
This section documents a controlled experiment in which the SOOG model was fine-tuned using the methodological instructions found in [[hoodEthnomusicologist1982]]. The aim is to test how SOOG responds when given Mantle Hood’s original textual description of an African xylophone, and to compare the resulting organogram with Hood’s own graphical formulation.

  

### Mantle Hood organological description**



The following text is Mantle Hood’s original descriptive summary of an African xylophone, used here verbatim as a prompt. It condenses performer posture, playing technique, material classification (HSM), and resonator modification into a compact organological statement.

```
Resonator modified by membrane attachment (e.g., spider egg case in African xylophone gourd resonator producing buzz)—summary: player standing or seated on ground; instrument in horizontal position and supported by rail with body strap; 12 (#12) wooden (HSM 5) keys played with two padded sticks; gourd (HSM 1) resonators suspended singly and modified by attached membranes
```

![|400](https://i.imgur.com/9MLyHCE.png)

### SOOG-generated interpretation and organogram reasoning

  
This section presents SOOG’s response when prompted with Mantle Hood’s original description. The model reformulates the textual data into a step-by-step organogram construction, explicitly translating organological features into geometric primitives, interface elements, and performative relations, revealing both its interpretative logic and its divergence from Hood’s original graphical conventions.

```
Resonator modified by membrane attachment (e.g., spider egg case in African xylophone gourd resonator producing buzz)—description: player standing or seated on ground; instrument in horizontal position and supported by rail with body strap; 12 (#12) wooden (HSM 5) keys played with two padded sticks; gourd (HSM 1) resonators suspended singly and modified by attached membranes

Alright, let's start by abstracting the shapes. The instrument is mainly a xylophone that falls within the category of Idiophones, so we'll depict that as a square. The resonator is a gourd which is attached by a membrane, and the performer's position is standing or seated on the ground. We'll represent the player's position with a dotted line and a small white circle. There's also a rail with a body strap, which we'll represent with another geometric shape.

For the interface, there are 12 wooden keys played with two padded sticks, represented by a different color.

Lastly, to indicate movements, we will use arrows. Let's draw this organogram.
```


### answer by soog

```python
Resonator modified by membrane attachment (e.g., spider egg case in African xylophone gourd resonator producing buzz)—description: player standing or seated on ground; instrument in horizontal position and supported by rail with body strap; 12 (#12) wooden (HSM 5) keys played with two padded sticks; gourd (HSM 1) resonators suspended singly and modified by attached membranes

Alright, let's start by abstracting the shapes. The instrument is mainly a xylophone that falls within the category of Idiophones, so we'll depict that as a square. The resonator is a gourd which is attached by a membrane, and the performer's position is standing or seated on the ground. We'll represent the player's position with a dotted line and a small white circle. There's also a rail with a body strap, which we'll represent with another geometric shape.

For the interface, there are 12 wooden keys played with two padded sticks, represented by a different color.

Lastly, to indicate movements, we will use arrows. Let's draw this organogram.
```

generation 1.
![|400](https://i.imgur.com/FVwNt6Z.png)

generation 2.
![|400](https://i.imgur.com/VSfpBWN.png)


## other prompts

```python
 Envision a timpani with membranes made from acoustic Floquet metamaterials...
```
![|400](https://i.imgur.com/I3Djo4W.png)


```python
generate a saxophone mixed with a cymbal, it should have a point of interchange between the two 
```

![|400](https://i.imgur.com/3exfz1F.png)
