document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  
  if (menuBtn && navLinks) {
    const menuBtnIcon = menuBtn.querySelector("i");
    
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    });
    
    // Close mobile menu when clicking on a link
    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        // Add a slight delay for better UX
        setTimeout(() => {
          navLinks.classList.remove("open");
          menuBtnIcon.setAttribute("class", "ri-menu-line");
          document.body.style.overflow = "auto";
        }, 300);
      }
    });
  }

  // Scroll reveal options
  const scrollRevealOption = {
    distance: "60px",
    origin: "bottom",
    duration: 1200,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    interval: 200,
    reset: false
  };

  // Header section reveal
  if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal().reveal(".header__image img", {
      ...scrollRevealOption,
      origin: "right",
      delay: 300
    });
    ScrollReveal().reveal(".header__content h2", {
      ...scrollRevealOption,
      delay: 600
    });
    ScrollReveal().reveal(".header__content h1", {
      ...scrollRevealOption,
      delay: 900
    });
    ScrollReveal().reveal(".header__content .section__description", {
      ...scrollRevealOption,
      delay: 1200
    });
    ScrollReveal().reveal(".header__form form", {
      ...scrollRevealOption,
      delay: 1500
    });

    // Car cards reveal
    ScrollReveal().reveal(".car__card", {
      ...scrollRevealOption,
      interval: 150,
      origin: "bottom"
    });

    // Why Choose Us section reveal
    ScrollReveal().reveal(".choose__image img", {
      ...scrollRevealOption,
      origin: "left",
      delay: 300
    });
    ScrollReveal().reveal(".choose__content .section__header", {
      ...scrollRevealOption,
      delay: 600
    });
    ScrollReveal().reveal(".choose__content .section__description", {
      ...scrollRevealOption,
      delay: 900
    });
    ScrollReveal().reveal(".choose__card", {
      ...scrollRevealOption,
      delay: 1200,
      interval: 200
    });

    // FAQ section reveal
    ScrollReveal().reveal(".faq__item", {
      ...scrollRevealOption,
      interval: 200
    });
  }

  // Tab functionality for vehicle categories
  const tabs = document.querySelector(".category__tabs");
  
  if (tabs) {
    tabs.addEventListener("click", (e) => {
      if (e.target.classList.contains("category__tab")) {
        // Update active tab button with animation
        Array.from(tabs.children).forEach((item) => {
          if (item === e.target) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
        
        // Update active tab content with fade animation
        const tabContents = document.querySelectorAll(".tab__content");
        tabContents.forEach((item) => {
          if (item.id === e.target.dataset.id) {
            item.style.opacity = "0";
            setTimeout(() => {
              item.classList.add("active");
              item.style.opacity = "1";
            }, 100);
          } else {
            item.classList.remove("active");
          }
        });
      }
    });
  }

  // FAQ accordion functionality
  const faqItems = document.querySelectorAll('.faq__item h4');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      const isOpen = answer.classList.contains('show');
      
      // Close all other FAQs
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherAnswer = otherItem.nextElementSibling;
          otherAnswer.classList.remove('show');
          otherAnswer.style.maxHeight = "0";
          const otherIcon = otherItem.querySelector('i');
          if (otherIcon) {
            otherIcon.classList.remove('ri-arrow-up-s-line');
            otherIcon.classList.add('ri-arrow-down-s-line');
          }
        }
      });
      
      // Toggle current FAQ
      if (!isOpen) {
        answer.classList.add('show');
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.classList.remove('show');
        answer.style.maxHeight = "0";
      }
      
      // Toggle icon
      const icon = item.querySelector('i');
      if (icon) {
        icon.classList.toggle('ri-arrow-down-s-line');
        icon.classList.toggle('ri-arrow-up-s-line');
      }
    });
  });

  // Testimonials swiper configuration
  if (typeof Swiper !== 'undefined') {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      effect: "slide",
      speed: 800,
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active navigation link highlighting
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav__links a");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPosition = window.scrollY + 150;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach(item => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }
    });
  });

  // Enhanced form validation
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simple validation
      const inputs = form.querySelectorAll('input[required]');
      let isValid = true;
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('error');
          
          // Add error message if not exists
          if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-message')) {
            const errorMsg = document.createElement('div');
            errorMsg.className = 'error-message';
            errorMsg.textContent = 'This field is required';
            errorMsg.style.color = '#ff7b00';
            errorMsg.style.fontSize = '0.8rem';
            errorMsg.style.marginTop = '5px';
            input.parentNode.insertBefore(errorMsg, input.nextSibling);
          }
        } else {
          input.classList.remove('error');
          
          // Remove error message if exists
          if (input.nextElementSibling && input.nextElementSibling.classList.contains('error-message')) {
            input.nextElementSibling.remove();
          }
        }
      });
      
      if (isValid && submitBtn) {
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="ri-loader-4-line animate-spin"></i> Processing...';
        
        // Simulate form submission
        setTimeout(() => {
          // Show success message
          const successMsg = document.createElement('div');
          successMsg.className = 'success-message';
          successMsg.textContent = 'Thank you! We will contact you shortly.';
          successMsg.style.color = '#007BFF';
          successMsg.style.padding = '10px';
          successMsg.style.marginTop = '10px';
          successMsg.style.borderRadius = '6px';
          successMsg.style.backgroundColor = 'rgba(0, 123, 255, 0.1)';
          form.appendChild(successMsg);
          
          // Reset form
          form.reset();
          
          // Reset button
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
          
          // Remove success message after 5 seconds
          setTimeout(() => {
            successMsg.remove();
          }, 5000);
        }, 1500);
      }
    });
    
    // Remove error state on input
    form.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('error');
        if (input.nextElementSibling && input.nextElementSibling.classList.contains('error-message')) {
          input.nextElementSibling.remove();
        }
      });
    });
  });

  // Add back to top button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.innerHTML = '<i class="ri-arrow-up-line"></i>';
  backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #007BFF;
    color: #ffffff;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
  `;
  document.body.appendChild(backToTopBtn);

  // Show/hide back to top button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.visibility = 'visible';
    } else {
      backToTopBtn.style.opacity = '0';
      backToTopBtn.style.visibility = 'hidden';
    }
  });

  // Scroll to top when button is clicked
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Add loading animation for images
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loading');
          
          img.addEventListener('load', () => {
            img.classList.remove('loading');
            img.classList.add('loaded');
          });
          
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    images.forEach(img => {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });
    });
  }

  // Add date picker functionality to car rental form
  const dateInputs = document.querySelectorAll('input[type="date"]');
  dateInputs.forEach(input => {
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    input.setAttribute('min', today);
    
    // Add date formatting
    input.addEventListener('change', (e) => {
      const date = new Date(e.target.value);
      const formattedDate = date.toLocaleDateString('en-KE', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
      
      // Store formatted date in a data attribute
      e.target.dataset.formattedDate = formattedDate;
    });
  });

  // Simulate real-time availability check
  const checkAvailabilityBtns = document.querySelectorAll('.check-availability');
  checkAvailabilityBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Show loading state
      const originalText = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<i class="ri-loader-4-line animate-spin"></i> Checking...';
      
      // Simulate API call
      setTimeout(() => {
        // Show availability status
        const isAvailable = Math.random() > 0.3; // 70% chance of being available
        
        if (isAvailable) {
          btn.innerHTML = '<i class="ri-checkbox-circle-line"></i> Available';
          btn.style.backgroundColor = '#4caf50';
        } else {
          btn.innerHTML = '<i class="ri-close-circle-line"></i> Unavailable';
          btn.style.backgroundColor = '#f44336';
        }
        
        // Reset button after 3 seconds
        setTimeout(() => {
          btn.disabled = false;
          btn.innerHTML = originalText;
          btn.style.backgroundColor = '';
        }, 3000);
      }, 1500);
    });
  });
});