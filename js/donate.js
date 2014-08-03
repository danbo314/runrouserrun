$(function() {
    'use strict';
    
    var paths = [headerPath, passagePath, footerPath],
        nodes = [$('.header'), $('.passageCont'), $('.footerCont')],
        argss = [headerArgs, {theme: 'light'}, null],
        cb = null;
    
    loadTemplates(paths, nodes, argss, cb);
    
});