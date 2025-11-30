---
title: "Chatter detection in milling"
collection: projects
permalink: /projects/chatter-detection/
project_id: chatter-detection
excerpt: "Time- and frequency-domain chatter detection methods for milling that use vibration measurements to reliably distinguish cutting and chatter components in real time."
date: 2021-11-01
sidebar: false
---

## Overview



## Key methods



## Related publications

{% assign project_pubs = site.publications
   | where: "project", "chatter-detection"
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
