/* ===== Particle Canvas ===== */
(function () {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const PARTICLE_COUNT = 75;
  const MAX_DIST = 140;
  let particles = [];
  let animId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  function Particle() {
    this.reset = function () {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 1.8 + 0.6;
      this.alpha = Math.random() * 0.45 + 0.15;
    };
    this.reset();

    this.update = function () {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    };

    this.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(6,182,212,' + this.alpha + ')';
      ctx.fill();
    };
  }

  for (var i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  function drawLines() {
    for (var a = 0; a < particles.length; a++) {
      for (var b = a + 1; b < particles.length; b++) {
        var dx = particles[a].x - particles[b].x;
        var dy = particles[a].y - particles[b].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          var opacity = (1 - dist / MAX_DIST) * 0.28;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.strokeStyle = 'rgba(6,182,212,' + opacity + ')';
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(function (p) { p.update(); p.draw(); });
    drawLines();
    animId = requestAnimationFrame(animate);
  }

  animate();
})();

/* ===== Typing Animation ===== */
(function () {
  var el = document.querySelector('.typing-text');
  if (!el) return;

  var phrases = ['Penetration Tester', 'Security Researcher', 'CTF Player', 'Tool Developer'];
  var pi = 0, ci = 0, deleting = false, pause = 0;

  function tick() {
    var phrase = phrases[pi];
    if (pause > 0) { pause--; setTimeout(tick, 80); return; }

    if (!deleting) {
      el.textContent = phrase.slice(0, ci + 1);
      ci++;
      if (ci === phrase.length) { deleting = true; pause = 28; }
      setTimeout(tick, 100);
    } else {
      el.textContent = phrase.slice(0, ci - 1);
      ci--;
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
      setTimeout(tick, 48);
    }
  }

  tick();
})();

/* ===== Scroll Fade-In ===== */
(function () {
  var elements = document.querySelectorAll('.fade-in');

  function revealInView() {
    elements.forEach(function (el) {
      if (el.classList.contains('visible')) return;
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 60 && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });
  }

  /* IntersectionObserver as primary trigger */
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0, rootMargin: '60px 0px 60px 0px' });

  elements.forEach(function (el) { observer.observe(el); });

  /* Scroll + load fallback so hash-jumps and fast scrolls always reveal */
  revealInView();
  setTimeout(revealInView, 200);
  window.addEventListener('scroll', revealInView, { passive: true });
})();

/* ===== Counter Animation ===== */
(function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var target = parseInt(el.dataset.target, 10);
      var current = 0;
      var steps = 40;
      var step = target / steps;
      var timer = setInterval(function () {
        current += step;
        if (current >= target) {
          el.textContent = target + '+';
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current);
        }
      }, 45);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-num').forEach(function (el) {
    observer.observe(el);
  });
})();

/* ===== Navbar Scroll Effect ===== */
(function () {
  var navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
})();

/* ===== Mobile Menu ===== */
(function () {
  var btn = document.querySelector('.nav-menu-btn');
  var nav = document.querySelector('.mobile-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.innerHTML = open
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      btn.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
})();

/* ===== Active Nav Link on Scroll ===== */
(function () {
  var sections = document.querySelectorAll('section[id]');
  var links = document.querySelectorAll('.nav-links a');
  if (!sections.length || !links.length) return;

  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY + 120;
    sections.forEach(function (section) {
      if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
        links.forEach(function (a) { a.style.color = ''; });
        var active = document.querySelector('.nav-links a[href="#' + section.id + '"], .nav-links a[href="/#' + section.id + '"]');
        if (active) active.style.color = 'var(--cyan)';
      }
    });
  }, { passive: true });
})();

/* ===== Screenshot Lightbox ===== */
(function () {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  if (!lightbox || !lightboxImg) return;

  document.querySelectorAll('.screenshots-grid img').forEach(function (img) {
    img.addEventListener('click', function () {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(function () { lightboxImg.src = ''; }, 300);
  }

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
})();
