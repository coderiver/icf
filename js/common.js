head.ready(function() {

	
// datepicker
	
	// $( "#datepicker" ).datepicker({
	// 	showOtherMonths: true,
 //      	selectOtherMonths: false
	// });



var dates = {'2014/5/1':'some description|http://google.com' , '2014/6/6':'some other description|http://vintage.com.ua'}; 

$('#datepicker').datepicker({                
   beforeShowDay: function(date) {
       var search = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + (date.getDate());
       if (dates[search]) {
           return [true, 'highlight', dates[search].split('|')[0] || ''];
       }
       return [false, '', ''];
   },
    onSelect: function(date) {        
    	date = date.split('/');
    	console.log(date);
        //var date = new Date(date.slice(4)),
        var m = parseFloat(date[1]),
            d = parseFloat(date[0]),
            y = parseFloat(date[2]);        
            console.log(y + '/' + (m) + '/' + d);
        if (dates[y + '/' + (m) + '/' + d]) {
            myhref = dates[(y + '/' + (m) + '/' + d)].split('|');
            window.location = myhref[1];
            return false;
        }
    }
});
$( document ).tooltip({
	position: {
        my: "left bottom+40",
        at: "left bottom"
    	}
});

// tabs
	function tab() {
       $(".js-tab").each(function(){
         var tab_link = $(this).find("a");
         var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
         tab_cont.hide();
         $(this).parents(".js-tab-group").find(".js-tab1").show();
            tab_link.on("click", function() {
             	var index = $(this).attr("href");
             	tab_link.removeClass("is-active");
             	tab_link.parent().removeClass("is-active");
             	$(this).addClass("is-active");
             	$(this).parent().addClass("is-active");
             	tab_cont.hide();
             	$(this).parents(".js-tab-group").find("."+index).show();
                return false;
            });
        });
    }
    	if ($(".js-tab-group").length) {
    		tab();
    	};

// interactive map
	
	// tooltips position

	$(".pin__tooltip").each(function(){
		var ml = $(this).outerWidth();
		ml = (ml*0.5);
		$(this).css('margin-left', -ml);
	});

	// show/hide regions

	$(".imap__europe").hide();
	$(".js-region-back").hide();
	
	$(".js-europe-region").on('click', function(){
		$(".imap__global").hide();
		$(".imap__europe").fadeIn('slow');
		$(".js-region-back").fadeIn();
	});
	$(".js-region-back").on('click', function(){
		$(".imap__global").show();
		$("js-region").fadeOut('fast');
		$(this).fadeOut();
	});

	//sort by

	$(".imap-btn_blue").on('click', function(){
		$(this).toggleClass('is-active');

		if ($(this).hasClass('is-active')) {
			$(".pin1-link").show();
			$(".pin1").show();
		}
		else{
			$(".pin1-link").hide();
			$(".pin1").hide();
		}
	});

	$(".imap-btn_dark").on('click', function(){
		$(this).toggleClass('is-active');

		if ($(this).hasClass('is-active')) {
			$(".pin2-link").show();
			$(".pin2").show();
		}
		else{
			$(".pin2-link").hide();
			$(".pin2").hide();
		}
	});

	$(".imap-btn_gray").on('click', function(){
		$(this).toggleClass('is-active');

		if ($(this).hasClass('is-active')) {
			$(".pin3-link").show();
			$(".pin3").show();
		}
		else{
			$(".pin3-link").hide();
			$(".pin3").hide();
		}
	});

	// scroll to map

	$(".js-scrolltomap").on('click', function(){
		$("html, body").animate({
               scrollTop: $(".imap").offset().top
           }, 500);
		return false;
	});

// consulting popup
	
	$(".popup-wrap").hide();

	$(".js-consult").on('click', function(){
		
		$(".js-popup-consult").fadeIn(400);
		$(".js-popup").addClass('is-open');
		return false;
		
	});
	$(".js-request").on('click', function(){
		
		$(".js-popup-request").fadeIn(400);
		$(".js-popup").addClass('is-open');
		return false;
		
	});

	$(".popup-wrap").on('click', function(e){
		
		$(".popup-wrap").fadeOut(400);
		$(".js-popup").removeClass('is-open');
	});
	$(".js-popup").on('click', function(e){
		e.stopPropagation();
	});

	$(window).scroll(function(){
		
	});


});