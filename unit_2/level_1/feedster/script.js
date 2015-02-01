var main = function() {
	$('.notification img').click(function(){
		$('.notification-menu').toggle();
	});
	
	$('.posts .btn').click(function(){
		$(this).toggleClass('btn-like');
	});
}

$(document).ready(main);