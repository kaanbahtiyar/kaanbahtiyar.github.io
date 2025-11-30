---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

{% include base_path %}

<ul>
{% assign projs = site.projects | sort: "date" | reverse %}
{% for proj in projs %}
  {% assign clean_title = proj.title | markdownify | strip_html | strip_newlines %}
  <li>
    <a href="{{ proj.url | relative_url }}">{{ clean_title }}</a>
  </li>
{% endfor %}
</ul>
