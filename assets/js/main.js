// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => {
  if (e.target.tagName === 'A') { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', false); }
});

// Tabs
document.querySelectorAll('[data-tabs]').forEach(tabs => {
  const buttons = [...tabs.querySelectorAll('[role="tab"]')];
  const select = btn => {
    buttons.forEach(b => {
      const on = b === btn;
      b.setAttribute('aria-selected', on);
      b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
    });
  };
  buttons.forEach((b, i) => {
    b.addEventListener('click', () => select(b));
    b.addEventListener('keydown', e => {
      const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { const n = buttons[(i + d + buttons.length) % buttons.length]; select(n); n.focus(); }
    });
  });
});

// Gallery filters
const filters = document.querySelectorAll('.filter');
const items = document.querySelectorAll('.g-item');
filters.forEach(f => f.addEventListener('click', () => {
  filters.forEach(x => x.classList.toggle('is-active', x === f));
  items.forEach(it => it.classList.toggle('is-hidden', f.dataset.filter !== 'all' && it.dataset.cat !== f.dataset.filter));
}));

// Lightbox
const lb = document.querySelector('.lightbox');
const lbImg = lb.querySelector('img');
const lbCap = lb.querySelector('figcaption');
items.forEach(it => it.addEventListener('click', () => {
  const img = it.querySelector('img');
  lbImg.src = img.src; lbImg.alt = img.alt;
  lbCap.textContent = it.querySelector('figcaption').textContent;
  lb.hidden = false;
}));
const closeLb = () => { lb.hidden = true; };
lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lightbox-close')) closeLb(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });

// Reveal on scroll
const revealEls = document.querySelectorAll('.section-head, .card, .letter, .polaroid.g-item');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  }), { threshold: 0.12 });
  revealEls.forEach(el => { el.classList.add('reveal'); io.observe(el); });
}

// Highlight current nav link
const links = [...document.querySelectorAll('.nav a[href^="#"]')];
const sections = links.map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window) {
  const navIo = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) links.forEach(l => l.classList.toggle('is-current', l.getAttribute('href') === '#' + en.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => navIo.observe(s));
}
