/* =================================================================
   AI AT WORK — A Beginner's Visual Story
   Interaction layer: progress bar, dot nav, scroll reveal, card tilt
   No dependencies — plain JavaScript.
   ================================================================= */

(function () {
  'use strict';

  const sections = Array.from(document.querySelectorAll('.section'));

  /* -------------------------------------------------------------
     1. SCROLL PROGRESS BAR
        Fills as the user scrolls down the whole page.
     ------------------------------------------------------------- */
  const scrollBar = document.getElementById('scrollBar');

  function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollBar.style.width = pct + '%';
  }

  /* -------------------------------------------------------------
     2. SIDE DOT NAVIGATION
        Built from each section's data-nav label.
     ------------------------------------------------------------- */
  const dotNav = document.getElementById('dotNav');

  sections.forEach(function (section) {
    const label = section.getAttribute('data-nav') || section.id;
    const dot = document.createElement('button');
    dot.className = 'dot-nav__item';
    dot.setAttribute('data-label', label);
    dot.setAttribute('aria-label', 'Go to ' + label);
    dot.addEventListener('click', function () {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    dotNav.appendChild(dot);
  });

  const dots = Array.from(dotNav.children);

  /* Highlight the dot for the section currently in view. */
  const navObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const idx = sections.indexOf(entry.target);
        dots.forEach(function (d, i) {
          d.classList.toggle('active', i === idx);
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(function (s) { navObserver.observe(s); });

  /* -------------------------------------------------------------
     3. SCROLL REVEAL
        Adds .is-visible to .reveal and .flow elements when they
        enter the viewport, triggering their CSS transitions.
     ------------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal, .flow');

  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  revealEls.forEach(function (el) { revealObserver.observe(el); });

  /* -------------------------------------------------------------
     4. 3D TILT + SPOTLIGHT ON CARDS
        Cards tilt toward the cursor for a light 3D feel.
        Skipped on touch devices / reduced-motion.
     ------------------------------------------------------------- */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none)').matches;

  if (!prefersReduced && !isTouch) {
    document.querySelectorAll('.tilt-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const rx = ((y / r.height) - 0.5) * -10; // rotateX
        const ry = ((x / r.width) - 0.5) * 10;   // rotateY
        card.style.transform =
          'perspective(700px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateY(-4px)';
        // feed spotlight position to the ::before glow
        card.style.setProperty('--mx', x + 'px');
        card.style.setProperty('--my', y + 'px');
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  /* -------------------------------------------------------------
     5. INIT
     ------------------------------------------------------------- */
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
})();
