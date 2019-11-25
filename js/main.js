/*global $, jQuery, alert*/
$(document).ready(function() {

	'use strict';

	// ========================================================================= //
	//  //SMOOTH SCROLL
	// ========================================================================= //


	$(document).on("scroll", onScroll);

	$('a[href^="#"]').on('click', function(e) {
		e.preventDefault();
		$(document).off("scroll");

		$('a').each(function() {
			$(this).removeClass('active');
			if ($(window).width() < 768) {
				$('.nav-menu').slideUp()
			}
		});

		$(this).addClass('active');

		var target = this.hash,
			menu = target;

		target = $(target);
		$('html, body').stop().animate({
			'scrollTop': target.offset().top - 80
		}, 500, 'swing', function() {
			window.location.hash = target.selector;
			$(document).on("scroll", onScroll);
		});
	});


	function onScroll(event) {
		if ($('.home').length) {
			var scrollPos = $(document).scrollTop();
			$('nav ul li a').each(function() {
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));
			});
		}
	}

	// ========================================================================= //
	//  //NAVBAR SHOW - HIDE
	// ========================================================================= //


	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll > 200) {
			$("#main-nav, #main-nav-subpage").slideDown(700)
			$("#main-nav-subpage").removeClass('subpage-nav');
		} else {
			$("#main-nav").slideUp(700);
			$("#main-nav-subpage").hide();
			$("#main-nav-subpage").addClass('subpage-nav');
		}
	});

	// ========================================================================= //
	//  // RESPONSIVE MENU
	// ========================================================================= //

	$('.responsive').on('click', function(e) {
		$('.nav-menu').slideToggle();
	});

	// ========================================================================= //
	//  Typed Js
	// ========================================================================= //

	var typed = $(".typed");

	$(function() {
		typed.typed({
			strings: ["KongXiangYao.", "Developer."],
			typeSpeed: 100,
			loop: true,
		});
	});


	// ========================================================================= //
	//  Owl Carousel Services
	// ========================================================================= //


	$('.services-carousel').owlCarousel({
		autoplay: true,
		loop: true,
		margin: 20,
		dots: true,
		nav: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			900: {
				items: 4
			}
		}
	});


	// ========================================================================= //
	//  Porfolio isotope and filter
	// ========================================================================= //


	var portfolioIsotope = $('.portfolio-container').isotope({
		itemSelector: '.portfolio-thumbnail',
		layoutMode: 'fitRows'
	});

	$('#portfolio-flters li').on('click', function() {
		$("#portfolio-flters li").removeClass('filter-active');
		$(this).addClass('filter-active');

		portfolioIsotope.isotope({
			filter: $(this).data('filter')
		});
	});


	// ========================================================================= //
	//  magnificPopup
	// ========================================================================= //

	var magnifPopup = function() {
		$('.popup-img').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it

				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function

				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
					// openerElement is the element on which popup was initialized, in this case its <a> tag
					// you don't need to add "opener" option if this code matches your needs, it's defailt one.
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});
	};


	// Call the functions
	magnifPopup();

});

$(function() {
	$(".portfolio-thumbnail").hover(function() {
		var index = $(this).parent().index();
		console.log(index)
		$('.portfolio-pic').eq(index - 1).stop().animate({
			scrollTop: 1000
		}, 6000)
	}, function() {
		var index = $(this).parents().index();
		$('.portfolio-pic').eq(index - 1).stop().animate({
			scrollTop: 0
		}, 4000)
	});
	 $("html").niceScroll();
})
 //这是根据js判断，页面加载完毕就显示			
if (document.attachEvent) {
	document.onreadystatechange = function() {
		if (document.readyState == 'loaded' || document.readyState == "complete" || document.readyState == 'interactive') {
			Start();
		}
	};
} else {
	document.addEventListener("DOMContentLoaded", Start, false); //非IE 
}

function Start() {
	$("#preloader").hide();
	$('.html').removeClass();
}


$('.arrows').click(function() {
	$("body,html").animate({
		"scrollTop": 0
	}, 1000)
})
$(window).on('scroll', function() {
	var scrollTop = $(window).scrollTop();
	if (scrollTop < 200) {
		$('.arrows').hide()
	} else {
		$(".arrows").show()
	}
})
