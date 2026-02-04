---
title: "Chatter detection and monitoring in milling"
collection: projects
permalink: /projects/chatter-detection/
project_id: chatter-detection
excerpt: "Time- and frequency-domain chatter detection algorithms for milling, including spectral-power and PCA/Kalman-based methods for early and robust chatter detection."
date: 2021-11-01
sidebar: false
sitemap_include: true
---

## Overview

- **Problem:** Milling chatter is a **self-excited (regenerative) instability** that can grow rapidly during cutting.
- **Why it matters:** Chatter causes **severe surface degradation**, shortens tool life, and can damage machine components.
- **What you see in practice:**
  - **Video A:** regenerative chatter mechanism / simulation.
  - **Video B:** real chatter with the characteristic high-pitch sound and surface damage.
- **Limitations of common detectors:** Simple amplitude/threshold rules and fixed-band spectral checks can be **condition-dependent** and may trigger false alarms in flexible setups.
- **Our approach:** Chatter monitoring based on **relative energy/power metrics** that separate **forced (spindle-synchronous)** content from **chatter-related** content in real time.

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
    <strong>Video A:</strong> Example of regenerative chatter mechanism in milling.
  </figcaption>
</figure>

<figure style="margin: 1.2rem 0; text-align: center;">
  <div style="width: 100%; max-width: 600px; height: 450px; overflow: hidden; margin: 0 auto; border-radius: 10px;">
    <iframe
      src="https://www.youtube.com/embed/X2p1CaedEf8"
      title="Milling chatter sound and surface impact"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      style="width: 100%; height: 650px; border: 0; transform: translateY(-130px); display:block;">
    </iframe>
  </div>
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Video B:</strong> Real milling example showing the high-pitch chatter sound and surface degradation.
  </figcaption>
</figure>

---

## Key methods

### Method 1 — Lightweight real-time detector (MV + MFT)

- **Goal:** Fast online detection using a single vibration signal.
- **Forced-power estimate:** Compute moving Fourier components at **spindle-synchronous harmonics** (ω, 2ω, …, Pω).
- **Total-power estimate:** Use **moving variance** over the same window.
- **Chatter indicator:** **Power Ratio (PR)** = (total power − forced power) / total power.  
  - **Chatter is flagged when PR exceeds a threshold** (e.g., PR > 0.5).

<figure style="margin: 1.5rem 0; text-align: center;">
  <img src="/images/projects/chatter-detection/fig1_mvmft_pr.png"
       alt="MV+MFT power-ratio chatter detection diagram"
       style="width: 100%; height: auto; max-width: 650px; display: block; margin: 0 auto;">
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Figure 1:</strong> MV+MFT real-time detector: moving variance estimates total power, moving FT at spindle harmonics estimates forced power, and PR quantifies chatter-dominant energy.
  </figcaption>
</figure>

### Method 2 — Robust detector using PCA-based harmonic separation (Energy Ratio)

- **Goal:** Improve robustness (reduce false alarms) in **flexible / noisy** conditions.
- **Core idea:** Use PCA to extract dominant vibration components and compute how much of the dominant energy is **non-forced / chatter-related**.
- **Pipeline:**
  - Build a **Hankel matrix** from the vibration signal (windowed data embedding).
  - Form the covariance matrix and perform **eigen-decomposition (PCA)**.
  - Select dominant components (via contribution / eigenvalue selection).
  - Pair selected components with their dominant frequencies (DFT-based pairing).
  - Compute **Energy Ratio (ER)** as a chatter indicator.

<figure style="margin: 1.5rem 0; text-align: center;">
  <img src="/images/projects/chatter-detection/fig2_pca_er.png"
       alt="PCA-based chatter detection and energy ratio diagram"
       style="width: 100%; height: auto; max-width: 900px; display: block; margin: 0 auto;">
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Figure 2:</strong> PCA-based chatter monitoring: dominant components are selected from the signal subspace and an ER metric is computed to detect chatter robustly.
  </figcaption>
</figure>

---

## Novelty / contributions

- **Power-ratio framing:** Detects chatter using **relative power/energy dominance** instead of absolute thresholds (more transferable across setups).
- **Two complementary detectors:**
  - **MV+MFT:** lightweight and easy to deploy online.
  - **PCA/ER:** more robust by filtering weak/noisy components and separating forced vs chatter-related content.
- **Early + robust monitoring:** Designed to detect chatter onset while reducing false alarms in flexible structures.

---

## Tools & implementation

- **Sensing:** In-process vibration acquired using **accelerometers** (single-sensor monitoring).
- **Computation:** Sliding-window time/frequency updates suitable for real-time implementation.
- **Deployment concept:** The detector output (PR/ER) can be used for **alarm/stop**, or as an input to **adaptive mitigation** (e.g., spindle speed change).

---

## Results

- **Stable cut (low depth):** MV+MFT can show intermittent false alarms in flexible conditions, while the PCA-based method remains stable.
- **Unstable cut (higher depth):** Both methods detect chatter quickly; the PCA-based method provides a cleaner indicator (fewer spurious triggers).

<figure style="margin: 1.5rem 0; text-align: center;">
  <img src="/images/projects/chatter-detection/fig3_experiment.png"
       alt="Experimental comparison of MV+MFT and PCA chatter indicators during stable and unstable cutting"
       style="width: 100%; height: auto; max-width: 850px; display: block; margin: 0 auto;">
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Figure 3:</strong> Representative experiment showing vibration signal and chatter indicators: stable region (0.05 mm) vs unstable region (0.2 mm). PCA provides a cleaner indicator than MV+MFT in the stable segment.
  </figcaption>
</figure>

---

## Related publications

{% assign proj_pubs = site.publications | where: "project", "chatter-detection" %}

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
