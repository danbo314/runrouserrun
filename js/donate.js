$(function() {
    'use strict';
    
    loadTemplate(headerPath, $('.header'), headerArgs);
    loadTemplate(passagePath, $('.passageCont'), {theme: 'light'});
    loadTemplate(footerPath, $('.footerCont'));
    
	fadeIn();
});