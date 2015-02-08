var main = function() {
	$('.day').click(function(){
		$(this).next().toggle();
		$(this).find("span.glyphicon-plus").toggleClass('glyphicon-minus');
	});
};

$(document).ready(main);