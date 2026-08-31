// Mobile navigation dropdown toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (!toggle || !links) return;

  function closeMenu() {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    var isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  toggle.addEventListener('click', toggleMenu);

  // Close the dropdown after choosing a page (mobile UX)
  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close if the viewport is resized back up to desktop width
  window.addEventListener('resize', function () {
    if (window.innerWidth > 800) closeMenu();
  });

  // Close when clicking outside the nav
  document.addEventListener('click', function (e) {
    if (!e.target.closest('nav')) closeMenu();
  });
});
