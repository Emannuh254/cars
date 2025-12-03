// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close mobile menu when clicking on a link
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

// Scroll reveal options
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Header section reveal
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__form form", {
  ...scrollRevealOption,
  delay: 2000,
});

// About section reveal
ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Services section reveal
ScrollReveal().reveal(".services__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Destinations section reveal
ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Tab functionality for vehicle categories
const tabs = document.querySelector(".deals__tabs");

if (tabs) {
  tabs.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
      const tabContents = document.querySelectorAll(".deals__container .tab__content");
      
      // Update active tab button
      Array.from(tabs.children).forEach((item) => {
        if (item.dataset.id === e.target.dataset.id) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
      
      // Update active tab content
      tabContents.forEach((item) => {
        if (item.id === e.target.dataset.id) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }
  });
}

// Why Choose Us section reveal
ScrollReveal().reveal(".choose__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".choose__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".choose__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".choose__card", {
  duration: 1000,
  delay: 1500,
  interval: 500,
});

// FAQ section reveal
ScrollReveal().reveal(".faq__item", {
  ...scrollRevealOption,
  interval: 500,
});

// Subscribe section reveal
ScrollReveal().reveal(".subscribe__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".subscribe__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".subscribe__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".subscribe__content form", {
  ...scrollRevealOption,
  delay: 1500,
});

// Testimonials swiper configuration
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
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Active navigation link highlighting
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav__links a");

window.addEventListener("scroll", () => {
  let current = "";
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(item => {
    item.classList.remove("active");
    if (item.getAttribute("href").slice(1) === current) {
      item.classList.add("active");
    }
  });
});

// Form validation
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple validation example
    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    });
    
    if (isValid) {
      // Form submission logic would go here
      alert('Form submitted successfully!');
      form.reset();
    } else {
      alert('Please fill in all required fields');
    }
  });
});

// Add animation to FAQ items
const faqItems = document.querySelectorAll('.faq__item h4');
faqItems.forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.nextElementSibling;
    answer.classList.toggle('show');
    
    // Toggle icon if exists
    const icon = item.querySelector('i');
    if (icon) {
      icon.classList.toggle('ri-arrow-down-s-line');
      icon.classList.toggle('ri-arrow-up-s-line');
    }
  });
});