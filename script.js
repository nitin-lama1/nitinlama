// Small enhancement: mark external links as safe and add a subtle reveal on scroll.
document.querySelectorAll('a[target="_blank"]').forEach(a => {
  a.setAttribute('rel', 'noopener noreferrer');
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08 });
document.querySelectorAll('.project, .timeline-item, .skill-group, .achievement-grid div').forEach(el => {
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  el.style.opacity = '0';
  el.style.transform = 'translateY(14px)';
  observer.observe(el);
});
const style = document.createElement('style');
style.textContent = '.visible{opacity:1!important;transform:none!important}';
document.head.appendChild(style);
