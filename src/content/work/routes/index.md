---
type: work
slug: "routes"
title: routes
thumbnail: ./images/routes.png
repository: https://github.com/sw-collabs/routes
tech: JavaScript, HTML, CSS, Scalar Vector Graphics (SVG)
code: ~4,000
status: Completed
timeline: May, 2020
synopsis: General Layout Designer & Path Optimizer
---
Designed to aide users to find their way around facitilies with complex layouts - e.g. Costco, Walmart, malls. Using their browsers, users are able to construct a 2D layout which matches that of the concerning facility. Users are able to place rectangles, which represent stores/locations, and also paths to indicate path/walkways which connect the stores/locations.

While the layout design scheme seems very simplistic, most interior layouts can be represented simply with rectangles.

After the layout has been inputted, the user then inputs a list of destinations which he/she would like to visit within this facility, and, with the layout provided, the application will do its best to compute the shortest possible distance which visits all destinations.

**Shortest Path & Traveling Salesman Problem (TSP)**

Naturally, shortest path is implemented using Dijkstra's Algorithm. We decided to approach TSP by: (1) Performing the Nearest Neighbor algorithm to find an initial solution; (2) To improve upon the initial solution, a global minimum can be closely approximated by using Simulated Annealing (SA), which iteratively and randomly performs local improvement using the 2-Opt algorithm until improvements can no longer be made.

To benchmark performance of 2-opt and SA implementations, an approximated Held-Karp algorithm (which yields a lower-bound distance on the optimal TSP solution) was implemented. The algorithm was implemented using the top-down dynamic programming approach.

* 2-Opt: 10-15% improvement over Nearest Neighbor
* SA: 20-30% improvement over 2-Opt
* SA within 5% of Held-Karp Lower Bound
