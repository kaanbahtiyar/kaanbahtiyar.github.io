---
title: "Lightweight and robust chatter detection algorithms for milling"
collection: publications
category: manuscripts
permalink: /publication/lightweight-robust-chatter-detection/
excerpt: "Two chatter detection algorithms for milling are developed and evaluated: a computationally efficient spectral power method and a principal component analysis–based method offering greater robustness."
date: 2022-09-16
venue: "Manufacturing Letters (NAMRC 50 Special Issue)"
paperurl: "https://www.sciencedirect.com/science/article/pii/S2213846322000803"
citation: "Bahtiyar, K., & Sencer, B. (2022). Lightweight and robust chatter detection algorithms for milling. Manufacturing Letters, 33, 388–394."
pubtype: journal
project: chatter-detection
---

Journal article in the NAMRC 50 special issue of *Manufacturing Letters*, based on the chatter detection in milling project (project page is available [here](/projects/chatter-detection/)).

**Abstract.**  
Most machining processes suffer from self-excited chatter vibrations that destroy the work surface and affect machine tool health. Therefore, accurate and timely detection of chatter vibrations is critical for productivity and longevity of the manufacturing equipment. This paper presents two different chatter detection algorithms for the milling process by monitoring the power spectrum of the vibration signal measured on the machine. Firstly, a real-time suitable, computationally efficient approach is presented, which computes total spectral power of the vibration signal using a time-domain variance operator and forced vibration power using a moving Fourier transform. The power spectrum of chatter vibration is then evaluated by deducting the forced vibration component from the total signal power. The second method is based on Principal Component Analysis (PCA), which extracts the dominant harmonics of the measured vibration signal. Forced and chatter vibration harmonics are then clustered and labeled to evaluate the forced and chatter vibration powers based on their eigenvectors and eigenvalue magnitudes. For both methods, the power ratio (PR) is used to detect chatter: once PR exceeds 0.5, chatter starts to dominate the whole process, and it is detected. Both algorithms are experimentally tested in machining flexible workpieces. Results show that although both methods perform well in detecting chatter in a timely manner, the computationally efficient algorithm can give false alarms for flexible workpieces, while the PCA-based algorithm provides more robust chatter detection.
