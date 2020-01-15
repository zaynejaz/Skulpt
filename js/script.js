//------------- SCROLL ANIMATIONS -------------
//REVEAL ANIMATIONS
new WOW().init();
//NAVBAR BG change
$(function () {
	$(document).scroll(function () {
		var $nav = $(".nav");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

//------------- MENU TOGGLER -------------
var t1 = new TimelineMax({ paused: true });
t1.to(".menu", 0.5, {
	left: "0%",
	ease: Power2.easeInOut
});

t1.reverse();
$(document).on("click", ".menu-open", function () {
	t1.reversed(!t1.reversed());
});
$(document).on("click", ".menu-close", function () {
	t1.reversed(!t1.reversed());
});

//------------- SLICK-SLIDER -------------
// HOMEPAGE SLIDER
$('.slider-one')
	.not(".slick-initialized")
	.slick({
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: ".none",
		nextArrow: ".none",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

// PRODUCT SLIDER
$('.slider-prod')
	.not(".slick-initialized")
	.slick({
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: "none",
		prevArrow: "none",
	});








