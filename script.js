// Animate on scroll using Intersection Observer
const sections = document.querySelectorAll('.fade-in, .fade-in-up, .slide-in');

const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  section.style.animationPlayState = 'paused';
  observer.observe(section);
});
