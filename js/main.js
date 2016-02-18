$(document).ready(function() {
	$(".regular").hover(function(){
		$(this).addClass("active")
	}, function() {
		$(this).removeClass("active")
	});
});