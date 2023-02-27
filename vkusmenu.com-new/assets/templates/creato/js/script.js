function include(url){
  document.write('<script src="'+url+'"></script>');
  return false ;
}

/* cookie.JS
========================================================*/
include('assets/templates/creato/js/jquery.cookie.js');


/* DEVICE.JS
========================================================*/
include('assets/templates/creato/js/device.min.js');

/* Stick up menu
========================================================*/
include('assets/templates/creato/js/tmstickup.js');
$(window).load(function() { 
  if ($('html').hasClass('desktop')) {
      $('#stuck_container').TMStickUp({
      })
  }  
});

/* Easing library
========================================================*/
include('assets/templates/creato/js/jquery.easing.1.3.js');


/* ToTop
========================================================*/
include('assets/templates/creato/js/jquery.ui.totop.js');
$(function () {   
  $().UItoTop({ easingType: 'easeOutQuart' });
});



/* DEVICE.JS AND SMOOTH SCROLLIG (New for Google Chrome)
========================================================*/
include('assets/templates/creato/js/SmoothScroll.min.js');


/* Copyright Year
========================================================*/
var currentYear = (new Date).getFullYear();
$(document).ready(function() {
  $("#copyright-year").text( (new Date).getFullYear() );
});


/* Superfish menu
========================================================*/
include('assets/templates/creato/js/superfish.js');

/* Mobile menu slicknav
========================================================*/
include('assets/templates/creato/js/jquery.slicknav.min.js');

$(document).ready(function(){
	$('.sf-menu').slicknav({
		prependTo:'nav'
	});
});

/* Mobile Contact Bar
========================================================*/
include('assets/templates/creato/js/mobile-contact-bar.js');

$(document).ready(function(){
	$("#mobile-contact-bar").slideBox({width: "100%", height: "53px", position: "bottom"});
});

/* скрипт, не позволяющий выделять и копировать текст
========================================================*/
/*document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;
function noselect() {return false;}*/

/* Orientation tablet fix
========================================================*/
$(function(){
// IPad/IPhone
	var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
	ua = navigator.userAgent,

	gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";},

	scaleFix = function () {
		if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
			viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
			document.addEventListener("gesturestart", gestureStart, false);
		}
	};
	
	scaleFix();
	// Menu Android
	if(window.orientation!=undefined){
  var regM = /ipod|ipad|iphone/gi,
   result = ua.match(regM)
  if(!result) {
   $('.sf-menu li').each(function(){
    if($(">ul", this)[0]){
     $(">a", this).toggle(
      function(){
       return false;
      },
      function(){
       window.location.href = $(this).attr("href");
      }
     );
    } 
   })
  }
 }
});
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')