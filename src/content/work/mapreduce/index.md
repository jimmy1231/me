---
type: work
slug: "mapreduce"
title: MapReduce
thumbnail: ./images/mapreduce.png
repository: https://github.com/jimmy1231/distributed-kv
tech: Java 8, Bash, Apache ZooKeeper, Linux
code: ~6,000
status: Completed
timeline: January, 2020 - April, 2020
synopsis: MapReduce with Key-Value Data Storage
---
_MapReduce_ is a Single-Instruction-Multiple-Data (SIMD) distributed processing framework developed by Google. Its advantages are providing a framework which leverages Google's massive compute infrastructure to enable the processing of massive workloads (in the order of terabytes) across thousands of machines while guaranteeing reliability.

This project is an imitation of _MapReduce_. It first implements a distributed Key-Value storage system, which is replicated at least 3 times, and available up to half of the total number of active nodes in the network. MapReduce, then, is placed atop this reliable, distributed Key-Value store (much like Google's MapReduce is placed atop the Google File System).

Storage servers also serve as MapReduce workers. All communication occurs over reliable TCP channel. Please see the report for implementation details as well as performance testing results.
