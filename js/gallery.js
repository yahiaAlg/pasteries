// Gallery and Lightbox Functionality

document.addEventListener('DOMContentLoaded', function () {
  // Gallery filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  // Initialize Intersection Observer for gallery animation
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
  
  // Observe all gallery items
  galleryItems.forEach(item => {
    observer.observe(item);
  });
  
  // Filter functionality
  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value
        const filterValue = button.getAttribute('data-filter');
        
        // Filter gallery items
        galleryItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
            // Re-trigger animation
            item.classList.remove('visible');
            setTimeout(() => {
              item.classList.add('visible');
            }, 10);
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Lightbox functionality
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');
  
  let currentImageIndex = 0;
  let visibleItems = [];
  
  // Function to update visible items array
  function updateVisibleItems() {
    visibleItems = Array.from(galleryItems).filter(
      item => item.style.display !== 'none'
    );
  }
  
  // Initialize with all items
  updateVisibleItems();
  
  // Open lightbox when clicking on gallery item
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      const imgSrc = item.querySelector('img').getAttribute('data-full');
      const imgAlt = item.querySelector('img').getAttribute('alt');
      const imgCaption = item.querySelector('.gallery-item-overlay h3').textContent;
      const imgDescription = item.querySelector('.gallery-item-overlay p').textContent;
      
      // Update visible items in case of filtering
      updateVisibleItems();
      
      // Find index in visible items array
      currentImageIndex = visibleItems.indexOf(item);
      
      // Set lightbox content
      lightboxImg.src = imgSrc;
      lightboxImg.alt = imgAlt;
      lightboxCaption.innerHTML = `<h3>${imgCaption}</h3><p>${imgDescription}</p>`;
      
      // Show lightbox
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
    });
  });
  
  // Close lightbox
  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = ''; // Re-enable scrolling
    });
  }
  
  // Click outside to close
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  
  // Navigate lightbox
  if (lightboxPrev && lightboxNext) {
    lightboxPrev.addEventListener('click', () => {
      navigateLightbox(-1);
    });
    
    lightboxNext.addEventListener('click', () => {
      navigateLightbox(1);
    });
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    } else if (e.key === 'ArrowLeft') {
      navigateLightbox(-1);
    } else if (e.key === 'ArrowRight') {
      navigateLightbox(1);
    }
  });
  
  // Function to navigate through lightbox images
  function navigateLightbox(direction) {
    currentImageIndex += direction;
    
    // Loop around if at the end or beginning
    if (currentImageIndex < 0) {
      currentImageIndex = visibleItems.length - 1;
    } else if (currentImageIndex >= visibleItems.length) {
      currentImageIndex = 0;
    }
    
    // Get new image details
    const newItem = visibleItems[currentImageIndex];
    const imgSrc = newItem.querySelector('img').getAttribute('data-full');
    const imgAlt = newItem.querySelector('img').getAttribute('alt');
    const imgCaption = newItem.querySelector('.gallery-item-overlay h3').textContent;
    const imgDescription = newItem.querySelector('.gallery-item-overlay p').textContent;
    
    // Apply fade-out effect
    lightboxImg.style.opacity = 0;
    lightboxCaption.style.opacity = 0;
    
    // Wait for fade-out, then update content and fade-in
    setTimeout(() => {
      lightboxImg.src = imgSrc;
      lightboxImg.alt = imgAlt;
      lightboxCaption.innerHTML = `<h3>${imgCaption}</h3><p>${imgDescription}</p>`;
      
      lightboxImg.style.opacity = 1;
      lightboxCaption.style.opacity = 1;
    }, 300);
  }
  
  // Touch swipe for lightbox on mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleLightboxSwipe();
  }, { passive: true });
  
  function handleLightboxSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    const minSwipeDistance = 50;
    
    if (swipeDistance > minSwipeDistance) {
      // Swiped right, show previous
      navigateLightbox(-1);
    } else if (swipeDistance < -minSwipeDistance) {
      // Swiped left, show next
      navigateLightbox(1);
    }
  }
  
  // Update visible items when filter changes
  filterButtons.forEach(button => {
    button.addEventListener('click', updateVisibleItems);
  });
  
  // Lazy loading for gallery images
  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
          }
          imgObserver.unobserve(img);
        }
      });
    });
    
    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
      imgObserver.observe(img);
    });
  }
});