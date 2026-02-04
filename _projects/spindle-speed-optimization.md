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

Milling operations suffer from both (stable) **forced vibrations** and (unstable) **self-excited chatter**, which degrade surface finish, shorten tool life, and can damage machine components. Traditional process planning often relies on model-based tools—such as surface-location-error (SLE) maps to account for forced-vibration errors and stability lobe diagrams to avoid chatter—along with chatter-focused online spindle speed adjustments.

However, these approaches have limitations. Accurate models require extensive identification experiments and parameters that do not easily transfer across different machines, tools, and setups. In addition, chatter-only speed regulation can suppress chatter but may unintentionally increase forced vibrations near structural resonances.

In this project, we developed a **model-free adaptive spindle speed regulation** approach that uses **in-process vibration measurements** to automatically adjust spindle speed and minimize overall vibration levels (forced + chatter) in real time.

<figure style="margin: 1.5rem 0;">
  <img src="/images/projects/spindle-speed-optimization/fig1_overview.png" alt="Milling vibration model and forced/chatter intuition" style="width: 100%; max-width: 1000px;">
  <figcaption style="font-size: 0.95em; color: #555;">
    <strong>Figure 1:</strong> Milling process modeling and vibration sources (forced and regenerative effects).
  </figcaption>
</figure>

---

## Key methods

### Model-free optimization of spindle speed using vibration feedback

We formulate spindle speed regulation as an online optimization problem. At each operating condition, the controller evaluates a vibration-based cost from accelerometer data and updates spindle speed to reduce that cost. The strategy is built on an **extremum seeking control (ESC)** viewpoint, where the search direction (gradient) is obtained directly from measured data rather than a detailed process model.

### Practical real-time variants

During development, we investigated two real-time variants:

- **Dither-guided ESC**: a small sinusoidal perturbation is applied to spindle speed, and the gradient direction is inferred from the vibration response (see: [MSEC conference paper](/publication/brief-spindle-speed-msec2024/)).
- **Dither-free ESC**: the gradient direction is estimated from buffered (speed, cost) data via least-squares fitting (see: [JMST journal article](/publication/SSO_CIRPJMST)).

<figure style="margin: 1.5rem 0;">
  <img src="/images/projects/spindle-speed-optimization/fig2_block_diagram.png" alt="Adaptive spindle speed regulation block diagram" style="width: 100%; max-width: 1000px;">
  <figcaption style="font-size: 0.95em; color: #555;">
    <strong>Figure 2:</strong> Adaptive spindle speed regulation loop (vibration feedback → cost → data-driven update → spindle speed command).
  </figcaption>
</figure>

---

## Tools & implementation

We implemented the controller on a **3-axis machine tool** using **dSPACE/DAQ** and **MATLAB/Simulink** with the **RTI interface** for real-time execution. Spindle speed updates were applied through the machine’s **spindle override digital input channel** and **PLC functions**. The sensing and instrumentation includes:

- **Accelerometers** for vibration feedback  
- **Amplifiers / signal conditioning** for measurement quality and synchronization  
- **dSPACE/DAQ** for data acquisition and real-time I/O  
- **MATLAB/Simulink (RTI)** for real-time cost computation and spindle override updates

<figure style="margin: 1.5rem 0;">
  <img src="/images/projects/spindle-speed-optimization/fig3_experimental_setup.png" alt="Experimental setup and implementation details" style="width: 100%; max-width: 1000px;">
  <figcaption style="font-size: 0.95em; color: #555;">
    <strong>Figure 3:</strong> Experimental setup and implementation (sensor placement, data acquisition, and control execution).
  </figcaption>
</figure>

---

## Results

Machining tests demonstrate that the adaptive strategy can reduce overall vibration levels compared to conventional chatter-focused regulation, improving vibration metrics (e.g., RMS vibration level) while maintaining stable operation.

<figure style="margin: 1.5rem 0;">
  <img src="/images/projects/spindle-speed-optimization/fig4_results.png" alt="Representative experimental result for adaptive spindle speed control" style="width: 100%; max-width: 1000px;">
  <figcaption style="font-size: 0.95em; color: #555;">
    <strong>Figure 4:</strong> Representative result showing spindle speed adaptation and the corresponding reduction in measured vibration level.
  </figcaption>
</figure>

<figure style="margin: 1.5rem 0;">
  <video controls playsinline preload="metadata" style="width: 100%; max-width: 1000px;">
    <source src="/videos/projects/spindle-speed-optimization/sso_demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption style="font-size: 0.95em; color: #555;">
    <strong>Video 1:</strong> Demonstration of real-time spindle speed adaptation during machining (controller running online with in-process vibration feedback).
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
