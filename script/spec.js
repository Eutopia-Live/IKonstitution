$(function() {
	respace();

	$(window).resize(respace);
});

function respace() {
	var height = $(window).height() - 15;
	var margin = $('header').css('--pad') * height;

	$('section').each(function() {
		if (height -  $(this).outerHeight() > margin) 
			height -= $(this).outerHeight();
		else return false;
	});

	margin = height - $('h1').outerHeight();

	$('header').css('padding', `${Math.floor(2/3*margin)}px 0 ${Math.floor(1/3*margin)}px`);
	$('div.frame').css('height', `${$('section:last-child').offset().top}px`);
}

