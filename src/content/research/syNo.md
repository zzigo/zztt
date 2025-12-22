---
title: syNo (Synthesis Notation)
description: obfuscated sound synthesis language for obsidian
pubDate: 2025-02-15
codeURL: https://github.com/zzigo/syno
heroImage: https://i.imgur.com/13hqS4e.png
---

SYNO is a markup language designed for synthesis inside Obsidian. It enables structured and flexible sound synthesis using a compact notation. This plugin provides a parser, audio engine, and UI for real-time control and visualization of synthesis parameters.

# philosophy
- Thrive on “deviations, tiny errors, conceptual contradictions, fuzzy information”—this aligns with modular synths like Eurorack, where unexpected interactions spark beauty. A structure that’s too rigid or deterministic could stifle this.
- a **loose coupling** approach—modules should interact via flexible interfaces (e.g., audio nodes, buffers) rather than strict contracts. This allows “fuzzy” inputs to propagate through the system, creating emergent effects.
- **Syntax evolution** 
	- it propose the modular writing, nodes are written without () or points
	- terse, formulaic, energy-efficient for live coding, resembling modular synth patching.
	- Parentheses reserved for nesting ((s100r100 t200)c300) mirrors Eurorack’s physical patching—inputs flow into outputs, processors act on groups.
	- Use a **Token-Based Parser** to handle the flat, space-separated style (`s100r100`) and parentheses for nesting. 

*(syNo will be ported to javascript soon)*

## examples

the code 

```syno
s100>500v0>1p-1>1  
```


renders as
![](https://i.imgur.com/hqEucJz.png)

meaning

*play a 100Hz sintone gliss to 500Hz in 4 seconds, fading in the volume from 0 to 1 and fading out to 0 in 4 seconds, meanwhile pan from left (-1) to right (1) in 4 seconds*