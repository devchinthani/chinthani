// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 60,
      behavior: 'smooth'
    });
  });
});

// Intersection Observer for Fade-In Animations
const fadeInElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeInElements.forEach(element => {
  observer.observe(element);
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const formMessage = document.getElementById('form-message');

  // Simulate form submission
  formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
  formMessage.style.color = '#1abc9c';
  this.reset();

  // Clear message after 5 seconds
  setTimeout(() => {
    formMessage.textContent = '';
  }, 5000);
});