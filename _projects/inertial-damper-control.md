---
title: "Inertial damper control for vibration mitigation"
collection: projects
permalink: /projects/inertial-damper-control/
project_id: inertial-damper-control
excerpt: "Data-driven feedforward and feedback strategies for active inertial dampers that suppress transient and residual vibrations in precision motion systems."
date: 2021-01-01
sidebar: false
---

## Overview



## Key methods



## Related publications

{% assign project_pubs = site.publications
   | where: "project", "inertial-damper-control"
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
- Xavier Beudaert
