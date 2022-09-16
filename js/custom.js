// customer slide
$('.customer_slide').slick({
	loop: true,
	slidesToShow: 2,
	// centerMode: true,
	// centerPadding: 0,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	smartspeed: 2000,
	dots: true,
	responsive: [{
		breakpoint: 576,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	},
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	},
	{
		breakpoint: 992,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}
]
  });
// customer slide




// preloader
$(window).load(function () {
	$('#preloader').delay(300).fadeOut()
})
// preloader
// Back to top button
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('.back2top').fadeIn('slow');
	} else {
		$('.back2top').fadeOut('slow');
	}
});
// back2top
// navbar scrolling
$(window).scroll(function () {
	var scrolling = $(window).scrollTop();

	if (scrolling > 20) {
		$(".menu_bg").addClass("bg")
	} else {
		$(".menu_bg").removeClass("bg")
	};
});
// navbar scrolling

// @media 991px menu bar
// 991px navbar
$('.menu_btn').click(function () {
	$('.navbar .menu_bar').toggleClass('active')
});
$('.menu_btn').click(function () {
	$('.menu_btn i').toggleClass("xxxx");
})

// @media 991px menu bar