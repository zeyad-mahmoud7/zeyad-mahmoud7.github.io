---
layout: default
title: Home
---

<div class="container">
  <h1 class="page-title">Writeups</h1>

  <div class="posts-grid">
    {% for post in site.posts %}
      <a href="{{ post.url }}" class="post-card">
        {% if post.image %}
          <img src="{{ post.image }}" alt="thumbnail">
        {% endif %}
        <h2>{{ post.title }}</h2>
      </a>
    {% endfor %}
  </div>
</div>
