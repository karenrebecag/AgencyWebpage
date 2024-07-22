/*-------------------

Template Name: <
Author:  pixel-drop
Author URI: https://themeforest.net/user/pixel-drop/portfolio
Developer: Gramentheme Team
Version: 1.0.0
Description: 

--------------------
CSS TABLE OF CONTENTS
--------------------

01. preloader
02. header
03. swiper slider
04. Custom text Animation
05. Aos Animation
06. Tilt Js
07. magnificPopup
08. Odometer
09. Booststrap Customization
10. nice select
11. wow animation
12.Custom Search 

-------------------*/

(function ($) {
	"use strict";

	$(document).ready(function () {
		//--- Custom Header Start ---//

		$(".navbar-toggle-btn").on("click", function () {
			$(".navbar-toggle-item").slideToggle(300);
			$("body").toggleClass("overflow-hidden");
			$(this).toggleClass("open");
		});
		$(".menu-item button").on("click", function () {
			$(this).siblings("ul").slideToggle(300);
		});

		var fixed_top = $(".header-section");
		if ($(window).scrollTop() > 50) {
			fixed_top.addClass("animated fadeInDown header-fixed");
		} else {
			fixed_top.removeClass("animated fadeInDown header-fixed");
		}
		//--== Sticky Header ==--//

		//--== Window On Scroll ==--//
		$(window).on("scroll", function () {
			if ($(window).scrollTop() > 50) {
				fixed_top.addClass("animated fadeInDown header-fixed");
			} else {
				fixed_top.removeClass("animated fadeInDown header-fixed");
			}
		});
		//--- Custom Header End ---//

		//--- Custom Sidebar ---//
		$(".remove-click").on("click", function (e) {
			$(".subside-barmenu").toggleClass("active");
		});
		//--- Custom Sidebar Start ---//

		//--- Search Popup Start ---//
		const $searchWrap = $(".search-wrap");
		const $navSearch = $(".nav-search");
		const $searchClose = $("#search-close");

		$(".search-trigger").on("click", function (e) {
			e.preventDefault();
			$searchWrap.animate({ opacity: "toggle" }, 500);
			$navSearch.add($searchClose).addClass("open");
		});

		$(".search-close").on("click", function (e) {
			e.preventDefault();
			$searchWrap.animate({ opacity: "toggle" }, 500);
			$navSearch.add($searchClose).removeClass("open");
		});

		function closeSearch() {
			$searchWrap.fadeOut(200);
			$navSearch.add($searchClose).removeClass("open");
		}

		$(document.body).on("click", function (e) {
			closeSearch();
		});

		$(".search-trigger, .main-search-input").on("click", function (e) {
			e.stopPropagation();
		});
		//--- Search Popup Start ---//

		//--- Custom Tilt Js Start ---//
		const tilt = document.querySelectorAll(".tilt");
		VanillaTilt.init(tilt, {
			reverse: true,
			max: 15,
			speed: 400,
			scale: 1.01,
			glare: true,
			reset: true,
			perspective: 800,
			transition: true,
			"max-glare": 0.45,
			"glare-prerender": false,
			gyroscope: true,
			gyroscopeMinAngleX: -45,
			gyroscopeMaxAngleX: 45,
			gyroscopeMinAngleY: -45,
			gyroscopeMaxAngleY: 45,
		});
		//--- Custom Tilt Js End ---//

		//--- Custom Line Animation ---//
		for (let i = 0; i < 3; i++) {
			const clone = $("<span></span>").clone();
			clone.appendTo(".line-shape.first");
		}
		//--- Custom Line Animation ---//

		//--- Scroll Top Start ---//
		let calcScrollValue = () => {
			let scrollProgress = document.getElementById("progress");
			let progressValue = document.getElementById("valu");
			let pos = document.documentElement.scrollTop;
			let calcHeight =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			let scrollValue = Math.round((pos * 250) / calcHeight);

			if (pos > 250) {
				scrollProgress.style.display = "grid";
			} else {
				scrollProgress.style.display = "none";
			}
			scrollProgress.addEventListener("click", () => {
				document.documentElement.scrollTop = 0;
			});
		};
		window.onscroll = calcScrollValue;
		window.onload = calcScrollValue;
		//--- Scroll Top End ---//

		//---  Counter Start ---//
		$(".count").counterUp({
			delay: 15,
			time: 4000,
		});
		//--- Counter  End ---//

		//--- Swiper Project Study SLide End ---//
		// const serviceSlider = new Swiper(".study-slidewrap", {
		// 	spaceBetween: 0,
		// 	speed: 1500,
		// 	loop: true,
		// 	autoplay: {
		// 		delay: 1500,
		// 		disableOnInteraction: false,
		// 	},
		// 	navigation: {
		// 		nextEl: ".cmn-prev",
		// 		prevEl: ".cmn-next",
		// 	},

		// 	breakpoints: {
		// 		1199: {
		// 			slidesPerView: 1,
		// 		},
		// 		991: {
		// 			slidesPerView: 1,
		// 		},
		// 		767: {
		// 			slidesPerView: 1,
		// 		},
		// 		575: {
		// 			slidesPerView: 1,
		// 		},
		// 		0: {
		// 			slidesPerView: 1,
		// 		},
		// 	},
		// });
		//--- Swiper project SLide End ---//

		//--- Swiper service SLide start ---//
		const studyslidewrap = new Swiper(".study-slidewrap", {
			spaceBetween: 30,
			speed: 1500,
			loop: true,
			autoplay: {
				delay: 1500,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".cmn-prev",
				prevEl: ".cmn-next",
			},

			breakpoints: {
				1199: {
					slidesPerView: 2,
				},
				991: {
					slidesPerView: 2,
					spaceBetween: 14,
				},
				767: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				575: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				0: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
			},
		});
		//--- Swiper service SLide End ---//

		//--- Swiper Testimonial SLide Start ---//
		const testimonialWrapv2 = new Swiper(".testimonial-wrapv2", {
			spaceBetween: 30,
			speed: 1500,
			loop: true,
			autoplay: {
				delay: 1500,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".cmn-prev",
				prevEl: ".cmn-next",
			},

			breakpoints: {
				1199: {
					slidesPerView: 1,
				},
			},
		});
		//--- Swiper Testimonial SLide End ---//

		//--- Swiper Testimonial SLide Start ---//
		const testimonialVersion01 = new Swiper(".testimonial-version01", {
			spaceBetween: 10,
			speed: 1500,
			loop: true,
			autoplay: {
				delay: 1500,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".cmn-prev",
				prevEl: ".cmn-next",
			},

			breakpoints: {
				767: {
					spaceBetween: 30,
					slidesPerView: 2,
				},
			},
		});
		//--- Swiper Testimonial SLide End ---//

		//--- Swiper Testimonial SLide Start ---//
		const testimonialVersion011 = new Swiper(".testimonial-version011", {
			spaceBetween: 10,
			speed: 1500,
			loop: true,
			autoplay: {
				delay: 1500,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".cmn-prev",
				prevEl: ".cmn-next",
			},

			breakpoints: {
				767: {
					spaceBetween: 30,
					slidesPerView: 1,
				},
			},
		});
		//--- Swiper Testimonial SLide End ---//

		//--- Swiper Testimonial SLide Start ---//
		const testimonialVersion03 = new Swiper(".testimonial-version03", {
			spaceBetween: 20,
			speed: 1500,
			loop: true,
			autoplay: {
				delay: 1500,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".cmn-prev",
				prevEl: ".cmn-next",
			},

			breakpoints: {
				1199: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 2,
				},
			},
		});
		//--- Swiper Testimonial SLide End ---//

		//--- Swiper Team SLide End ---//
		const teamslideWrap = new Swiper(".team-slidewrap", {
			spaceBetween: 30,
			speed: 1500,
			loop: true,
			autoplay: {
				delay: 1500,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".cmn-prev",
				prevEl: ".cmn-next",
			},

			breakpoints: {
				1199: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 4,
					spaceBetween: 14,
				},
				767: {
					slidesPerView: 3,
					spaceBetween: 14,
				},
				575: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				0: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
			},
		});
		//--- Swiper Team SLide End ---//

		//--- Swiper Team SLide End ---//
		const protfolioSolutionwrap = new Swiper(".protfolio-solutionwrap", {
			spaceBetween: 30,
			speed: 1500,
			loop: true,
			autoplay: {
				delay: 1500,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".swiper-pagination",
				type: "fraction",
			},

			breakpoints: {
				1199: {
					slidesPerView: 1,
				},
			},
		});
		//--- Swiper Team SLide End ---//

		//--- Swiper Team SLide End ---//
		const trustedInner = new Swiper(".trusted-inner", {
			spaceBetween: 30,
			speed: 1500,
			loop: true,
			centeredSlides: true,
			autoplay: {
				delay: 1500,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".swiper-pagination",
				type: "fraction",
			},

			breakpoints: {
				1199: {
					slidesPerView: 6,
				},
				991: {
					slidesPerView: 6,
				},
				767: {
					slidesPerView: 5,
				},
				500: {
					slidesPerView: 4,
				},
				320: {
					slidesPerView: 3,
				},
				0: {
					slidesPerView: 2,
				},
			},
		});
		//--- Swiper Team SLide End ---//

		//--- Aos Animation --- //
		$(".title").attr({
			"data-aos": "zoom-in",
			"data-aos-duration": "2000",
		});

		AOS.init({
			once: true,
		});
		//--- Aos Animation --- //

		//--- magnific Popup --- //
		$(".img-popup").magnificPopup({
			type: "image",
			gallery: {
				enabled: true,
			},
		});

		$(".video-popup").magnificPopup({
			type: "iframe",
			callbacks: {},
		});
		//--- magnific Popup --- //

		//--- Nice Select --- //
		$("select").niceSelect();
		//--- Nice Select --- //

		//--- Custom Accordion Tabs --- //
		$(".accordion-single .header-area").on("click", function () {
			if ($(this).closest(".accordion-single").hasClass("active")) {
				$(this).closest(".accordion-single").removeClass("active");
				$(this).next(".content-area").slideUp();
			} else {
				$(".accordion-single").removeClass("active");
				$(this).closest(".accordion-single").addClass("active");
				$(".content-area").not($(this).next(".content-area")).slideUp();
				$(this).next(".content-area").slideToggle();
			}
		});
		//--- Custom Accordion Tabs --- //
	}); // End Document Ready Function

	function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');                    
            $(".preloader").delay(600).fadeOut();                       
        });
    }

    loader();
})(jQuery);
