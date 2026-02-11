---
title: "Data-driven adaptive compensation of tool runout in milling via machine tool feed drives"
collection: publications
category: manuscripts
permalink: /publication/tool-eccentricity-compensation-feed-drives/
excerpt: "A data-driven adaptive strategy that uses machine tool feed drives to compensate milling tool runout/eccentricity in real time using force/vibration feedback."
date: 2026-02-10
venue: "ASME Journal of Manufacturing Science and Engineering"
paperurl: "https://asmedigitalcollection.asme.org/manufacturingscience/article/doi/10.1115/1.4071096/1230526/Data-driven-Adaptive-Compensation-of-Tool-Runout"
citation: "Bahtiyar, K., Sencer, B., and Ikeda, R. (2026). Data-driven adaptive compensation of tool runout in milling via machine tool feed drives. ASME Journal of Manufacturing Science and Engineering."
pubtype: journal
project: tool-eccentricity-compensation
sitemap_include: true
---

Journal article {% include project-phrase.html project_id="tool-eccentricity-compensation" %}.

**Abstract.**  
With recent advances in computer numerical control (CNC) systems, modern machine tools have become increasingly intelligent, capable of automatically compensating for process errors and abnormalities. A well-known source of errors in modern milling processes is associated with tool eccentricity and cutter runout that produce rough surface finish and lead to accelerated tool wear. This paper presents a novel strategy where the CNC machine tool senses the eccentricity/runout related errors on-the-fly and compensates them using its own feed drive system. A general formulation is developed, which reveals the force/vibration frequency spectrum of the milling process suffering from tool eccentricity/radial runout. The tool eccentricity is then compensated by commanding the feed drives with micro circular trajectory at the spindle frequency, which cancels the circular motion of the tool center point. The commanded circular trajectory parameters, i.e. the amplitude and the phase, are adjusted automatically by iteratively learning the dynamic response of the feed drive system and using the tool eccentricity induced process response based on data collected either via an accelerometer or force sensor. The overall learning (adaptation) process is formulated as a convex optimization problem, and various simulation studies are provided to demonstrate the optimality and the convergence of the approach. Experimental results on a 3-axis milling system are provided to validate the effectiveness of the proposed strategy in actual machining operations.
