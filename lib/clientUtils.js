import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Swal from 'sweetalert2';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Initialize Swiper instances
export const initSwipers = () => {
  if (typeof window === 'undefined' || !window.Swiper) return;
  
  // Brands Swiper
  new window.Swiper('.brandsSwiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });

  // Testimonials Swiper
  new window.Swiper('.testimonialsSwiper', {
    direction: 'vertical',
    slidesPerView: 2.5,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

// Google Form submission
export const submitGoogleForm = (formId) => {
  const scriptURL = "https://script.google.com/macros/s/AKfycbz232FUBK-o9cKorvtRTZ8WEBNWooUsJ_GiKGmL_tA6V0hxPFSoEKNd1GfORWHwk8kQ/exec";
  const form = document.getElementById(formId);

  if (form) {
    var formData = new FormData(form);

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        Swal.fire("Done", "Submitted Successfully.", "success");
        form.reset(); // Reset form after submission
      })
      .catch((error) => {
        Swal.fire("Error", "Something went wrong. Please try again!", "error");
      });
  }
}; 