---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Ph.D. in [Robotics](https://engineering.oregonstate.edu/academics/programs/robotics), [Oregon State University](https://oregonstate.edu), 2027 (expected)
* M.Sc. in [Robotics](https://engineering.oregonstate.edu/academics/programs/robotics), [Oregon State University](https://oregonstate.edu), 2023
* B.Sc. in [Control and Automation Engineering](https://kontrol.itu.edu.tr/en), [Istanbul Technical University](https://www.itu.edu.tr/en), 2020
* B.Sc. in [Mechanical Engineering](https://mkn.itu.edu.tr/en), [Istanbul Technical University](https://www.itu.edu.tr/en), 2019

Work experience
======
* Graduate Research Assistant, [Oregon State University](https://oregonstate.edu)
  * **Dynamics identification and control**
    * Characterized feed drive and VCA stage dynamics on lab testbeds and industrial machine tool.
    * Performed time-domain system identification to capture transient behavior.
    * Performed frequency-domain system identification to obtain frequency response functions and assess bandwidth and resonances.
    * Designed and implemented collocated and non-collocated controllers in dSPACE/Simulink.
    * Evaluated controller performance using transient and robustness metrics (overshoot, settling time, gain and phase margins, etc.).

  * **Machine tool trajectory pre-filtering and axis-coupled vibrations**
    * Experimentally characterized cross-axis dynamics on a vertical 3-axis machine tool (e.g., X–Z and Y–Z coupling).
    * Designed and implemented trajectory pre-filters and a machine-in-the-loop data-driven fine-tuning approach, achieving up to ~80% reduction in cross-coupled vibrations, down to the ~1 µm range, with ongoing work extending the approach to full 3D tool-tip motion.

  * **Active inertial damper control**
    * Developed a data-driven feedforward and iterative learning control strategy for an active inertial damper to suppress structural vibrations of industrial robots and machine tools in repetitive motion tasks.
    * Experimentally achieved up to ~87% reduction in peak vibration on a feed drive testbed under stroke and force constraints.

  * **Machining dynamics, chatter detection, and spindle speed control**
    * Performed tap testing, modal analysis, and cutting tests to identify structural and process dynamics for milling.
    * Developed time-, frequency-, and semi-discrete–domain milling simulation and stability analysis tools in MATLAB.
    * Developed and validated chatter detection algorithms for milling based on spectral power analysis, principal component analysis (PCA), and Kalman filters.
    * Designed model-free adaptive spindle speed control strategies to minimize both forced and chatter vibrations, demonstrating large reductions in RMS vibration and surface location error (SLE) and improved surface finish compared to conventional chatter mitigation methods used in industry.

  * **Tool eccentricity compensation**
    * Designed and validated a model-free extremum-seeking control strategy that uses cutting force feedback to cancel milling tool eccentricity via feed drive modulation.
    * Developed and experimentally validated a model-informed, data-driven, iteration-based compensation method in the frequency domain using force and vibration feedback on a vertical machine tool, achieving faster convergence than the purely model-free extremum-seeking approach.

  * **Mentoring and lab leadership**
    * Trained and supervised graduate and undergraduate students in system identification, controller design and implementation, machining process models, and data analysis; provided technical guidance on mechatronics and control throughout their projects.
    * Mentored two MS students on thesis projects related to milling tool eccentricity compensation and chatter mitigation via feed modulation in milling using machine tool feed drives.

* Graduate Teaching Assistant, [Oregon State University](https://oregonstate.edu)
  * Assisted the senior-level undergraduate course **Computer Control of Manufacturing Processes (MFGE 437)** by organizing and leading lab sessions, explaining core concepts in control systems and manufacturing processes, and providing guidance to students throughout the term.
  * Assisted the graduate-level course **Precision Motion Generation (ME 597)**, conducting hands-on lab sessions and explaining key concepts in precision motion control and real-time implementation during experiments.
  * Contributed to the development of the course **Digital Control of Mechatronic Systems (MFGE 441)** by helping design the course structure, preparing lecture slides, and assisting in the creation of assignments on digital control.

* R&D Engineer Intern, [Aselsan](https://www.aselsan.com)
  * R&D intern in the mechanical design unit of the Aircraft Integration Engineering Department.
  * Used CATIA (solid and surface modeling) to design and refine mechanical integration equipment and mounting hardware based on project-specific structural and geometric requirements.

* R&D Senior Design Project, [Arçelik](https://www.arcelikglobal.com/en/)
  * Examined the design and manufacturing processes of a washing machine platform.
  * Built fully parametric 3D CAD models and assemblies of washing machine body parts in Siemens NX (surface and sheet-metal modeling), so that any dimensional change in a component automatically propagated through the entire assembly.
  * Set up finite element–based static structural analyses in NX, including meshing and loading at realistic connection points, to evaluate mass and stress under operational constraints.
  * Developed a multi-objective optimization framework in MATLAB using Particle Swarm Optimization (PSO) to minimize total body mass and maximum stress (normalized and weighted cost function to handle the trade-off).
  * Automated the design–analysis–optimization loop by integrating MATLAB, Excel, and NX Journaling:
    * MATLAB writes a candidate parameter vector to Excel.
    * NX, run in batch mode (no GUI), reads the parameters, updates the CAD model, remeshes, re-runs the static analysis, and writes mass and stress results back to Excel.
    * MATLAB reads the updated results, evaluates the cost function, and iterates PSO.
  * Achieved a fully automated parametric exploration workflow that links CAD, FEA, and optimization, enabling systematic improvement of the washing machine body design in terms of both weight and structural performance.

Honors & Awards
======

* **2025 – ASPE Student Challenge, 1st Place Winner**  
  * Awarded at the 40th Annual Meeting of the American Society for Precision Engineering.
* **2024 – [Thomas A. Dow Student Scholarship](/images/ASPE2024award.png)**  
  * Awarded by the American Society for Precision Engineering for the paper presented at the 39th Annual Meeting.
* **2024 – [Young Researcher Award, ICPE 2024]((/images/ICPE2024award.png))**  
  * Awarded by the Japan Society for Precision Engineering for the paper presented at the 20th International Conference on Precision Engineering.
* **2024 – NSF Travel Award, MSEC 2024**  
  * Received from the National Science Foundation to support attendance at MSEC 2024.
* **2022 – NSF Travel Award, NAMRC 2022**  
  * Awarded by the National Science Foundation to support attendance at NAMRC 2022.
* **2020 – Undergraduate Academic Honors, Istanbul Technical University**  
  * High Honor List.  
  * [Ranked 3rd in the Control and Automation Engineering Department](/images/Rank3rd.png)).
    
Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams
