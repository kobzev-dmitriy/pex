$(document).ready(function() {
	$('.nav-button').click(function(e) {
		$('#main-nav').addClass('show-nav');
	});

	$('.nav-close-button').click(function(e) {
		$('#main-nav').removeClass('show-nav');
	});
});