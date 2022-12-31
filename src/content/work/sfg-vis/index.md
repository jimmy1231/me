---
type: work
slug: "sfg-vis"
title: sfg-vis
thumbnail: ./images/sfg-vis.png
repository: https://github.com/jimmy1231/sfg-vis
tech: JavaScript, SVG
code: ~1,200
status: Completed
timeline: February, 2020 - April, 2020
synopsis: Signal Flow Graph Overlay & Visualizer
---
The function of the Circuit Schematic Visualizer is to render each circuit component at predefined positions and orientations. Separate sub-modules were created for each unique component including: resistor, capacitor, dependent/independent voltage & current sources, wires, and ground nodes.

The SFG Overlay solves the curve-generation problem by employing a heuristical variation of Bézier curves, a polynomial interpolation technique where a curve is procedurally generated based on a set of predefined control points.
