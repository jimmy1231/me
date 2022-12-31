---
type: work
slug: "jlmalloc"
title: jlmalloc
thumbnail: ./images/jlmalloc.png
repository: https://github.com/jimmy1231/jlmalloc
tech: ANSI C
code: 1,500
status: Completed
timeline: November, 2019
synopsis: Memory Allocator in C
---
Inspired by _dlmalloc_, the standard dynamic memory allocator used in the standard GNU library. _dlmalloc_ is a very good example of how a simplistic idea can be generalized to many applications. The main idea of dlmalloc is the Segregated Free List, which is used to achieve high performance - amortized O(1) allocation and free - while maintaining low fragmentation and high peak memory utilization.

This allocator is optimized for specific workloads using various techniques such as:
* Preallocation (a technique extensively used in dlmalloc)
* Deferred free
* On-demand coalescing of free neighbor blocks
