---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
sitemap_include: true
description: "Advanced-manufacturing controls projects — real-time chatter and vibration mitigation, active damping, and tool-runout compensation, each built and validated on production-class CNC hardware."
---

{% include base_path %}

<div class="kb-projects">
{% assign projs = site.projects | sort: "date" | reverse %}
{% for proj in projs %}
  {% assign clean_title = proj.title | markdownify | strip_html | strip_newlines %}
  <a class="kb-card" href="{{ proj.url | relative_url }}">
    {% if proj.card_image %}<img class="kb-thumb" src="{{ proj.card_image | relative_url }}" alt="" loading="lazy">{% endif %}
    {% if proj.card_metric %}
    <div class="kb-metric">
      <span class="kb-metric-num">{{ proj.card_metric }}</span>
      <span class="kb-metric-label">{{ proj.card_metric_label }}</span>
    </div>
    {% endif %}
    <div class="kb-card-body">
      <h3 class="kb-card-title">{{ clean_title }}</h3>
      {% if proj.card_blurb %}<p class="kb-card-desc">{{ proj.card_blurb }}</p>{% endif %}
      {% if proj.card_tags %}
      <div class="kb-tags">
        {% for tag in proj.card_tags %}<span>{{ tag }}</span>{% endfor %}
      </div>
      {% endif %}
    </div>
  </a>
{% endfor %}
</div>
