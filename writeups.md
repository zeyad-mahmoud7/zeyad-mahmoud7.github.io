---
layout: default
title: Writeups
permalink: /writeups/
---

<a href="/" class="back-btn">← Back</a>

# Security Writeups

{% if site.posts.size > 0 %}
  {% for post in site.posts %}
  * **{{ post.date | date: "%B %d, %Y" }}** — [{{ post.title }}]({{ post.url }})
  {% endfor %}
{% else %}
  <p>No writeups found yet.</p>
{% endif %}

<footer>
  © 2026 Zeyad Mahmoud. All rights reserved.
</footer>
