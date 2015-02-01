var main = function() {
	$('.more-btn').click(function(){
		$(this).next().toggle();
	});
	
	$('.more-menu .share').click(function(){
		$('.share-menu').toggle();
	});
	
	$('.notification').click(function(){
		$(this).toggleClass('yellow');
	});
	
};

$(document).ready(main);