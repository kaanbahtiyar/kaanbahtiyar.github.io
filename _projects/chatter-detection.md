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

- **Problem:** **Chatter** is a self-excited (regenerative) instability that can quickly grow in amplitude during milling.
- **Why it matters:** Chatter causes loud high-pitch vibration, severe surface degradation, tool wear, damage to machine equipment, and scrap of material. Therefore, **early and reliable detection** is critical.

<figure style="margin: 1.2rem 0; text-align: center;">
  <iframe width="780" height="439"
          src="https://www.youtube.com/embed/he1NYWVpoD8"
          title="Milling chatter simulation"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style="width: 100%; max-width: 650px; aspect-ratio: 16 / 9; border-radius: 10px;">
  </iframe>
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Video A:</strong> Chatter mechanism / simulation example.
  </figcaption>
</figure>

<figure style="margin: 1.2rem 0; text-align: center;">
  <div style="width: 100%; max-width: 600px; height: 420px; overflow: hidden; margin: 0 auto; border-radius: 10px;">
    <iframe
      src="https://www.youtube.com/embed/X2p1CaedEf8"
      title="Milling chatter sound and surface impact"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      style="width: 100%; height: 650px; border: 0; transform: translateY(-140px); display:block;">
    </iframe>
  </div>
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Video B:</strong> Real milling example showing chatter sound and surface damage.
  </figcaption>
</figure>

- **Limitation of simple thresholds:** Forced vibration (tooth passing harmonics) can mask chatter, and threshold tuning is not robust across tools/machines.
- **Our approach:** Two complementary detection pipelines that use time/frequency features to isolate chatter growth more reliably.

---

## Key methods

### Method 1 — Moving-variance + moving-FFT (spectral power separation)

- Use a moving window on the vibration signal.
- Track:
  - **Total power** via moving variance.
  - **Forced vibration power** around tooth-passing harmonics via moving FFT bins.
- Compute a **power ratio** that increases when broadband / non-harmonic chatter grows.

<figure style="margin: 1.4rem 0; text-align: center;">
  <img src="/images/projects/chatter-detection/fig1_mvmft_pr.png"
       alt="Moving variance + moving FFT chatter power ratio concept"
       style="width: 100%; height: auto; max-width: 560px; display: block; margin: 0 auto;">
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Figure 1:</strong> Power-ratio feature using moving variance and moving FFT at spindle harmonics.
  </figcaption>
</figure>

### Method 2 — Principal component analysis (PCA) / subspace-based features (robust to operating changes)

- Build a windowed data matrix (e.g., Hankel-style embedding) from the vibration signal.
- Use **PCA** to extract dominant components and track a compact **power ratio** indicator.
- Optionally smooth / track features over time (e.g., Kalman-style filtering) for stable detection.

<figure style="margin: 1.4rem 0; text-align: center;">
  <img src="/images/projects/chatter-detection/fig2_pca_er.png"
       alt="PCA-based chatter indicator pipeline"
       style="width: 100%; height: auto; max-width: 720px; display: block; margin: 0 auto;">
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Figure 2:</strong> PCA pipeline to build an energy-ratio chatter indicator from windowed data.
  </figcaption>
</figure>

---

## Novelty / contributions

- **Separates chatter growth from forced harmonics:** Features are designed to reduce sensitivity to tooth-passing content (forced vibration) while remaining sensitive to chatter emergence.
- **Early and robust detection:** Subspace/PCA features reduce dependence on a single hand-tuned threshold and help maintain robustness across changing conditions.

---

## Tools & implementation

We implemented the chatter monitoring algorithms on a **3-axis CNC machine tool** and validated them in milling tests. The experiment and real-time monitoring includes:

- **Test execution:** Custom **G-code** programs to generate stable and unstable cutting conditions (step changes in cutting parameters for controlled chatter onset).
- **Sensing (in-process):**
  - **Accelerometers** for vibration measurements (primary signal for detection)
  - **Dynamometer** for cutting force measurements (used when force-based verification/comparison was needed)
  - **Signal conditioning / amplifiers** 
- **Real-time data acquisition & computation:**
  - **dSPACE/DAQ** for synchronized data acquisition and real-time I/O
  - **MATLAB/Simulink (RTI interface)** for online feature computation (e.g., moving variance / moving FFT, PCA-based indicators) and logging
- **Post-processing:** MATLAB scripts for offline comparison across trials and parameter sweeps (threshold selection, window length sensitivity, and repeatability checks). 

---

## Results

- Experimental cutting data shows the indicators remain low in stable cutting and rise clearly once unstable chatter develops.

<figure style="margin: 1.4rem 0; text-align: center;">
  <img src="/images/projects/chatter-detection/fig3_experiment.png"
       alt="Experimental example showing stable vs unstable cutting and indicator response"
       style="width: 100%; height: auto; max-width: 600px; display: block; margin: 0 auto;">
  <figcaption style="font-size: 0.95em; color: #555; margin-top: 0.4rem;">
    <strong>Figure 3:</strong> Representative experiment showing stable → unstable transition and detection indicators.
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
