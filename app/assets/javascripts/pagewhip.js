function slideSwitch() {
    var $active = $("#slidebginner div.active");

    if ( $active.length == 0 ) $active = $("#slidebginner div:last");

    var $next =  $active.next().length ? $active.next()
        : $("#slidebginner div:first");

    $active.addClass("last-active");
        
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0},1000, function() {
            $active.removeClass("active last-active");
        });
}

$(function() {
    setInterval( "slideSwitch()", 5000 );
});


$(document).ready(function() {
	$("a.topopup").hover(function() {
			setTimeout(function(){ // then show popup, deley in .5 second
							loadPopup(); // function show popup
						}); // .5 second
	return false;
	});

	/* event for close the popup */
	$("div.close").hover(
					function() {
						$('span.ecs_tooltip').show();
					},
					function () {
    					$('span.ecs_tooltip').hide();
  					}
				);

	$("div.close").click(function() {
		disablePopup();  // function close pop up
	});

	$(this).keyup(function(event) {
		if (event.which == 27) { // 27 is 'Ecs' in the keyboard
			disablePopup();  // function close pop up
		}
	});

       	var popupStatus = 0; // set value
	function loadPopup() {
		if(popupStatus == 0) { // if value is 0, show popup
			$("#briefinfo").slideDown("fast"); // fadein popup div
			popupStatus = 1; // and set value to 1
		}
	}

	function disablePopup() {
		if(popupStatus == 1) { // if value is 1, close popup
		$("#briefinfo").slideUp("fast");
						popupStatus = 0;  // and set value to 0
		}
	}
	/************** end: functions. **************/
}); // jQuery End

jQuery(function($) {
	var popupStatus = 0; // set value

	$(".master").click(function() {
			var imgSrc = $(this).find('img').attr('src');
			var popup = $("#GbgPopup");
			popup.find("img").attr("src", imgSrc);
			popup.fadeIn(0500); // fadein popup div
			popupStatus = 1; // and set value to 1			
	//return false;
	});


	/* event for close the popup */
	$("div.closeit").hover(
					function() {
						$('span.ecs_tooltip_').show();
					},
					function () {
    					$('span.ecs_tooltip_').hide();
  					}
				);

	$("div.closeit").click(function() {
		disablePopup();  // function close pop up
	});

	$(this).keyup(function(event) {
		if (event.which == 27) { // 27 is 'Ecs' in the keyboard
			disablePopup();  // function close pop up
		}
	});

    
	function disablePopup() {
		if(popupStatus == 1) { // if value is 1, close popup
			$("#GbgPopup").fadeOut("normal");
			popupStatus = 0;  // and set value to 0
		}
	}
	/************** end: functions. **************/
}); // jQuery End






