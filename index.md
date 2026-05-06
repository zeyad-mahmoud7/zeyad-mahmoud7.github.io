---
layout: default
title: Home
---

<section class="hero">
  <h1>My Blog</h1>
  <p>Check my writeups</p>
</section>

<div class="container">
  <div class="posts-grid">
    {% for post in site.posts %}
      <a href="{{ post.url }}" class="post-card">
        {% if post.image %}
          <img src="{{ post.image }}">
        {% endif %}
        <h2>{{ post.title }}</h2>
      </a>
    {% endfor %}
  </div>
</div>
