$(document).ready(function() {
	$('.project').hover(function() {
		$(this).find('.project-name').css('transform', 'translateY(-35px)');
	}, function() {
		$(this).find('.project-name').css('transform', 'translateY(35px)');
	})
})