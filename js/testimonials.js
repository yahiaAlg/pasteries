// Testimonials Slider

document.addEventListener('DOMContentLoaded', function () {
  const testimonialSlider = document.querySelector('.testimonials-slider');
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  // If no testimonials, exit
  if (!testimonialSlider || testimonialCards.length === 0) return;
  
  let currentIndex = 0;
  
  // Hide all testimonials except the first one
  testimonialCards.forEach((card, index) => {
    if (index !== 0) {
      card.classList.add('hidden');
    } else {
      card.classList.add('active');
    }
  });
  
  // Function to show testimonial at index
  function showTestimonial(index) {
    // Loop to handle circular navigation
    if (index < 0) index = testimonialCards.length - 1;
    if (index >= testimonialCards.length) index = 0;
    
    // Set current card as previous
    testimonialCards[currentIndex].classList.remove('active');
    testimonialCards[currentIndex].classList.add('previous');
    
    // Update current index
    currentIndex = index;
    
    // Set new current card
    testimonialCards.forEach((card, i) => {
      if (i === currentIndex) {
        card.classList.remove('hidden', 'previous');
        card.classList.add('active');
      } else {
        card.classList.remove('active', 'previous');
        card.classList.add('hidden');
      }
    });
  }
  
  // Event listeners for navigation buttons
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      showTestimonial(currentIndex - 1);
    });
    
    nextBtn.addEventListener('click', () => {
      showTestimonial(currentIndex + 1);
    });
  }
  
  // Automatic slider (every 5 seconds)
  let autoSlide = setInterval(() => {
    showTestimonial(currentIndex + 1);
  }, 5000);
  
  // Pause automatic slide on hover
  testimonialSlider.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
  });
  
  // Resume automatic slide after hover
  testimonialSlider.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
      showTestimonial(currentIndex + 1);
    }, 5000);
  });
  
  // Touch events for mobile swiping
  let touchStartX = 0;
  let touchEndX = 0;
  
  testimonialSlider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  testimonialSlider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
  
  function handleSwipe() {
    // Calculate swipe distance
    const swipeDistance = touchEndX - touchStartX;
    const minSwipeDistance = 50; // Minimum distance to register as a swipe
    
    if (swipeDistance > minSwipeDistance) {
      // Swiped right, show previous
      showTestimonial(currentIndex - 1);
    } else if (swipeDistance < -minSwipeDistance) {
      // Swiped left, show next
      showTestimonial(currentIndex + 1);
    }
  }
});