/*-----------------------------------------------------------------------------------

 	Custom JS - All front-end jQuery
 
-----------------------------------------------------------------------------------*/
 


jQuery(document).ready(function() {
								
								
 if (jQuery().superfish) {	
 
  jQuery('ul#nav').superfish({ 
            delay:       200,                            // one second delay on mouseout 
            animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation 
            speed:       'fast',                          // faster animation speed 
			disableHI: true,			
            autoArrows:  false,                           // disable generation of arrow mark-up 
            dropShadows: false                            // disable drop shadows 
        }); 
}

selectnav('nav', {
    nested: true,
	indent: '-',
    label: false
});

});

jQuery(window).load(function() {
    jQuery('.flexslider').flexslider( {
	directionNav: true,
	controlNav: false,
	animationLoop: true
	 });
  });

jQuery(document).ready(function(){
    // Target your .container, .wrapper, .post, etc. 
    jQuery("#content_container").fitVids();
  });

