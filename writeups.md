---
layout: default
title: Writeups
---

## 🛡️ Security Writeups

Below is a collection of my latest security research, CTF solutions, and technical deep-dives.

---

### Recent Posts
{% for post in site.posts %}
*   **[{{ post.date | date: "%b %d, %Y" }}]** - [{{ post.title }}]({{ post.url }})
    _{{ post.description }}_
{% endfor %}

---
[← Back to Home](index.md)
