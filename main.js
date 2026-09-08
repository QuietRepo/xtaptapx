// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

function closeMenu() {
  navLinks.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks.classList.contains('open')) {
    closeMenu();
    hamburger.focus();
  }
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Trailer play-on-click (video only loads once requested)
const trailerPlayBtn = document.getElementById('trailerPlayBtn');
if (trailerPlayBtn) {
  trailerPlayBtn.addEventListener('click', () => {
    const player = document.getElementById('trailerPlayer');
    const video = document.createElement('video');
    video.className = 'trailer-video';
    video.src = 'video/trailer.mp4';
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    player.innerHTML = '';
    player.appendChild(video);
    video.focus();
  });
}
