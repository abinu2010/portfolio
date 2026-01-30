document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  const currentYear = new Date().getFullYear();
  if (yearSpan) {
    yearSpan.textContent = currentYear;
  }
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      // Only handle in-page anchors (href starting with '#').
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
        }
      }
    });
  });
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      form.reset();
      alert('Thank you for reaching out! I will contact you soon.');
    });
  }
});