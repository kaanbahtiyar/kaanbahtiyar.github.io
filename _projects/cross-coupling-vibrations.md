---
title: "Axis-coupled inertial vibration compensation using machine tool feed drives"
collection: projects
permalink: /projects/cross-coupling-vibrations/
project_id: cross-coupling-vibrations
excerpt: "Trajectory pre-filtering and feed-drive compensation methods to cancel axis-coupled inertial vibrations in vertical machining centers."
date: 2024-10-23
sidebar: false
sitemap_include: true
---

## Overview



## Key methods



## Related publications

{% assign proj_pubs = site.publications | where: "project", "cross-coupling-vibrations" %}

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
- [Dr. Eiji Shamoto](https://scholar.google.com/citations?user=gY8Zrt4AAAAJ&hl=en&oi=ao)

