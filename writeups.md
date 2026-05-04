---
layout: default
title: Writeups
permalink: /writeups/
---

# 🛡️ Security Writeups

{% if site.posts.size > 0 %}
  {% for post in site.posts %}
  * **{{ post.date | date: "%B %d, %Y" }}** — [{{ post.title }}]({{ post.url }})
  {% endfor %}
{% else %}
  <p>No writeups found. Check the _posts folder!</p>
{% endif %}

---
[← Back to Home](/)
