$(window).on('load', function() {
	$('.loader').fadeOut(50);
});

$(document).ready(function() {
	/**
  |--------------------------------------------------
  |  Navigation
  |--------------------------------------------------
  */

	const navList = document.querySelector('.js-nav-list');
	const navCheckbox = document.querySelector('.js-nav-checkbox');

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

	$('a[href*="#"]').on('click', function(e) {
		e.preventDefault();
		const targetElement = $(this).attr('href');
		const targetPosition = $(targetElement).offset().top;
		$('html, body').animate(
			{ scrollTop: targetElement === '#contact' ? targetPosition + 60 : targetPosition + 20 },
			1500,
			'easeInOutExpo'
		);
	});

	/**
  |--------------------------------------------------
  | Animate on Scroll
  |--------------------------------------------------
  */

	AOS.init({
		easing: 'ease',
		once: true,
		duration: 1800
	});

	/**
  |--------------------------------------------------
  | Typed.js
  |--------------------------------------------------
  */

	const typed = new Typed('.js-typed', {
		strings: [ 'A Front-end Web Developer based in Cairo.' ],
		typeSpeed: 70,
		startDelay: 2700,
		showCursor: false,
		loop: true,
		loopCount: Infinity,
		backDelay: 700,
		backSpeed: 20
	});
});
