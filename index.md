---
layout: default
---

# Write-ups

<ul class="post-list" style="list-style: none; padding: 0;">
  {% for post in site.posts %}
    <li style="margin-bottom: 20px; border-bottom: 1px solid #333; padding-bottom: 10px;">
      <span style="color: #888; font-size: 0.9em;">{{ post.date | date: "%B %d, %Y" }}</span>
      <br>
      <a href="{{ post.url | relative_url }}" style="text-decoration: none; font-size: 1.2em; font-weight: bold; color: #58a6ff;">
        {{ post.title | escape }}
      </a>
    </li>
  {% endfor %}
</ul>
