/*$(function () {
	$('#about').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'video',
		gallery: {
			enabled: true
		}
	});
});*/

$(function () {
	$('.con').counterUp({
		delay: 10,
		time: 3000
	});
});

$(function () {
	$('#portfolio').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {
			enabled: true
		}
	});
});
$(function () {
	$('.team-members').owlCarousel({
		items: 4,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
	});
});
$(function () {
	$('.testimonials').owlCarousel({
		items: 1,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
	});
});