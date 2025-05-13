// Toggle Mobile Menu
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Dark/Light Mode
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  modeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Scroll-to-top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }

  // Fade-in sections
  document.querySelectorAll('.fade-in').forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerBottom = window.innerHeight * 0.85;

    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
};

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

