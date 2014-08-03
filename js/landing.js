$(function() {
    'use strict';
    
    var paths = [headerPath, passagePath, footerPath],
        nodes = [$('.header'), $('.passageCont'), $('.footerCont')],
        argss = [headerArgs, {theme: 'dark'}, null],
        cb = callback;
    
    loadTemplates(paths, nodes, argss, cb);
    
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
});