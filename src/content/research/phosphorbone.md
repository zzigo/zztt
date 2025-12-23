---
title: phosphorbone
description: speculative luminiscent trombon
pubDate: 2025-10-23
heroImage: https://i.imgur.com/OmAtGI9.png
---

this is my first prototype based on speculative organology methods and [[soog]]:
<figure class="center">
<img src="https://i.imgur.com/HK79i48.png" alt="Description" />
<figcaption>soog organogram</figcaption>
</figure>

<details class="callout callout-tip">
  <summary class="callout-title">Phosphorbone's Soog prompt</summary>
  <div class="callout-content">
    <div class="callout-section">
      <div class="callout-section-title">PROMPT</div>
      <p>design a luminscent trombon, with double length bar , in fluorescent blue PLA material. Include embedded computing and self amplification system also embedded inside the bell</p>
    </div>
    <hr />
    <div class="callout-section">
      <div class="callout-section-title">OUTPUT</div>
      <p>The organogram abstracts the bioluminescent trombone as a speculative hybrid of aerophone and electronophone. The acoustical body is represented by a blue fluorescent circle (aerophone) and a rhombus (electronophone), merged into a single polygon to signify embedded computing. A double-length slide is shown as two parallel blue lines extending from the circle, with arrows indicating bidirectional performer movement. The embedded amplification system is visualized as a small horizontal cone (speaker) inside the bell, colored grey for plastic, with signal flow arrows pointing outward. Performer interaction is marked by a white dotted circle and line connecting to the slide. Numbers in blue denote key components: 7 slide positions (extended range), 1 embedded speaker, and 1 microcontroller. The acoustical rationale combines the trombone’s cylindrical/conical bore resonance (circle) with digital wave shaping (rhombus), using PLA’s material properties to enhance high-frequency diffusion. The design merges acoustic projection with self-amplification, creating a closed-loop system where the performer’s slide manipulation directly modulates both acoustic output and embedded digital processing.</p>
      
    </div>
    <hr />
    <div class="callout-section">
      <div class="callout-section-title">MATERIALS</div>
      <ol>
        <li>1× PLA filament (fluorescent blue), 500 g, for printing main body and slide.</li>
        <li>1× Microcontroller board (e.g., Teensy 4.0), 35 mm × 18 mm, for embedded computing.</li>
        <li>1× Miniature speaker (8 Ω, 1 W), 30 mm diameter, for self-amplification.</li>
        <li>1× Piezo contact microphone, 20 mm diameter, for pickup.</li>
        <li>2× Slide rails (stainless steel), 600 mm length, 5 mm diameter, for double-length extension.</li>
        <li>1× Power bank (5V, 2000 mAh), 80 mm × 60 mm × 10 mm.</li>
        <li>Wiring (stranded copper), 1 m, 24 AWG.</li>
        <li>Solder, flux, heat-shrink tubing.</li>
      </ol>
    </div>
  </div>
</details>


## Synopsis
This project tests the hypothesis that a musical instrument can function dually as an acoustic resonator and luminescent emitter, with light arising not as symbolic extension but as intrinsic material fallout from its operational logic. The *Phosphorbone* is a hybrid aerophone fusing additive manufacturing, photoluminescent polymers, embedded microelectronics, and autopoietic amplification. Luminescence emerges as an indeterminate byproduct of the instrument's material-acoustic-energetic nexus, eschewing representational audiovisual overlays.

The design frames the instrument as an opaque technics, resisting hermeneutic transparency: sonic, gestural, feedback, and optical domains entangle in a nonlinear causal mesh. Drawing on historical precedents, speculative ontology, and iterative prototyping, it advances an organology prioritizing material autonomy, sensory surplus, and existential flux.

## Philosophical Introduction: Luminous Instruments
Music-light intersections historically emphasize isomorphism and transduction—e.g., Scriabin's synesthetic harmonization in Prometheus or Kastner's pyrophon, where flame yields sound yet light remains ancillary. Optical apparatuses like the camera obscura, conversely, privilege photonic regimes sans acoustics, entrenching modal silos.

This work inverts such paradigms: light manifests as residual efflux, not encoded signifier—photoluminescent excitation accrues as temporal hysteresis, manifesting delayed phosphorescence and heterogeneous decay. The instrument obfuscates its mechanics, aligning with accelerationist anti-semantics (per Land), valorizing systemic evasion of interpretative closure. It embodies contradiction: aero-acoustic yet cybernetic, determinate yet chaotic, where luminescence disrupts rather than denotes.

## Technical Breakdown
The instrument comprises a photoluminescent PLA 3D-printed aerophone chassis with extended slide kinematics, retaining core pneumatic excitation while augmenting via sensing and re-injection.

### Hardware Architecture
- Chassis: FDM-printed in SrAl2O4-doped PLA for persistent afterglow
- Transduction: Piezoelectric film mic integrated in resonant cavity
- Processing: ESP8266 SoC for ADC, DSP (RMS/envelope/FFT bins), and PWM output
- Actuation: Miniature electrodynamic driver in bell cavity
- Power: 5V LiPo with DC-DC regulation

### Signal Flow
- Piezo acquires structural modes and aero-vibrations
- MCU computes time-frequency features (e.g., spectral centroid, flux)
- Derived signals (phase-locked or granular) re-enter via driver
- Driver induces self-excitation of chassis, not external projection

### Self-Amplification Principle
Configured as a Karplus-Strong-like recursive loop with gain scheduling to avert runaway feedback, it hybridizes acoustic eigenmodes with electronic poles/zeros. Photoluminescence passively logs vibrational energy via dopant excitation, yielding non-isomorphic optical traces sans explicit mapping.

## Methodological Development
Leveraging FDM as organological epistemology, the approach extends Zoran's parametric wind instrument research, treating topology, rheology, and rastering as sonic operands. Empirical data on thermoplastic acoustics—e.g., surface Ra influencing boundary-layer diffusion, infill lattices (gyroid/hex) modulating Q-factor and modal density—validate FDM over subtractive methods for anisotropic resonators.

Metamaterial extensions exploit subwavelength resonant phenomena to modulate acoustic behavior beyond the limits of homogeneous materials. At the scale of the resonator, classic mechanisms such as Helmholtz resonance ($f=\frac{c}{2\pi}\sqrt{\frac{A}{V L_{\mathrm{eff}}}}$) provide a first model for coupling cavity volume, aperture geometry, and effective neck length, while interference-based processes—Mie and Fabry–Pérot resonances, together with Bragg scattering ($2d\sin\theta=n\lambda$)—enable bandgap engineering, directional filtering, and partial acoustic cloaking. These principles prefigure lattice-embedded prototypes in which digitally fabricated infills, such as Voronoi networks or triply periodic minimal surfaces (TPMS), act as acoustic metamaterials whose macroscopic response emerges from micro-geometry rather than bulk composition.

Within these lattices, re-entrant honeycombs and chiral helicoidal structures can induce auxetic mechanical behavior, characterized by negative Poisson’s ratios ($\nu<0$), directly affecting vibrational coupling and energy transfer. At a higher level of organization, periodic phononic crystals may host topologically protected edge states, formally described by invariants such as the Chern number ($C=\frac{1}{2\pi}\int\Omega(k)\,d^2k$), which stabilize certain vibrational modes against defects and fabrication tolerances. In aerophones, analogous ideas appear through fractal or labyrinthine air channels that enable strong wavefront bending and, in extreme regimes, effective negative refraction or refractive index, allowing compact geometries to reorganize internal pressure fields.

Additive manufacturing further enables precise control over dispersion relations through tuned resonant elements such as quarter-wave tubes ($f=\frac{c}{4L}$) and coupled cavity arrays, yielding pseudo-harmonic spectra, selective partial damping, and extended timbral regions. Comparable effects arise in hybrid systems, for example magnetically constrained membranes exhibiting mid-frequency bandgaps (on the order of a few hundred hertz), or mass-loaded strings whose added inertia produces degenerated vibrational modes and spectral flattening. Across these cases, material choice and geometry co-determine acoustic outcome, shifting timbre from a byproduct of construction to an explicit design variable.

Methodologically, the approach is abductive rather than strictly predictive. Fabrication parameters—layer adhesion, extrusion multipliers, print-induced anisotropy, or multimaterial gradients—are iteratively probed using effective-medium approximations and finite-element methods, including analyses of mobility functions and thermoviscous losses ($\alpha\propto\omega^2$). These simulations are complemented by psychoacoustic assays, treating instability not as an error to be eliminated but as a productive condition for ergodic exploration of the instrument’s state space. Evaluation therefore integrates quantitative metrics (SPL, THD, absorption coefficients) with enactive phenomenology, emphasizing the performer’s embodied negotiation of emergent, materially mediated acoustic behaviors.



## Roadmap
1. Speculative ontology - 🟢
2. PLA prototype fabrication - 🟢
3. SOOG formalization - 🟢
4. Electronics embedding
5. Feedback regime calibration
6. Multisensory coupling assays
7. Polymer/infill variants
8. Documentation: FEM sims, perceptual mappings, media artifacts
9. Theoretical exposition
10. Compositional extensions

## 2025's prototype
![](https://i.imgur.com/vUapnYf.png)
![](https://i.imgur.com/e5YHltU.jpeg)
![](https://i.imgur.com/xeBn6jr.jpeg)


## References
```bibtex
@article{Zoran2011,
  author = {Amit Zoran},
  title = {The 3D Printed Flute: Digital Fabrication and Design of Musical Instruments},
  journal = {Journal of New Music Research},
  year = {2011},
  pages = {107--118}
}

@article{Zvonicek2023,
  author = {Zvoníček, T. and Vašina, M. and Pata, V. and Smolka, P.},
  title = {Three-Dimensional Printing Process for Musical Instruments: Sound Reflection Properties of Polymeric Materials},
  journal = {Polymers},
  year = {2023},
  volume = {15},
  number = {9},
  pages = {2025}
}

@book{Land2011,
  author = {Nick Land},
  title = {Fanged Noumena: Collected Writings 1987--2007},
  publisher = {Urbanomic},
  year = {2011}
}