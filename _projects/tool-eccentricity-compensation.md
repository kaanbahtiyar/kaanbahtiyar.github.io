---
title: "Tool eccentricity compensation in milling"
collection: projects
permalink: /projects/tool-eccentricity-compensation/
project_id: tool-eccentricity-compensation
excerpt: "On-machine tool eccentricity compensation strategies that use feed drive micro-motions and force/vibration feedback to restore balanced cutting."
date: 2025-10-15
sidebar: false
sitemap_include: true
---

## Overview

-	**Problem:** Tool eccentricity (radial runout) offsets the cutter geometric center from the spindle rotational axis, causing **tooth-to-tooth chip load imbalance**.
-	**Why it matters:** Chip load imbalance causes variation in cutting force, degrading surface finish, accelerating tool wear, and reducing process consistency, especially **critical in finishing applications**.
-	**Limitations of current practice**: Manual setup/tramming can reduce runout, but it is time-consuming and cannot adapt to in-process changes.
-	**Our approach:** An on-machine scheme where the machine tool uses force/vibration feedback to monitor eccentricity-related errors and automatically tunes a compensation motion** to mitigate them.
-	**Key idea:** Eccentricity appears as a periodic tool-center motion in the workpiece frame at the spindle frequency. Figure 1 summarizes the eccentricity mechanism and tool-center trajectories motivating the strategy.
  
<figure style="margin: 1.5rem 0; text-align: center;">
  <img src="/images/projects/tool-eccentricity-compensation/fig1_problem_overview.png"
       alt="Milling process with an eccentric tool: eccentricity definition, kinematics, and tool-center trajectories"
       style="width: 100%; height: auto; max-width: 650px; display: block; margin: 0 auto;">
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Figure 1:</strong> Milling process with an eccentric tool. (a) Tool eccentricity in milling process. (b) Tool eccentricity kinematics. (c) Trajectories of the tool center points in workpiece coordinate frame.
  </figcaption>
</figure>

---

## Key methods

### Spindle-synchronized feed drive micro-circular motion

To cancel eccentricity, we generate a small **circular micro-trajectory** synchronized with the spindle rotation in the table/workpiece coordinates. The compensation signal is parameterized by its amplitude and phase, and it is applied through the existing feed drive position control loops.

### Data-driven tuning using force/vibration feedback

- **Why open-loop calibration is unreliable:**
  - Feed-drive dynamics and structural compliance distort the injected motion (amplitude/phase mismatch).
  - The effective phase between the eccentricity pattern and the workpiece frame can change with setup and initial conditions.

- **How we tune it on-machine:**
  - Use **force** or **vibration** measurements to track **spindle-synchronous harmonic components** linked to eccentricity.
  - Define a spectral **cost function** from these components.
  - Iteratively update the compensation motion **amplitude and phase** to minimize the cost.

- **Strategy evolution during the project:**
  - Early: **Extremum-seeking control (ESC)** for fully model-free, force/vibration feedback-only tuning.
  - Final: a **convex optimization framework that uses a minimal eccentricity insight** (focusing on the relevant harmonics), enabling reliable tuning and faster convergence.
 
    

<figure style="margin: 1.5rem 0; text-align: center;">
  <img src="/images/projects/tool-eccentricity-compensation/fig2_block_diagram.png"
       alt="Proposed strategy block diagram for eccentricity compensation"
       style="width: 100%; height: auto; max-width: 950px; display: block; margin: 0 auto;">
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Figure 2:</strong> Proposed strategy block diagram.
  </figcaption>
</figure>

---

## Novelty / contributions

- **Using existing feed drives:** Instead of dedicated hardware or offline tramming, eccentricity is mitigated by injecting a micro-motion through the machine’s built-in X–Y axes feed drives.
- **On-machine, sensor-based tuning:** The method does not require direct runout measurement; it infers eccentricity-related errors from force/vibration feedback and tunes the compensation online.
- **Fast data-driven optimization with minimal modeling:** A convex optimization framework leverages a simple eccentricity insight (relevant spindle-synchronous harmonics) to achieve reliable tuning and fast convergence.
- **Practical integration:** Works with either force or vibration sensing and does not rely on a phase calibration (robust to setup/condition changes).

## Tools & implementation

We implemented the method on a **3-axis machine tool** using **dSPACE/DAQ** and **MATLAB/Simulink** with the **RTI interface** for real-time execution. The sensing and instrumentation includes:

- **Accelerometers** for vibration feedback  
- **Dynamometer** for cutting force feedback
- **Fiber-optic edge detection sensor** used for synchronization (can be replaced by spindle encoder)
- **Sensor amplifiers / signal conditioning** to improve measurement quality and ensure synchronization  
- **dSPACE/DAQ** for data acquisition and real-time I/O  
- **MATLAB/Simulink (RTI)** for real-time cost computation and compensation parameter updates
  
Figure 3 shows the experimental implementation used for validation.

<figure style="margin: 1.5rem 0; text-align: center;">
  <img src="/images/projects/tool-eccentricity-compensation/fig3_experimental_implementation.png"
       alt="Experimental implementation for eccentricity compensation validation"
       style="width: 100%; height: auto; max-width: 950px; display: block; margin: 0 auto;">
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Figure 3:</strong> Experimental implementation.
  </figcaption>
</figure>

---

## Results

Using force-feedback, the spindle-synchronized compensation converges in as fast as **2–3 iterations** (10-15 spindle revolutions) in experiments. Figure 4 shows a representative experimental result demonstrating the reduction of eccentricity-related components and the rapid convergence behavior. Using the proposed compensation, the **peak-to-peak normal-direction cutting force decreased from 101 N to 14 N, corresponding to an ~86% reduction (≈7.2× lower)**.

<figure style="margin: 1.5rem 0; text-align: center;">
  <img src="/images/projects/tool-eccentricity-compensation/fig4_experimental_result.png"
       alt="Experimental result showing eccentricity compensation and convergence"
       style="width: 100%; height: auto; max-width: 530px; display: block; margin: 0 auto;">
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Figure 4:</strong> Experimental results of cutting a steel alloy using a 4-tooth, 30° helix tool at a spindle speed of 1200 rpm.
  </figcaption>
</figure>

---

## Related publications

{% assign proj_pubs = site.publications | where: "project", "tool-eccentricity-compensation" %}

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
- Levent Bozcu
- [Seyed Mahmood Shantiaeezade](https://scholar.google.com/citations?user=dtYC4jUAAAAJ&hl=en&oi=sra)
- Ryosuke Ikeda
- [Dr. Norikazu Suzuki](https://scholar.google.com/citations?user=7N_i9RQAAAAJ&hl=en&oi=ao)
