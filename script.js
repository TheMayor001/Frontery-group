// script.js

// Smooth scroll for anchor links (if added in the future)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Example: Display alert when clicking email (can be replaced with something more useful)
const emailLink = document.querySelector('a[href^="mailto:"]');
if (emailLink) {
  emailLink.addEventListener('click', () => {
    alert('Opening your email app to contact Frontery Group.');
  });
}
