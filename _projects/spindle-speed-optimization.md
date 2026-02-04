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

Milling operations suffer from both **stable forced** and **unstable self-excited chatter vibrations**, which degrade surface finish, shorten tool life, and can damage machine components. Traditional process planning often relies on model-based tools such as surface location error (SLE) maps for errors related to forced vibrations, stability lobe diagrams to prevent chatter, as well as chatter-focused online spindle speed adjustments. However, accurate models typically require extensive identification experiments, and the resulting parameters do not easily transfer across different machines, tools, and setups. In addition, chatter-only speed regulation can suppress chatter but unintentionally increase forced vibrations near structural resonances.

In this project, we developed a **model-free adaptive spindle speed regulation** approach that uses in-process vibration measurements to **automatically adjust spindle speed and minimize overall vibration** levels (forced + chatter) in real time.

<figure style="margin: 1.5rem 0;">
  <img src="/images/projects/spindle-speed-optimization/fig1_overview.png" alt="Milling vibration sources and modeling intuition (forced and regenerative effects)" style="width: 100%; max-width: 1100px;">
  <figcaption style="font-size: 0.95em; color: #555;">
    <strong>Figure 1:</strong> Milling process modelling. (a) Regenerative milling model. (b) Wave generation mechanism. (c) Milling process block diagram.
  </figcaption>
</figure>

---

## Key methods

### Model-free spindle speed optimization using vibration feedback

We formulated spindle speed regulation as an online optimization problem. At each operating condition, the controller evaluates a vibration-based cost from accelerometer data and updates spindle speed to reduce the cost. The strategy is based on an **extremum seeking control (ESC)** framework, where the search direction (gradient) is obtained directly from measured data rather than a detailed process model.

### Practical real-time variants

During development, we investigated two real-time variants:

- **Dither-guided ESC**: a small sinusoidal perturbation is applied to spindle speed, and the gradient direction is inferred from the vibration response (see: [MSEC conference paper](/publication/brief-spindle-speed-msec2024/)).
- **Dither-free ESC**: the gradient direction is estimated from buffered (speed, cost) data via least-squares fitting (see: [JMST journal article](/publication/SSO_CIRPJMST)).

<figure style="margin: 1.5rem 0;">
  <img src="/images/projects/spindle-speed-optimization/fig2_block_diagram.png" alt="Adaptive spindle speed regulation block diagram: cost evaluation, gradient estimation, optimizer, and speed command" style="width: 100%; max-width: 900px;">
  <figcaption style="font-size: 0.95em; color: #555;">
    <strong>Figure 2:</strong> Adaptive spindle speed regulation loop (vibration feedback → cost evaluation → data-driven gradient estimation → optimizer → spindle speed command update).
  </figcaption>
</figure>

---

## Tools & implementation

We implemented the controller on a **3-axis machine tool** using **dSPACE/DAQ** and **MATLAB/Simulink** with the **RTI interface** for real-time execution. Spindle speed updates were applied through the machine’s **spindle override digital input channel** and **PLC functions**. The instrumentation includes:

- **Accelerometers** for in-process vibration feedback  
- **Amplifiers / signal conditioning** for measurement quality  
- **dSPACE/DAQ** for data acquisition and real-time I/O  
- **MATLAB/Simulink (RTI)** for real-time cost computation and spindle override updates  

<figure style="margin: 1.5rem 0;">
  <img src="/images/projects/spindle-speed-optimization/fig3_experimental_setup.png" alt="Experimental setup: tool, workpiece, fixture, accelerometer, dynamometer, and synchronization sensor" style="width: 100%; max-width: 1100px;">
  <figcaption style="font-size: 0.95em; color: #555;">
    <strong>Figure 3:</strong> Experimental setup configuration used for validation.
  </figcaption>
</figure>

<figure style="margin: 1.5rem 0;">
  <img src="/images/projects/spindle-speed-optimization/fig4_data_communication.png" alt="Real-time data and command communication: CNC/PLC, acquisition board, and PC" style="width: 100%; max-width: 1100px;">
  <figcaption style="font-size: 0.95em; color: #555;">
    <strong>Figure 4:</strong> Real-time implementation architecture: vibration/auxiliary measurements to the DAQ/PC and spindle speed override command applied via the CNC/PLC interface.
  </figcaption>
</figure>

---

## Results

Machining tests demonstrate that the adaptive strategy updates spindle speed online using in-process vibration feedback, reducing the vibration-based cost and lowering the vibration level by **82%** (RMS from **152** to **27 m/s²**). Compared to a conventional chatter-focused regulation approach, the proposed adaptive strategy converges to a spindle speed that yields **66%** lower vibration level.


<figure style="margin: 1.5rem 0;">
  <img src="/images/projects/spindle-speed-optimization/fig5_alg_conv.png" alt="Comparison of conventional chatter mitigation versus proposed adaptive strategy: acceleration, cost, and spectra" style="width: 100%; max-width: 1100px;">
  <figcaption style="font-size: 0.95em; color: #555;">
    <strong>Figure 5:</strong> Experimental data at 3000 rpm initial speed (chatter), showing spindle speed adaptation and vibration mitigation in real time (time- and frequency-domain).
  </figcaption>
</figure>

<figure style="margin: 1.5rem 0;">
  <img src="/images/projects/spindle-speed-optimization/fig6_alg_comp.png" alt="Representative experiment: spindle speed adaptation, vibration cost reduction, and reduced vibration level" style="width: 100%; max-width: 1100px;">
  <figcaption style="font-size: 0.95em; color: #555;">
    <strong>Figure 6:</strong> Benchmark against conventional chatter mitigation strategy (time- and frequency-domain).
  </figcaption>
</figure>

<figure style="margin: 1.5rem 0;">
  <video controls playsinline preload="metadata" style="width: 100%; max-width: 1100px;">
    <source src="/videos/projects/spindle-speed-optimization/sso_demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption style="font-size: 0.95em; color: #555;">
    <strong>Video 1:</strong> Demonstration of real-time spindle speed adaptation during machining (controller is activated once chatter is developed).
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
