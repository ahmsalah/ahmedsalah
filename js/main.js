$(document).ready(function () {
  /**
  |--------------------------------------------------
  |  Navigation
  |--------------------------------------------------
  */

  var navList = document.querySelector(".js-nav-list");
  var navCheckbox = document.querySelector(".js-nav-checkbox");

      
  function handleMenuClick(event) {
    if (event.target instanceof HTMLAnchorElement) {
      navCheckbox.checked = false;
    }
  }
      
  navList.addEventListener('click', handleMenuClick);

  /**
  |--------------------------------------------------
  | Animate Scrolling
  |--------------------------------------------------
  */

  // $('a[href*="#"]').on('click', function (e) {
  //   e.preventDefault(); 
  //   $('html, body').animate({
  //     scrollTop: $($(this).attr('href')).offset().top + 5
  //   }, 1500);
  // });


  // $('a[href*="#"]').on('click', function (e) {
  //   e.preventDefault(); 
  //   var targetElement = $(this).attr("href");
  //   var targetPosition = $(targetElement).offset().top
  //   $('html, body').animate({ scrollTop: targetPosition + 50 }, 1500, "easeInOutExpo")
  // });

  
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault(); 
    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top
    $('html, body').animate({ scrollTop: (targetElement === '#work' ? targetPosition + 110 : targetPosition + 40) }, 1500, "easeInOutExpo")
  });
  
  // var target =   $('a[href*="#"]')
  // target === 'a[href="#work"]' ? targetPosition + 250 : targetPosition + 50

  /**
  |--------------------------------------------------
  | Animate on Scroll
  |--------------------------------------------------
  */

  AOS.init({
    easing: 'ease',
    once: true,
    duration: 1800
  })

  /**
  |--------------------------------------------------
  | Typed.js
  |--------------------------------------------------
  */


  var typed = new Typed(".js-typed", {
    strings: ["A Front-end Web Developer based in Cairo."],
    typeSpeed: 70,
    startDelay: 1100,
    showCursor: false
  })

});

