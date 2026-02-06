---
title: "Cross-coupled inertial vibration compensation"
collection: projects
permalink: /projects/cross-coupling-vibrations/
project_id: cross-coupling-vibrations
excerpt: "Trajectory pre-filtering and feed-drive compensation methods to cancel axis-coupled inertial vibrations in vertical machining centers."
date: 2024-10-23
sidebar: false
sitemap_include: true
---

## Overview

- **Problem:** During high-acceleration feed motions of the machine tools, inertial loads can excite structural modes and create **axis-coupled vibrations** (cross-talk), where motion in one axis induces vibration in another (e.g., **Y → Z**).
- **Why it matters:** Even in non-cutting moves or stable cutting, these vibrations can create **tool-tip motion**, degrade surface finish, and limit how aggressively you can accelerate/decelerate the axes (productivity).
- **Limitations of current practice:** Conventional trajectory shaping / prefilters can reduce excitation but often:
  - depend on accurate models/frequency response functions (FRFs),
  - do not fully address cross-axis coupling,
  - and may introduce delay or slowdowns that reduce throughput.
- **Our approach:** A **cross-talk dynamics compensator (CTDC)** that generates a **synchronized Z-axis compensation** command based on the commanded X/Y motion to cancel the coupled vibration at the tool tip.
- **Key idea:** Model the coupling path (e.g., **X/Y → Z**) and design a compensation prefilter so that the resulting Z motion counteracts the cross-talk-induced Z vibration.

<figure style="margin: 1.5rem 0; text-align: center;">
  <img src="/images/projects/cross-coupling-vibrations/fig1_setup.png"
       alt="Vertical machining center structure and axis-coupled vibration mechanism"
       style="width: 100%; height: auto; max-width: 450px; display: block; margin: 0 auto;">
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Figure 1:</strong> Vertical machining center layout and illustration of axis-coupled (cross-talk) vibration mechanism (e.g., table motion exciting Z-direction tool-tip vibration).
  </figcaption>
</figure>

**Recognition:** This work received the **ICPE 2024 Young Investigator Award**.

---

## Key methods

### Cross-talk dynamics compensator (CTDC)

- **Compensation structure:** Generate an additional Z-axis command using a compensator that accounts for:
  - cross-talk coupling dynamics (e.g., **G<sub>zy</sub>**),
  - Z-axis servo/structural dynamics (e.g., **G<sub>zz</sub>**),
  - and trajectory second-derivative terms (inertial excitation).
- **Goal:** Shape the Z compensation so that the **net Z tool-tip motion** (from cross-talk + Z servo response) is minimized.

<figure style="margin: 1.5rem 0; text-align: center;">
  <img src="/images/projects/cross-coupling-vibrations/fig2_ctdc_block_diagram.png"
       alt="Cross-talk dynamics compensator (CTDC) block diagram"
       style="width: 100%; height: auto; max-width: 600px; display: block; margin: 0 auto;">
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Figure 2:</strong> Cross-talk dynamics compensator (CTDC): generating a Z compensation command from the reference trajectory and coupling dynamics.
  </figcaption>
</figure>

### Two-stage design: model-based initialization + machine-in-the-loop refinement

- **Stage 1 — Frequency-domain fitting (initial compensator):**
  - Identify the dominant cross-talk dynamics (e.g., **Y → Z**) around the resonance band that is excited by aggressive motion.
  - Use this to obtain an initial prefilter/compensator that reduces the coupled response.
- **Stage 2 — Iterative fine-tuning (CTDC refinement):**
  - Refine the compensator through iterative learning control framework (ILC) using measured vibration/positioning error data so performance does not hinge on perfect FRF accuracy.
  - The refinement targets further reduction in the coupled peak response in both time and frequency domains.

---

## Novelty / contributions

- **Cross-axis cancellation instead of single-axis shaping:** Addresses **axis coupling explicitly** (e.g., Y motion causing Z tool-tip vibration) by commanding a coordinated **Z compensation** signal.
- **Practical two-stage workflow:** Combines a **simple identification-based initialization** with **machine-in-the-loop fine-tuning**, improving robustness to modeling/FRF mismatch.
- **Trajectory-compatible implementation:** Works as a trajectory-level compensation layer (prefilter/command shaping), making it compatible with existing servo loops and CNC execution.
- **Enables higher throughput:** Reduces coupled vibration during aggressive moves, allowing more aggressive acceleration/deceleration without sacrificing quality.

---

## Tools & implementation

We implemented the method on a **3-axis machine tool** with a dominant cross-talk mode (e.g., table-to-column rocking / axis coupling) and validated it in motion tests. The experiment and real-time implementation includes:

- **Test execution:** Custom fast motion trajectories exciting the cross-talk mode (e.g., Y-axis motion inducing Z-direction response) and evaluate compensation performance.
- **Sensing (in-process):**
  - **Accelerometers** mounted near the head/tool side to measure vibration related to tool-tip motion  
  - **Laser encoder** for validation / ground-truth comparison of the accelerometer-based tuning approach  
  - **Sensor amplifiers / signal conditioning** 
- **Real-time data acquisition & computation:**
  - **dSPACE/DAQ** for synchronized data acquisition and real-time I/O  
  - **MATLAB/Simulink (RTI interface)** for real-time monitoring
  - **MATLAB** for quadratic programming–based parameter computation (offline)
  - **Machine tool existing servo settings** for filter implementation
- **Post-processing:** MATLAB scripts for data analysis.

---

## Results

- **Cross-talk reduction:** Peak coupled Z-direction error decreased from **6 µm** to **1.2 µm** (≈**80% reduction**, **5× lower**) under the tested Y-axis motion.
- Reduced tool-tip vibration **enables more aggressive motion profiles** while maintaining positioning and surface quality.
  
<figure style="margin: 1.5rem 0; text-align: center;">
  <img src="/images/projects/cross-coupling-vibrations/fig3_results.png"
       alt="Experimental comparison showing cross-talk reduction using CTDC"
       style="width: 100%; height: auto; max-width: 600px; display: block; margin: 0 auto;">
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Figure 3:</strong> Experimental validation of the tuned CTDC (a) Objective function over iterations, (b) Accelerometer-based iterative tuning performance of CTDC (accelerometer data), (c) FRF, (d) CTDC performance on acceleration phase (laser encoder data), (e) CTDC performance on the deceleration phase (laser encoder data).
  </figcaption>
</figure>

---

## Related publications

{% assign proj_pubs = site.publications | where: "project", "cross-coupling-vibrations" %}

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
- [Dr. Eiji Shamoto](https://scholar.google.com/citations?user=gY8Zrt4AAAAJ&hl=en&oi=ao)
