$(function() {
    'use strict';
    
    var updates = [
        {
            date: 'July 29th',
            title: 'Test Update',
            isLatest: true,
            isSelected: true,
            content: 'Lorem ipsum dolor sit amet, qui posse ocurreret voluptaria an. Eu sit dicta congue argumentum, pro an oratio saperet antiopam. Sea quod discere ceteros cu, ex viderer ornatus voluptatibus eos. Duo ex eius vituperata quaerendum. Viris labores maiorum vel ut. Vero mucius veritus ad duo. Per impetus praesent ad, mucius voluptua conceptam quo id. At mei molestiae suscipiantur, mel omittam fastidii vulputate in, ea mazim mandamus ius. At eripuit quaestio patrioque mea. Explicari interpretaris vel ad. Et hinc nonumy noluisse vel, fierent nominati scribentur sea no, his wisi oblique id. Cu eum dolores volutpat disputationi, indoctum mnesarchum interpretaris id mel, eam in probo atqui. Ipsum quaestio sea ex, vim an utinam causae intellegat, ex porro aliquam qui. Et eripuit accusata recusabo sit, option pericula instructior pri ei. Vim at possit appetere, qui commune percipitur ea. At sea alia posidonium, mel an propriae detraxit sapientem. Eu vel latine omnesque. Ut insolens euripidis nam, laudem libris convenire ut pro, pro eu nominavi tacimates maluisset. Cum eu omnes soleat deserunt. Ut quot mazim nominavi mel. Dicit adolescens ea mea, vidit expetenda pri in, soleat populo invenire eam id. Vim ex justo dicat. Ei putent perpetua partiendo per, ius at sumo omnium mnesarchum. Viderer dissentias mea ei, no per elit facilisis. Vis reque saepe repudiare an, graeco persecuti voluptatibus per ea. Qui id aeque meliore scribentur, graeci virtute ex sed. Eu nec prompta sanctus percipit, facete delectus petentium ne nam. Pri docendi liberavisse ad, mundi persecuti per ut. Ad eum meis petentium. Vim ubique saperet fuisset at, at amet brute propriae nam. Qui nihil offendit cu, vix vivendo pertinax interesset ei.'
        },
        {
            date: 'July 28th',
            title: 'Old Test Update',
            isLatest: false,
            isSelected: false,
            content: 'OTHER CONTENT'
        }
    ],
    paths = [headerPath, passagePath, updatesPath, footerPath],
    nodes = [$('.header'), $('.passageCont'), $('#updatesCont'), $('.footerCont')],
    argss = [headerArgs, {theme: 'dark'}, { posts: updates, item: updates[0] }, null],
    cb = callback;
    
    loadTemplates(paths, nodes, argss, cb);
    
    function callback() {
        $('.uMenuItem:not(.selectedU)').hover(function () {
            $(this).animate({
                width: '175px',
                'background-color': '#ff0636'
            });
        }, function () {
            var color = $(this).hasClass('selectedU') ? '#2867b5' : '#2797f0';
            $(this).animate({
                width: '150px',
                'background-color': color
            });
        }).click(function () {
            var date = $.trim($(this).html()),
                obj = null;
            
            $('.selectedU').removeClass('.selectedU');
            
            $.each(updates, function(i, curr) {
                if (curr.date === date || (date === 'Latest' && curr.isLatest)) {
                    curr.isSelected = true;
                    obj = curr;
                }
                else
                    curr.isSelected = false;
            });
            
            loadTemplate(updatesPath, $('#updatesCont'), { posts: updates, item: obj }, callback);
        });
    }
});