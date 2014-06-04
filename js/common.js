head.ready(function() {

	var agent = navigator.userAgent,
	event = (agent.match(/iPad/i)) ? "touchstart" : "click";

	$(document).bind(event, function(e){
		$(".js-popup").hide();
	});
	
// datepicker
	
	$( "#datepicker" ).datepicker({
		showOtherMonths: true,
      	selectOtherMonths: false
	});


});