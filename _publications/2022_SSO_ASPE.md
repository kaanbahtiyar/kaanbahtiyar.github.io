---
title: "Extremum seeking control based real-time optimization of spindle speed in machining"
collection: publications
category: conference
pubtype: conf-abstract
permalink: /publication/esc-spindle-speed-aspe2022/
excerpt: "Model-free extremum seeking–based spindle speed optimization in milling that uses vibration measurements to minimize a total vibration cost combining forced and chatter components, without process models or stability lobes."
date: 2022-10-14
venue: "37th Annual Meeting of the American Society for Precision Engineering (ASPE)"
status: published
project: spindle-speed-optimization
paperurl: "https://www.proceedings.com/66902.html"
confurl: "https://aspe.net/programs/37th-annual-meeting/"
sitemap_include: true
---

Abstract-reviewed extended abstract and poster presentation based on the [spindle speed control for real-time vibration mitigation in machining processes project](/projects/spindle-speed-optimization/).

Conference program: [37th Annual Meeting of the American Society for Precision Engineering](https://aspe.net/programs/37th-annual-meeting/).  
Extended-abstract volume: [ASPE 2022 Conference Proceedings](https://www.proceedings.com/66902.html).

**Extended abstract (summary).**  
This work introduces a model-free spindle speed optimization strategy for milling aimed at minimizing the overall vibration level, including both forced and chatter components. Instead of relying on process models and stability lobe diagrams, the method uses extremum seeking control (ESC) to adaptively regulate spindle speed based on in-process vibration measurements. A vibration-variance–based cost function is defined to penalize total vibration energy. The ESC algorithm perturbs the spindle speed, estimates the gradient of the cost with respect to speed, and updates the spindle speed via gradient descent to seek the minimum of this cost. The approach allows selection of spindle speed that simultaneously avoids chatter and reduces forced vibrations, improving surface finish without requiring modal testing or detailed cutting dynamics models.
