---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<style>
.page__title {
  display: none;
}
</style>

You can download my CV [here](/CV/CV.pdf).

Education
======
* Ph.D. in [Robotics](https://engineering.oregonstate.edu/academics/programs/robotics), [Oregon State University](https://oregonstate.edu), 2027 (expected)
* M.Sc. in [Robotics](https://engineering.oregonstate.edu/academics/programs/robotics), [Oregon State University](https://oregonstate.edu), 2023
* B.Sc. in [Control and Automation Engineering](https://kontrol.itu.edu.tr/en), [Istanbul Technical University](https://www.itu.edu.tr/en), 2020
* B.Sc. in [Mechanical Engineering](https://mkn.itu.edu.tr/en), [Istanbul Technical University](https://www.itu.edu.tr/en), 2019

Work experience
======

<details style="margin-bottom: 0.75rem;">
  <summary><strong>Graduate Research Assistant, <a href="https://oregonstate.edu">Oregon State University</a></strong></summary>
  <ul>

    <li>
      <details>
        <summary><strong>Dynamics identification and control</strong></summary>
        <ul>
          <li>Characterized feed drive and VCA stage dynamics on lab testbeds and industrial machine tool.</li>
          <li>Performed time-domain system identification to capture transient behavior.</li>
          <li>Performed frequency-domain system identification to obtain frequency response functions and assess bandwidth and resonances.</li>
          <li>Designed and implemented collocated and non-collocated controllers in dSPACE/Simulink.</li>
          <li>Evaluated controller performance using transient and robustness metrics (overshoot, settling time, gain and phase margins, etc.).</li>
        </ul>
      </details>
    </li>

    <li>
      <details>
        <summary><strong>Machine tool trajectory pre-filtering and axis-coupled vibrations</strong></summary>
        <ul>
          <li>Experimentally characterized cross-axis dynamics on a vertical 3-axis machine tool (e.g., X–Z and Y–Z coupling).</li>
          <li>Designed and implemented trajectory pre-filters and a machine-in-the-loop data-driven fine-tuning approach, achieving up to ~80% reduction in cross-coupled vibrations, down to the ~1 µm range, with ongoing work extending the approach to full 3D tool-tip motion.</li>
        </ul>
      </details>
    </li>

    <li>
      <details>
        <summary><strong>Active inertial damper control</strong></summary>
        <ul>
          <li>Developed a data-driven feedforward and iterative learning control strategy for an active inertial damper to suppress structural vibrations of industrial robots and machine tools in repetitive motion tasks.</li>
          <li>Experimentally achieved up to ~87% reduction in peak vibration on a feed drive testbed under stroke and force constraints.</li>
        </ul>
      </details>
    </li>

    <li>
      <details>
        <summary><strong>Machining dynamics, chatter detection, and spindle speed control</strong></summary>
        <ul>
          <li>Performed tap testing, modal analysis, and cutting tests to identify structural and process dynamics for milling.</li>
          <li>Developed time-, frequency-, and semi-discrete–domain milling simulation and stability analysis tools in MATLAB.</li>
          <li>Developed and validated chatter detection algorithms for milling based on spectral power analysis, principal component analysis (PCA), and Kalman filters.</li>
          <li>Designed model-free adaptive spindle speed control strategies to minimize both forced and chatter vibrations, demonstrating large reductions in RMS vibration and surface location error (SLE) and improved surface finish compared to conventional chatter mitigation methods used in industry.</li>
        </ul>
      </details>
    </li>

    <li>
      <details>
        <summary><strong>Tool eccentricity compensation</strong></summary>
        <ul>
          <li>Designed and validated a model-free extremum-seeking control strategy that uses cutting force feedback to cancel milling tool eccentricity via feed drive modulation.</li>
          <li>Developed and experimentally validated a model-informed, data-driven, iteration-based compensation method in the frequency domain using force and vibration feedback on a vertical machine tool, achieving faster convergence than the purely model-free extremum-seeking approach.</li>
        </ul>
      </details>
    </li>

    <li>
      <details>
        <summary><strong>Mentoring and lab leadership</strong></summary>
        <ul>
          <li>Trained and supervised graduate and undergraduate students in system identification, controller design and implementation, machining process models, and data analysis; provided technical guidance on mechatronics and control throughout their projects.</li>
          <li>Mentored two MS students on thesis projects related to milling tool eccentricity compensation and chatter mitigation via feed modulation in milling using machine tool feed drives.</li>
        </ul>
      </details>
    </li>

  </ul>
</details>

<details style="margin-bottom: 0.75rem;">
  <summary><strong>Graduate Teaching Assistant, <a href="https://oregonstate.edu">Oregon State University</a></strong></summary>
  <ul>
    <li>Assisted the senior-level undergraduate course <strong>Computer Control of Manufacturing Processes (MFGE 437)</strong> by organizing and leading lab sessions, explaining core concepts in control systems and manufacturing processes, and providing guidance to students throughout the term.</li>
    <li>Assisted the graduate-level course <strong>Precision Motion Generation (ME 597)</strong>, conducting hands-on lab sessions and explaining key concepts in precision motion control and real-time implementation during experiments.</li>
    <li>Contributed to the development of the course <strong>Digital Control of Mechatronic Systems (MFGE 441)</strong> by helping design the course structure, preparing lecture slides, and assisting in the creation of assignments on digital control.</li>
  </ul>
</details>

<details style="margin-bottom: 0.75rem;">
  <summary><strong>R&amp;D Engineer Intern, <a href="https://www.aselsan.com">Aselsan</a></strong></summary>
  <ul>
    <li>R&amp;D intern in the mechanical design unit of the Aircraft Integration Engineering Department.</li>
    <li>Used CATIA (solid and surface modeling) to design and refine mechanical integration equipment and mounting hardware based on project-specific structural and geometric requirements.</li>
  </ul>
</details>

<details style="margin-bottom: 0.75rem;">
  <summary><strong>R&amp;D Undergraduate Senior Design Project, <a href="https://www.arcelikglobal.com/en/">Arçelik</a></strong></summary>
  <ul>
    <li>Examined the design and manufacturing processes of a washing machine platform.</li>
    <li>Built fully parametric 3D CAD models and assemblies of washing machine body parts in Siemens NX (surface and sheet-metal modeling), so that any dimensional change in a component automatically propagated through the entire assembly.</li>
    <li>Set up finite element–based static structural analyses in NX, including meshing and loading at realistic connection points, to evaluate mass and stress under operational constraints.</li>
    <li>Developed a multi-objective optimization framework in MATLAB using Particle Swarm Optimization (PSO) to minimize total body mass and maximum stress (normalized and weighted cost function to handle the trade-off).</li>
    <li>Automated the design–analysis–optimization loop by integrating MATLAB, Excel, and NX Journaling:
      <ul>
        <li>MATLAB writes a candidate parameter vector to Excel.</li>
        <li>NX, run in batch mode (no GUI), reads the parameters, updates the CAD model, remeshes, re-runs the static analysis, and writes mass and stress results back to Excel.</li>
        <li>MATLAB reads the updated results, evaluates the cost function, and iterates PSO.</li>
      </ul>
    </li>
    <li>Achieved a fully automated parametric exploration workflow that links CAD, FEA, and optimization, enabling systematic improvement of the washing machine body design in terms of both weight and structural performance.</li>
  </ul>
</details>

Honors & Awards
======

<details style="margin-bottom: 0.75rem;">
  <summary><strong>2025 – ASPE Student Challenge, 1st Place Winner</strong></summary>
  <ul>
    <li>
      Awarded at the 40th Annual Meeting of the American Society for Precision Engineering; challenge details are available [here](https://aspe.net/2025-student-challenge/).
      <div style="text-align: center; margin-top: 0.5rem;">
        <video controls style="max-width: 400px; width: 100%; height: auto;">
          <source src="/videos/ASPE2025StudentChallenge_1080.mov" type="video/quicktime">
          Your browser does not support the video tag.
        </video>
      </div>
    </li>
  </ul>
</details>

<details style="margin-bottom: 0.75rem;">
  <summary><strong>2024 – Thomas A. Dow Student Scholarship, ASPE</strong></summary>
  <ul>
    <li>
      Awarded by the American Society for Precision Engineering for the paper presented at the 39th Annual Meeting; more details are available [here](https://aspe.net/awards-2/thomas-a-dow-student-scholarship/).
      <div style="text-align: center; margin-top: 0.5rem;">
        <img src="/images/ASPE2024award.png"
             alt="Thomas A. Dow Student Scholarship 2024 award"
             style="max-width: 400px; width: 100%; height: auto;">
      </div>
    </li>
  </ul>
</details>

<details style="margin-bottom: 0.75rem;">
  <summary><strong>2024 – Young Researcher Award, ICPE 2024</strong></summary>
  <ul>
    <li>
      Awarded by the Japan Society for Precision Engineering for the paper presented at the 20th International Conference on Precision Engineering.
      <div style="text-align: center; margin-top: 0.5rem;">
        <img src="/images/ICPE2024award.png"
             alt="Young Researcher Award, ICPE 2024"
             style="max-width: 400px; width: 100%; height: auto;">
      </div>
    </li>
  </ul>
</details>

<details style="margin-bottom: 0.75rem;">
  <summary><strong>2024 – NSF Travel Award, MSEC 2024</strong></summary>
  <ul>
    <li>Awarded by the National Science Foundation to support attendance at MSEC 2024.</li>
  </ul>
</details>

<details style="margin-bottom: 0.75rem;">
  <summary><strong>2022 – NSF Travel Award, NAMRC 2022</strong></summary>
  <ul>
    <li>Awarded by the National Science Foundation to support attendance at NAMRC 2022.</li>
  </ul>
</details>

<details style="margin-bottom: 0.75rem;">
  <summary><strong>2020 – Undergraduate Academic Honors, ITU</strong></summary>
  <ul>
    <li>High Honor List.</li>
    <li>
      Ranked 3rd in the Control and Automation Engineering Department.
      <div style="text-align: center; margin-top: 0.5rem;">
        <img src="/images/Rank3rd.png"
             alt="Ranked 3rd in Control and Automation Engineering Department"
             style="max-width: 400px; width: 100%; height: auto;">
      </div>
    </li>
  </ul>
</details>

<div style="margin-bottom: 1.5rem;"></div>

Publications
======

<details style="margin-bottom: 0.75rem;">
  <summary><strong>Show publications</strong></summary>
  <ul>
    {% assign pubs = site.publications | sort: 'date' %}
    {% for post in pubs reversed %}
      <li>
        <a href="{{ base_path }}{{ post.url }}">
          {{ post.title | markdownify | strip_html | strip_newlines }}
        </a>
      </li>
    {% endfor %}
  </ul>
</details>
  
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

