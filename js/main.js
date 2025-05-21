// Main JavaScript File

document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function () {
      mobileMenuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking a nav link
  const navLinksItems = document.querySelectorAll('.nav-link');
  navLinksItems.forEach(link => {
    link.addEventListener('click', function () {
      mobileMenuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Account for header height
          behavior: 'smooth'
        });
      }
    });
  });

  // Form Submission Handler
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      // Simple form validation
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      
      if (!name.value || !email.value || !phone.value) {
        alert('الرجاء ملء جميع الحقول المطلوبة');
        return;
      }
      
      // Display success message
      const formData = new FormData(contactForm);
      const formValues = {};
      
      for (let [key, value] of formData.entries()) {
        formValues[key] = value;
      }
      
      // Create a success message container
      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.innerHTML = `
        <h3>تم استلام طلبك بنجاح!</h3>
        <p>شكراً لك ${formValues.name}، سنتواصل معك قريباً على رقم ${formValues.phone}</p>
      `;
      
      successMessage.style.padding = '1rem';
      successMessage.style.backgroundColor = '#e8f5e9';
      successMessage.style.color = '#2e7d32';
      successMessage.style.borderRadius = '8px';
      successMessage.style.marginTop = '1rem';
      
      // Replace form with success message
      contactForm.innerHTML = '';
      contactForm.appendChild(successMessage);
    });
  }

  // Intersection Observer for Animation on Scroll
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.section-title, .course-card, .benefit-card');
  animatedElements.forEach(element => {
    observer.observe(element);
  });

  // Header Background Change on Scroll
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
      header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    }
  });
});