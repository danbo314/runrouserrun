$(function() {
    'use strict';
    
    loadTemplate(headerPath, $('.header'), headerArgs);
    loadTemplate(passagePath, $('.passageCont'), {theme: 'dark'});
    loadTemplate(footerPath, $('.footerCont'));
    
    function callback() {
        $('#CRCM').unbind('click').click(function() {
            if($(window).scrollTop() > 0) {
                $('body,html').animate( { scrollTop : 0 } );   
            }
        });
        
        $('#background').fsslider({
            spw: 3,
            sph: 3,
            delay: 6000,
            sDelay: 40,
            effect: 'lineal',
            texture: 'raster',
            navigation: false
        });
    }
    
	fadeIn(callback);
});