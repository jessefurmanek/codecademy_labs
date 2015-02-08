var main = function() {
  $('.login p').click(function(){
	  $(".login .dropdown-menu").toggle();
  });
  
  $("#accordion").accordion();  //create accordian

   $('.banner').unslider();  // add the unslider library
};
 

$(document).ready(main); 

