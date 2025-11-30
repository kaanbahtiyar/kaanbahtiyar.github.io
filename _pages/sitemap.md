---
layout: single
title: "Sitemap"
permalink: /sitemap/
author_profile: true
sitemap_include: true
---

{% include base_path %}

## Pages

<ul>
  {% assign pages = site.pages
     | where_exp: "p", "p.sitemap_include == true"
     | sort: "title" %}
  {% for page in pages %}
    {%- unless page.url == "/sitemap/" -%}
      <li><a href="{{ page.url | relative_url }}">{{ page.title }}</a></li>
    {%- endunless -%}
  {% endfor %}
</ul>

## Publications

<ul>
  {% assign pubs = site.publications
     | where_exp: "p", "p.sitemap_include == true"
     | sort: "date" | reverse %}
  {% for pub in pubs %}
    <li><a href="{{ pub.url | relative_url }}">{{ pub.title }}</a></li>
  {% endfor %}
</ul>

## Projects

<ul>
  {% assign projs = site.projects
     | where_exp: "p", "p.sitemap_include == true"
     | sort: "date" | reverse %}
  {% for proj in projs %}
    <li><a href="{{ proj.url | relative_url }}">{{ proj.title }}</a></li>
  {% endfor %}
</ul>
