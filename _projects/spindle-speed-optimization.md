---
title: "Spindle speed control for real-time vibration mitigation in machining processes"
collection: projects
permalink: /projects/spindle-speed-optimization/
project_id: spindle-speed-optimization
excerpt: "Model-free spindle speed control strategies for milling that adaptively minimize both forced and chatter vibrations using in-process vibration data."
date: 2022-10-14
sidebar: false
---

## Overview



## Key methods



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

