---
layout: default
title: Home
---

<section class="hero">
  <h1>Zeyad Mahmoud</h1>
  <p>Cybersecurity Writeups • Penetration Testing • Red Teaming</p>
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
