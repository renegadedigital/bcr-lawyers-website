jQuery(window).load(function() {

  var carouselConteiner = jQuery("#caroufredsel_carousel1");

  carouselConteiner.carouFredSel({
    responsive	: true,
    width: '100%',
    items		: {
      width : 336,
      height: 'variable',
      visible		: {
        min			: 1,
        max			: 3				},
      minimum: 1
    },
    scroll: {
      items: 1,
      fx: "scroll",
      easing: "swing",
      duration: 500,
      queue: true
    },
    auto: false,
                swipe:{
      onTouch: true
    }
  });
});
