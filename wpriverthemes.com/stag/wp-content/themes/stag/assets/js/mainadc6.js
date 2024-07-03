(function($) {
  "use strict";

  // Project Slider
  var projectSwiper = new Swiper(".project-slider", {
    spaceBetween: 18,
    slidesPerView: 3,
    speed: 1500,
    loop: false,
    navigation: {
      nextEl: ".project-button-next",
      prevEl: ".project-button-prev",
    },
    breakpoints: {
      809: {
        slidesPerView: 1
      },
      1200: {
        slidesPerView: 3
      }
    }
  });

  // Testimonial
  var testimonialSwiper = new Swiper(".testimonial-slider", {
    spaceBetween: 18,
    slidesPerView: 2,
    loop: false,
    speed: 1500,
    slidesPerGroup: 2,
    grabCursor: false,
    mousewheelControl: false,
    pauseOnMouseEnter: false,
    navigation: {
      nextEl: ".testimonial-button-next",
      prevEl: ".testimonial-button-prev",
    },
    breakpoints: {
      525: {
        slidesPerView: 1
      },
      809: {
        slidesPerView: 1
      },
      1200: {
        slidesPerView: 2
      }
    }
  });

  // Check if the element with id 'datetime' exists
  var datetimeElement = document.getElementById('datetime');
  if (datetimeElement) {
    // Set a variable to hold the current date formatted as desired
    var today = new Date();
    var options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    var formattedDate = today.toLocaleDateString('en-US', options);

    // Set the text content of the datetime element to the formatted date
    datetimeElement.textContent = formattedDate;
  }

  // Check if the element with id 'current-time' exists
  var currentTimeElement = document.getElementById('current-time');
  if (currentTimeElement) {
    // Set a variable to hold the current time formatted as desired
    var currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });

    // Set the text content of the current-time element to the formatted time
    currentTimeElement.textContent = currentTime;
  }

  const humbergMenu = document.querySelector('.humberg-menu');
  const sidebarMenu = document.querySelector('.sticky-sidebar');

  humbergMenu.addEventListener('click', function() {
    sidebarMenu.classList.toggle('active-nav');
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Get all menu items
    var menuItems = document.querySelectorAll('.menu-lists li');

    // Loop through each menu item
    menuItems.forEach(function(item) {
      // Check if the menu item link's href matches the current URL
      if (item.querySelector('a').href === window.location.href) {
        // Add the "active-menu" class to the menu item
        item.classList.add('active-menu');
      }
    });
  });

})(jQuery);