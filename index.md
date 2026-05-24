---
layout: default
title: Home
---

<!-- ===== HERO ===== -->
<section id="home" class="hero">
  <div class="hero-content">
    <div class="hero-badge">
      <span class="badge-dot"></span>
      Available for opportunities
    </div>
    <h1 class="hero-name">
      <span class="glitch" data-text="Zeyad Mahmoud">Zeyad Mahmoud</span>
    </h1>
    <div class="hero-title">
      <span class="typing-text"></span><span class="cursor">|</span>
    </div>
    <p class="hero-desc">
      Penetration tester with experience across web applications, networks, and Active Directory environments.
    </p>
    <div class="hero-btns">
      <a href="#projects" class="btn btn-primary">
        <i class="fas fa-rocket"></i> View Projects
      </a>
      <a href="#contact" class="btn btn-outline">
        <i class="fas fa-envelope"></i> Contact Me
      </a>
    </div>
    <div class="hero-scroll">
      <div class="scroll-indicator">
        <div class="scroll-dot"></div>
      </div>
    </div>
  </div>
</section>

<!-- ===== ABOUT ===== -->
<section id="about" class="section">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Who Am I</span>
      <h2 class="section-title">About Me</h2>
    </div>
    <div class="about-grid">
      <div class="about-text fade-in">
        <p>I'm <strong>Zeyad Mahmoud</strong>, an aspiring <strong>Penetration Tester</strong> with a foundation in vulnerability assessment and exploitation techniques.</p>
        <p>I specialize in <strong>Active Directory attacks</strong>, network penetration testing, and privilege escalation across Windows and Linux environments. I regularly sharpen my skills on platforms like <strong>Hack The Box</strong>, tackling real-world scenarios that mirror enterprise attack surfaces.</p>
        <p>Beyond hands-on hacking, I build <strong>open-source security tooling</strong>, publish technical writeups, and break down complex vulnerabilities to make offensive security more accessible to the community.</p>
        <div class="about-stats">
          <div class="stat">
            <span class="stat-num" data-target="4">0</span>
            <span class="stat-label">Writeups</span>
          </div>
          <div class="stat">
            <span class="stat-num" data-target="1">0</span>
            <span class="stat-label">Projects</span>
          </div>
          <div class="stat">
            <span class="stat-num" data-target="5">0</span>
            <span class="stat-label">Skills</span>
          </div>
        </div>
      </div>
      <div class="skills-panel fade-in">
        <h3>Skills &amp; Focus Areas</h3>
        <div class="skills-list">
          <div class="skill-item">
            <span class="skill-icon"><i class="fas fa-crosshairs"></i></span>
            Penetration Testing
          </div>
          <div class="skill-item">
            <span class="skill-icon"><i class="fas fa-building"></i></span>
            Active Directory Attacks
          </div>
          <div class="skill-item">
            <span class="skill-icon"><i class="fas fa-network-wired"></i></span>
            Network Security
          </div>
          <div class="skill-item">
            <span class="skill-icon"><i class="fas fa-key"></i></span>
            Privilege Escalation
          </div>
          <div class="skill-item">
            <span class="skill-icon"><i class="fas fa-terminal"></i></span>
            Linux &amp; Windows Exploitation
          </div>
        </div>
        <div class="tool-badges">
          <span class="badge">Nmap</span>
          <span class="badge">Metasploit</span>
          <span class="badge">Burp Suite</span>
          <span class="badge">BloodHound</span>
          <span class="badge">Impacket</span>
          <span class="badge">Gobuster</span>
          <span class="badge">Python</span>
          <span class="badge">Bash</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== PROJECTS ===== -->
<section id="projects" class="section section-alt">
  <div class="container">
    <div class="section-header">
      <span class="section-label">What I Build</span>
      <h2 class="section-title">Projects</h2>
    </div>
    <div class="projects-grid">
      <div class="project-card fade-in">
        <div class="project-glow"></div>
        <div class="project-header">
          <div class="project-icon">
            <i class="fas fa-search-location"></i>
          </div>
          <div class="project-links">
            <a href="https://github.com/zeyad-mahmoud7/ZedScan" target="_blank" class="project-link" title="View on GitHub">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <h3 class="project-name">ZedScan</h3>
        <p class="project-desc">
          An automated network reconnaissance tool that streamlines the scanning workflow for penetration testers.
          Combines Nmap, Gobuster, and other tools into a web-based interface with intelligent output parsing,
          vhost enumeration, and subdomain discovery.
        </p>
        <div class="project-tags">
          <span class="tag">Python</span>
          <span class="tag">Nmap</span>
          <span class="tag">Gobuster</span>
          <span class="tag">Recon</span>
          <span class="tag">Web-Based Tool</span>
          <span class="tag">Automation</span>
        </div>
        <div class="project-screenshots">
          <div class="screenshot-carousel">
            <div class="carousel-slides">
              <img class="carousel-slide active" src="/assets/images/zedscan/ss1.png" alt="ZedScan screenshot 1" loading="lazy">
              <img class="carousel-slide" src="/assets/images/zedscan/ss2.png" alt="ZedScan screenshot 2" loading="lazy">
              <img class="carousel-slide" src="/assets/images/zedscan/ss3.png" alt="ZedScan screenshot 3" loading="lazy">
              <img class="carousel-slide" src="/assets/images/zedscan/ss4.png" alt="ZedScan screenshot 4" loading="lazy">
            </div>
            <button class="carousel-btn carousel-prev" aria-label="Previous"><i class="fas fa-chevron-left"></i></button>
            <button class="carousel-btn carousel-next" aria-label="Next"><i class="fas fa-chevron-right"></i></button>
            <div class="carousel-dots">
              <span class="carousel-dot active"></span>
              <span class="carousel-dot"></span>
              <span class="carousel-dot"></span>
              <span class="carousel-dot"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== LIGHTBOX ===== -->
<div id="lightbox" class="lightbox" role="dialog" aria-modal="true">
  <span class="lightbox-close" aria-label="Close">&times;</span>
  <img id="lightbox-img" src="" alt="">
</div>

<!-- ===== BLOG ===== -->
<section id="blog" class="section">
  <div class="container">
    <div class="section-header">
      <span class="section-label">My Writing</span>
      <h2 class="section-title">Blog &amp; Writeups</h2>
    </div>
    <div class="posts-grid">
      {% for post in site.posts %}
      <a href="{{ post.url }}" class="post-card fade-in">
        <div class="post-card-img">
          {% if post.image %}
          <img src="{{ post.image }}" alt="{{ post.title }}" loading="lazy">
          {% else %}
          <div class="post-card-placeholder"><i class="fas fa-file-code"></i></div>
          {% endif %}
          <div class="post-card-overlay"></div>
          {% if post.categories %}
          <span class="post-category">{{ post.categories | first }}</span>
          {% endif %}
        </div>
        <div class="post-card-body">
          <h3>{{ post.title }}</h3>
          <p class="post-meta">
            <i class="far fa-calendar-alt"></i>
            {{ post.date | date: "%b %d, %Y" }}
          </p>
          {% if post.tags %}
          <div class="post-tags">
            {% for tag in post.tags limit:3 %}
            <span class="tag-sm">{{ tag }}</span>
            {% endfor %}
          </div>
          {% endif %}
          <span class="read-more">Read More <i class="fas fa-arrow-right"></i></span>
        </div>
      </a>
      {% endfor %}
    </div>
  </div>
</section>

<!-- ===== CONTACT ===== -->
<section id="contact" class="section section-alt">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Get In Touch</span>
      <h2 class="section-title">Contact Me</h2>
      <p class="section-sub">Feel free to reach out for collaboration or opportunities.</p>
    </div>
    <div class="contact-grid fade-in">
      <a href="https://www.linkedin.com/in/zeyad-mahmoud7/" target="_blank" class="contact-card">
        <div class="contact-icon"><i class="fab fa-linkedin"></i></div>
        <h4>LinkedIn</h4>
        <p>zeyad-mahmoud7</p>
      </a>
      <a href="https://github.com/zeyad-mahmoud7" target="_blank" class="contact-card">
        <div class="contact-icon"><i class="fab fa-github"></i></div>
        <h4>GitHub</h4>
        <p>zeyad-mahmoud7</p>
      </a>
      <a href="https://profile.hackthebox.com/profile/019d2f1d-77ae-72bc-9bee-7ba659d0023b" target="_blank" class="contact-card">
        <div class="contact-icon"><i class="fas fa-cube"></i></div>
        <h4>HackTheBox</h4>
        <p>View Profile</p>
      </a>
      <a href="mailto:zeyadmahmoud.zm7@gmail.com" class="contact-card">
        <div class="contact-icon"><i class="fas fa-envelope"></i></div>
        <h4>Email</h4>
        <p>zeyadmahmoud.zm7@gmail.com</p>
      </a>
    </div>
  </div>
</section>
