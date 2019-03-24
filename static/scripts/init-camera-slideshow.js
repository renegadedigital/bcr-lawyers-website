jQuery(document).ready(function(){
  var numSlides = document.querySelectorAll("#camera-slideshow > div").length;
  var multiple = numSlides > 1;
  jQuery('#camera-slideshow').camera({
    alignment			: "center", //topLeft, topCenter, topRight, centerLeft, center, centerRight, bottomLeft, bottomCenter, bottomRight
    autoAdvance				: true,	//true, false
    mobileAutoAdvance	: false, //true, false. Auto-advancing for mobile devices
    cols							: 6,
    easing						: "easeInOutQuad",	//for the complete list http://jqueryui.com/demos/effect/easing.html
    fx								: "mosaic",	
    mobileFx					: 'simpleFade',	//leave empty if you want to display the same effect on mobile devices and on desktop etc.
    height						: "38.496376811594202898550724637681%",	//here you can type pixels (for instance '300px'), a percentage (relative to the width of the slideshow, for instance '50%') or 'auto'
    hover							: true,	//true, false. Puase on state hover. Not available for mobile devices
    loader						: "none",	//pie, bar, none (even if you choose "pie", old browsers like IE8- can't display it... they will display always a loading bar)
    loaderColor				: "#eeeeee", 
    loaderBgColor			: "#222222", 
    loaderOpacity			: .8,	//0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1
    minHeight					: "200px",	//you can also leave it blank
    navigation				: multiple,	//true or false, to display or not the navigation buttons
    navigationHover		: false,	//if true the navigation button (prev, next and play/stop buttons) will be visible on hover state only, if false they will be 	visible always
    mobileNavHover		: false,	//same as above, but only for mobile devices
    opacityOnGrid			: false,	//true, false. Decide to apply a fade effect to blocks and slices: if your slideshow is fullscreen or simply big, I recommend to set it false to have a smoother effect 
    overlayer					: false,	//a layer on the images to prevent the users grab them simply by clicking the right button of their mouse (.camera_overlayer)
    pagination				: false,
    playPause					: false,	//true or false, to display or not the play/pause buttons
    pauseOnClick			: false,	//true, false. It stops the slideshow when you click the sliders.
    rows							: 4,
    slicedCols				: 0,	//if 0 the same value of cols
    slicedRows				: 0,	//if 0 the same value of rows
    thumbnails				: false,
    time							: multiple ? 7000 : 999999,	//milliseconds between the end of the sliding effect and the start of the nex one
    transPeriod				: multiple ? 800 : 0	//lenght of the sliding effect in milliseconds
  });
});
