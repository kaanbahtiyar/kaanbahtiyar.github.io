---
title: "Time-domain based early detection of chatter vibrations"
collection: publications
category: conference
pubtype: conf-abstract
permalink: /publication/time-domain-chatter-detection-aspe2021/
excerpt: "Time-domain chatter detection method that separates cutting and chatter components using Kalman filtering and autoregressive modeling, enabling earlier and more reliable detection of chatter onset than frequency-domain approaches."
date: 2021-11-01
venue: "36th Annual Meeting of the American Society for Precision Engineering (ASPE)"
status: published
project: chatter-detection
paperurl: "https://www.proceedings.com/62376.html"
confurl: "https://aspe.net/36th-annual-meeting/"
sitemap_include: true
---

Abstract-reviewed poster presentation based on the [chatter detection and monitoring in milling using vibration measurements project](/projects/chatter-detection/).

**Extended abstract (summary).**  
This work proposes a time-domain methodology for early detection of chatter vibrations in milling. First, cutting-related stable vibrations are extracted from the measured vibration signal using a Kalman filter that tracks spindle-frequency components and their harmonics adaptively. The cutting vibration component is subtracted from the original signal to obtain a residual where chatter components are more clearly visible. Autoregressive (AR) models, formulated in Kalman filter form for robust parameter estimation, are then fitted to the residual to identify chatter sidebands between spindle harmonics. An energy-ratio metric comparing cutting and chatter energy is used, with a 50% threshold to declare chatter onset. Experiments on recorded vibration signals show that the approach can identify the onset of chatter quickly and accurately, enabling earlier process-parameter adjustments than conventional frequency-domain techniques.

Further information:
[Conference website](https://aspe.net/36th-annual-meeting/).  
[Extended-abstract volume](https://www.proceedings.com/62376.html).
