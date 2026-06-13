---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
sitemap_include: true
description: "Peer-reviewed work in CIRP Annals, CIRP JMST, and ASME JMSE on precision motion control, machining dynamics, and real-time vibration suppression in advanced manufacturing."
---

{% include base_path %}

You can also find my articles on <a href="https://scholar.google.com/citations?user=C0g9DXQAAAAJ&hl=en">my Google Scholar profile</a>.

{% assign pubs = site.publications | sort: "date" | reverse %}
{% assign journal      = pubs | where: "pubtype", "journal" %}
{% assign conf_proc    = pubs | where: "pubtype", "conf-proc" %}
{% assign conf_noproc  = pubs | where: "pubtype", "conf-peer-noproc" %}
{% assign conf_abs     = pubs | where: "pubtype", "conf-abstract" %}

{% if journal.size > 0 %}
<h2 class="kb-pubgroup">Journal Articles</h2>
<ul class="kb-publist">
{% for pub in journal %}{% include kb-pub-entry %}{% endfor %}
</ul>
{% endif %}

{% if conf_proc.size > 0 %}
<h2 class="kb-pubgroup">Conference Papers — Peer-reviewed (proceedings)</h2>
<ul class="kb-publist">
{% for pub in conf_proc %}{% include kb-pub-entry %}{% endfor %}
</ul>
{% endif %}

{% if conf_noproc.size > 0 %}
<h2 class="kb-pubgroup">Conference Papers — Peer-reviewed (no proceedings)</h2>
<ul class="kb-publist">
{% for pub in conf_noproc %}{% include kb-pub-entry %}{% endfor %}
</ul>
{% endif %}

{% if conf_abs.size > 0 %}
<h2 class="kb-pubgroup">Conference Papers — Abstract-reviewed</h2>
<ul class="kb-publist">
{% for pub in conf_abs %}{% include kb-pub-entry %}{% endfor %}
</ul>
{% endif %}
