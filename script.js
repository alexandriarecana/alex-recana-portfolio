const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 700) {
      window.scrollBy({ top: -24, behavior: 'smooth' });
    }
  });
});
