---
title: "Spindle speed control for real-time vibration mitigation in machining processes"
collection: projects
permalink: /projects/spindle-speed-optimization/
project_id: spindle-speed-optimization
excerpt: "Model-free spindle speed control strategies for milling that adaptively minimize both forced and chatter vibrations using in-process vibration data."
date: 2024-01-01   # any reasonable “start” date
sidebar: false
---

## Overview

Brief high-level description of the project:
- What problem you’re solving (vibration mitigation, chatter, surface quality).
- Core idea (extremum-seeking spindle-speed control, data-driven adaptation, etc.).
- Experimental platform (vertical machining center, accelerometers, etc.).

## Key methods

- Extremum-seeking control (ESC) for online spindle speed adaptation.
- Vibration-variance–based cost function combining forced and chatter components.
- Real-time implementation details (sampling, filtering, actuator constraints, etc.).

## Related publications

{% assign project_pubs = site.publications
   | where: "project", "spindle-speed-optimization"
   | sort: "date" | reverse %}

<ul>
{% for pub in project_pubs %}
  <li>
    <a href="{{ pub.url | relative_url }}">
      {{ pub.title | markdownify | strip_html | strip_newlines }}
    </a>
    {% if pub.pubtype == "journal" %}(journal article){% endif %}
    {% if pub.pubtype == "conf-proc" %}(conference proceedings){% endif %}
    {% if pub.pubtype == "conf-peer-noproc" %}(peer-reviewed conference, no proceedings){% endif %}
    {% if pub.pubtype == "conf-abstract" %}(abstract-reviewed){% endif %}
  </li>
{% endfor %}
</ul>

## Collaborators

- Burak Sencer (advisor)
- Others if relevant

## Support / funding

- e.g., NSF, Mitsubishi Electric, etc. (if you want to show it)
