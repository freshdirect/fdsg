
// Modules

/// Overlay




$("#sm-overlay-btn").click(function() {
	$(".overlay-bg.sm").addClass('show');
	$("body").addClass('noscroll');
	$("nav").addClass('hide');	
});

$("#md-overlay-btn").click(function() {
	$(".overlay-bg.md").addClass('show');
	$("body").addClass('noscroll');
	$("nav").addClass('hide');	
});

$("#lg-overlay-btn").click(function() {
	$(".overlay-bg.lg").addClass('show');
	$("body").addClass('noscroll');
	$("nav").addClass('hide');	
});

$(".close-btn").click(function() {
	$(".overlay-bg").removeClass('show');
	$("body").removeClass('noscroll');
	$("nav").removeClass('hide');	
});

$(document).keyup(function(e) {
 	if (e.keyCode == 27) { // escape key maps to keycode `27`
    	$(".overlay-bg").removeClass('show');
    	$("body").removeClass('noscroll');
		$("nav").removeClass('hide');	
	}
});
