var main = function() {
	$('#top-text').keyup(function(){
		var toptext = $(this).val();
		$('.top-caption').text(toptext);
	});
	
	$('#bottom-text').keyup(function(){
		var toptext = $(this).val();
		$('.bottom-caption').text(toptext);
	});
	
	$('#image-url').keyup(function(){
		var srcurl = $(this).val();
		$('.img-url').attr('src', srcurl);
	});
}
 
$(document).ready(main);