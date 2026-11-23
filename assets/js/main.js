// Hamburger menu (all screen sizes)
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');
const setMenu = open => {
  menu.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.classList.toggle('menu-open', open);
};
toggle.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));
menu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('click', e => {
  if (menu.classList.contains('is-open') && !e.target.closest('.site-header')) setMenu(false);
});

// Lightbox for photos
const lb = document.querySelector('.lightbox');
const lbImg = lb.querySelector('img');
const lbCap = lb.querySelector('figcaption');
document.querySelectorAll('.g-item').forEach(it => it.addEventListener('click', () => {
  const img = it.querySelector('img');
  lbImg.src = img.src; lbImg.alt = img.alt;
  const cap = it.querySelector('figcaption');
  lbCap.textContent = cap ? cap.textContent : '';
  lb.hidden = false;
}));
const closeLb = () => { lb.hidden = true; };
lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lightbox-close')) closeLb(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeLb(); setMenu(false); }
});

// Reveal on scroll
const revealEls = document.querySelectorAll('.card, .letter, .polaroid.g-item, .map-card');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  }), { threshold: 0.08 });
  revealEls.forEach(el => { el.classList.add('reveal'); io.observe(el); });
}
