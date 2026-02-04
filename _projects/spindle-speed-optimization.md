---
title: "Spindle speed control for vibration mitigation in milling"
collection: projects
permalink: /projects/spindle-speed-optimization/
project_id: spindle-speed-optimization
excerpt: "Model-free spindle speed control strategies for milling that adaptively minimize both forced and chatter vibrations using in-process vibration data."
date: 2022-10-14
sidebar: false
sitemap_include: true
---

## Overview

- **Problem:** Milling vibrations appear in two main forms:
  - **Self-excited chatter** (unstable) caused by regenerative effects.
  - **Forced vibrations** (stable but periodic) driven by tooth passing and structural dynamics.
- **Why it matters:** Both vibration types degrade surface finish, shorten tool life, and can damage machine components.
- **What you see in practice:**
  - Chatter can create large-amplitude vibration and audible high-pitch noise, producing severe surface degradation.
  - Even when cutting is stable (no chatter), **forced vibrations** still deteriorate surface quality and cause **surface location errors (SLE)**.
- **Limitations of current practice:**
  - Model-based planning (e.g., stability lobes, SLE maps) requires extensive identification and may not transfer across machines/tools/setups.
  - Chatter-only online speed regulation can suppress chatter but unintentionally increase forced vibrations near structural resonances.
- **Our approach:** A **model-free adaptive spindle speed regulation** strategy that uses **in-process vibration feedback** to automatically update spindle speed and minimize **overall vibration** (forced + chatter) in real time.

<figure style="margin: 1.2rem 0; text-align: center;">
  <iframe width="780" height="439"
          src="https://www.youtube.com/embed/he1NYWVpoD8"
          title="Milling chatter simulation"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style="width: 100%; max-width: 780px;">
  </iframe>
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Video A:</strong> Example chatter simulation (regenerative instability).
  </figcaption>
</figure>

<figure style="margin: 1.2rem 0; text-align: center;">
  <iframe width="520" height="925"
          src="https://www.youtube.com/embed/X2p1CaedEf8"
          title="Milling chatter sound and surface impact"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style="width: 100%; max-width: 520px; aspect-ratio: 9 / 16;">
  </iframe>
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Video B:</strong> Real milling example showing the high-pitch chatter sound and surface degradation.
  </figcaption>
</figure>

---

## Key methods

- **Formulation:** Treat spindle speed regulation as an **online optimization** problem:
  - Compute a vibration-based **cost** from accelerometer data.
  - Update spindle speed to reduce the cost.
- **Model-free search:** Use an **extremum seeking control (ESC)** viewpoint where the search direction is obtained from measured data rather than a detailed process model.
- **Real-time variants:**
  - **Dither-guided ESC:** inject a small sinusoidal perturbation on spindle speed and infer the gradient from the vibration response  
    (see: [MSEC conference paper](/publication/brief-spindle-speed-msec2024/)).
  - **Dither-free ESC:** estimate the gradient from buffered (speed, cost) data via least-squares fitting  
    (see: [JMST journal article](/publication/SSO_CIRPJMST)).

<figure style="margin: 1.4rem 0; text-align: center;">
  <img src="/images/projects/spindle-speed-optimization/fig2_block_diagram.png"
       alt="Adaptive spindle speed regulation block diagram: cost evaluation, gradient estimation, optimizer, and speed command"
       style="width: 100%; height: auto; max-width: 720px; display: block; margin: 0 auto;">
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Figure 2:</strong> Adaptive spindle speed regulation loop (vibration feedback → cost evaluation → gradient estimation → optimizer → speed command update).
  </figcaption>
</figure>

---

## Tools & implementation

- **Machine/actuation:** 3-axis machine tool; spindle speed updates applied via **spindle override digital input** and **PLC functions**.
- **Real-time stack:** **dSPACE/DAQ** + **MATLAB/Simulink (RTI)** for acquisition, cost evaluation, and online command updates.
- **Sensing:** accelerometers with **signal conditioning/amplifiers** for in-process vibration feedback.

<figure style="margin: 1.4rem 0; text-align: center;">
  <img src="/images/projects/spindle-speed-optimization/fig3_experimental_setup.png"
       alt="Experimental setup configuration used for validation"
       style="width: 100%; height: auto; max-width: 760px; display: block; margin: 0 auto;">
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Figure 3:</strong> Experimental setup configuration used for validation.
  </figcaption>
</figure>

<figure style="margin: 1.4rem 0; text-align: center;">
  <img src="/images/projects/spindle-speed-optimization/fig4_data_communication.png"
       alt="Real-time implementation architecture: CNC/PLC, DAQ, and PC"
       style="width: 100%; height: auto; max-width: 860px; display: block; margin: 0 auto;">
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Figure 4:</strong> Real-time implementation architecture: measurements to DAQ/PC and spindle speed override command applied via the CNC/PLC interface.
  </figcaption>
</figure>

---

## Results

- The adaptive strategy updates spindle speed online using in-process vibration feedback, lowering the vibration level by **82%** (RMS from **152** to **27 m/s²**).
- Compared to a conventional chatter-focused regulation approach, it converges to a spindle speed that yields **66%** lower vibration level.

<figure style="margin: 1.4rem 0; text-align: center;">
  <img src="/images/projects/spindle-speed-optimization/fig5_alg_conv.png"
       alt="Experimental data showing real-time spindle speed adaptation and vibration mitigation"
       style="width: 100%; height: auto; max-width: 880px; display: block; margin: 0 auto;">
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Figure 5:</strong> Example showing real-time spindle speed adaptation and vibration mitigation starting from an initial chatter condition (time- and frequency-domain views).
  </figcaption>
</figure>

<figure style="margin: 1.4rem 0; text-align: center;">
  <img src="/images/projects/spindle-speed-optimization/fig6_alg_comp.png"
       alt="Benchmark against conventional chatter mitigation strategy"
       style="width: 100%; height: auto; max-width: 880px; display: block; margin: 0 auto;">
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Figure 6:</strong> Benchmark comparison against a conventional chatter mitigation strategy (time- and frequency-domain).
  </figcaption>
</figure>

<figure style="margin: 1.4rem 0; text-align: center;">
  <video controls playsinline preload="metadata" style="width: 100%; max-width: 720px;">
    <source src="/images/projects/spindle-speed-optimization/sso_demo.mov" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Video 1:</strong> Real-time spindle speed adaptation during machining (controller is activated after chatter develops).
  </figcaption>
</figure>

---

## Related publications

{% assign proj_pubs = site.publications | where: "project", "spindle-speed-optimization" %}

{% assign pubs_journal        = proj_pubs | where: "pubtype", "journal"        | sort: "date" | reverse %}
{% assign pubs_conf_proc      = proj_pubs | where: "pubtype", "conf-proc"      | sort: "date" | reverse %}
{% assign pubs_conf_noproc    = proj_pubs | where: "pubtype", "conf-peer-noproc" | sort: "date" | reverse %}
{% assign pubs_conf_abstract  = proj_pubs | where: "pubtype", "conf-abstract" | sort: "date" | reverse %}

{% if pubs_journal.size > 0 %}
### Journal articles
<ul>
{% for pub in pubs_journal %}
  <li>
    <a href="{{ pub.url | relative_url }}">{{ pub.title | markdownify | strip_html | strip_newlines }}</a>
  </li>
{% endfor %}
</ul>
{% endif %}

{% if pubs_conf_proc.size > 0 %}
### Peer-reviewed conference papers (proceedings)
<ul>
{% for pub in pubs_conf_proc %}
  <li>
    <a href="{{ pub.url | relative_url }}">{{ pub.title | markdownify | strip_html | strip_newlines }}</a>
  </li>
{% endfor %}
</ul>
{% endif %}

{% if pubs_conf_noproc.size > 0 %}
### Peer-reviewed conference papers (no proceedings)
<ul>
{% for pub in pubs_conf_noproc %}
  <li>
    <a href="{{ pub.url | relative_url }}">{{ pub.title | markdownify | strip_html | strip_newlines }}</a>
  </li>
{% endfor %}
</ul>
{% endif %}

{% if pubs_conf_abstract.size > 0 %}
### Abstract-reviewed conference papers
<ul>
{% for pub in pubs_conf_abstract %}
  <li>
    <a href="{{ pub.url | relative_url }}">{{ pub.title | markdownify | strip_html | strip_newlines }}</a>
  </li>
{% endfor %}
</ul>
{% endif %}

## Collaborators

- [Dr. Burak Sencer (advisor)](https://scholar.google.com/citations?user=SGQqZeUAAAAJ&hl=en)
