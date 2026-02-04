---
title: "Active inertial damper control for precision machine tools"
collection: projects
permalink: /projects/inertial-damper-control/
project_id: inertial-damper-control
excerpt: "Data-driven feedforward and feedback strategies for active inertial dampers that suppress transient and residual vibrations in precision motion systems."
date: 2024-05-22
sidebar: false
sitemap_include: true
---

## Overview

- **Problem:** Fast point-to-point motion excites structural modes of machine tools and industrial robots, causing **transient / residual vibrations** and overshoot that degrade positioning accuracy and throughput.
- **Why it matters:** These inertial vibrations limit how aggressively you can move while still meeting precision requirements.
- **Limitation of standard damping (feedback-only):** Feedback (e.g., direct velocity feedback) can reduce vibration but may have practical stability/actuator limits and can not fully eliminate the initial overshoot due to feedback nature.
- **Our approach:** Generate a **task-specific, fully pre-scheduled feedforward (FF) compensation** signal for the inertial damper, and **tune it from measured vibration data** over repeated tasks.

**Recognition:** This work received the **Thomas A. Dow Student Scholarship from American Society for Precision Engineering**.

---

## Key methods

- **Iteration-domain learning of FF compensation:**
  - Repeat the same motion task.
  - Measure vibration/position error around the critical region (e.g., reversal).
  - Update the damper FF signal to reduce a vibration/error cost over iterations.

  <figure style="margin: 1.4rem 0; text-align: center;">
    <img src="/images/projects/inertial-damper-control/fig1_overview.png"
         alt="Inertial vibration problem and iteration-domain compensation concept"
         style="width: 100%; height: auto; max-width: 450px; display: block; margin: 0 auto;">
    <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
      <strong>Figure 1:</strong> Inertial vibration problem and iteration-domain feedforward compensation concept.
    </figcaption>
  </figure>

- **Structured FF signal (implementation-friendly):**
  - Parameterize the FF compensation using **filtered B-spline basis functions** (control points).
  - Enforce **actuator stroke and force constraints** during optimization.

  <figure style="margin: 1.4rem 0; text-align: center;">
    <img src="/images/projects/inertial-damper-control/fig2_model_bspline.png"
         alt="Dynamics with inertial damper, block diagram, and B-spline signal representation"
         style="width: 100%; height: auto; max-width: 450px; display: block; margin: 0 auto;">
    <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
      <strong>Figure 2:</strong> Damper dynamics / block diagram and B-spline-based FF signal representation.
    </figcaption>
  </figure>

---

## Novelty / contributions

- **Task-specific pre-scheduled FF for inertial dampers:** Rather than relying only on feedback, the damper applies a **timed FF action** tailored to the task to suppress overshoot and residual vibration. 
- **Data-driven tuning from measured vibration:** The FF signal is tuned iteratively using recorded vibration/position error during repeated tasks.
- **Efficient low-dimensional parameterization:** The feedforward signal is represented with **filtered B-spline basis functions**, reducing the number of decision variables (control points) and enabling fast, repeatable optimization with smooth signals.
- **Constraint-aware optimization:** Stroke/force constraints are enforced while learning the FF signal.
- **Practical integration:** The approach can be implemented without requiring tight integration/communication with the host NC (system-level practicality).

---

## Tools & implementation

We implemented the active inertial damper control on a precision feed-drive setup with a **voice-coil actuated inertial damper** and a **linear motor actuated inertial damper**. We validated the method in repeated point-to-point motion tests. The experiment and learning stack includes:

- **Test execution:** Repeated **point-to-point reference motions** (same task repeated across iterations) to evaluate residual vibration and convergence of the learned feedforward signal.
- **Sensing (in-process):**
  - **Linear/rotary encoders** for position feedbacks (stage and damper)
  - **Displacement pickup sensor** for additional validation/measurement
  - **Signal conditioning / amplifiers**
- **Real-time data acquisition & computation:**
  - **MATLAB/Simulink (RTI interface)** for real-time damper motion execution (applying feedback + pre-scheduled feedforward)
  - Real-time logging of vibration/position signals during each iteration
  - **MATLAB** for for offline optimization and feedforward generation and performance evaluation across iterations
- **Post-processing:** MATLAB scripts for data analysis.

---

## Results

- The learned FF signal converges in ~**10 iterations** and reduces peak positioning error by **87%** (from **12 µm** down to **1.6 µm**) while respecting force/stroke constraints. 

<figure style="margin: 1.4rem 0; text-align: center;">
  <img src="/images/projects/inertial-damper-control/fig3_experimental_results.png"
       alt="Experimental setup and feedforward compensation performance over iterations"
       style="width: 100%; height: auto; max-width: 720px; display: block; margin: 0 auto;">
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Figure 3:</strong> Experimental setup, identified dynamics, and FF compensation performance.
  </figcaption>
</figure>


## Related publications

{% assign proj_pubs = site.publications | where: "project", "inertial-damper-control" %}

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
- [Dr. Xavier Beudaert](https://scholar.google.com/citations?hl=en&user=9HPn3U8AAAAJ)
