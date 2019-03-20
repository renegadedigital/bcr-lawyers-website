jQuery(function(){
  jQuery('ul.sf-menu')
     
  .superfish({
    hoverClass:    'sfHover',         
    pathClass:     'overideThisToUse',
    pathLevels:    1,    
    delay:         500, 
    animation:     {opacity:'show', height:'show'}, 
    speed:         'normal',   
    speedOut:      'fast',   
    autoArrows:    false, 
    disableHI:     false, 
    useClick:      0,
    easing:        "swing",
    onInit:        function(){},
    onBeforeShow:  function(){},
    onShow:        function(){},
    onHide:        function(){},
    onIdle:        function(){}
  });
});

jQuery(function(){
  jQuery('.sf-menu').mobileMenu({});
})

jQuery(function(){
  var ismobile = navigator.userAgent.match(/(iPhone)|(iPod)|(android)|(webOS)/i)
  if(ismobile){
    jQuery('.sf-menu').sftouchscreen({});
  }
})
