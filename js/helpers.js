var headerPath = '../tpl/header.tpl',
    headerArgs = {
        shortTitle: false,
        title: [
            {first:'R',end:'un'},
            {first:'R',end:'ouser'},
            {first:'R',end:'un'}
        ]
    },
    passagePath = '../tpl/passage.tpl',
    footerPath = '../tpl/footer.tpl',
    updatesPath = '../tpl/updates.tpl';

function deg(v) {
    return (Math.PI / 180) * v - (Math.PI / 2);
}

function drawCircle(canvas, value, max, color) {
    var	circle = canvas.getContext('2d');

    circle.clearRect(0, 0, canvas.width, canvas.height);
    circle.lineWidth = 8;

    circle.beginPath();
    circle.arc(
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2 - circle.lineWidth,
        deg(0),
        deg(360 / max * (max - value)),
        false
    );
    circle.strokeStyle = '#9f9f9f';
    circle.stroke();

    circle.beginPath();
    circle.arc(
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2 - circle.lineWidth,
        deg(0),
        deg(360 / max * (max - value)),
        true
    );
    circle.strokeStyle = color;
    circle.stroke();
}

function fadeIn (cb) {
    $('#fade_container').fadeIn(2000, function() {        
        $(window).resize(function() {
            $('#fade_container').height($(this).height(true));
        });
        
        loadHeaderOptions();
        
        if (cb)
            cb();
    });
}

function loadTemplate (path, node, args, cb) {
    $.ajax({
        url: path,
        success: function (data) {
            var template = Handlebars.compile(data);
            
            node.html(template(args));
            
            if(cb)
                cb();
        }
    });
}

function recLoadTemplate (paths, nodes, argss, cb, it, len) {
    $.ajax({
        url: paths[it],
        success: function (data) {
            var template = Handlebars.compile(data);
            
            nodes[it].html(template(argss[it]));
            
            if(++it < len)
                recLoadTemplate (paths, nodes, argss, cb, it, len);
            else
                fadeIn(cb);
        }
    });
}

function loadTemplates (paths, nodes, argss, cb) {
    var it = 0,
        len = paths.length;
    
    recLoadTemplate (paths, nodes, argss, cb, it, len);
}

function loadHeaderOptions () {
    $('#CRCM').click(function() {
        window.location.href = 'landing.html'; 
    }).hover(function() {
        $(this).find('.endTitle').animate({'color': '#2867b5'});
    }, function() {
        $(this).find('.endTitle').animate({'color': '#9d9d9d'});
    });
        
    $('.header_options').hover(function () {
        $(this).animate({'background-color':'#ffe353'});
        $(this).css({'color':'#141414'});
    }, function () {
        var id = $(this).attr('id'),
            color;
        
        switch (id) {
            case 'donate':
                color = '#ff0636';
                break;
            case 'updates':
                color = '#2797f0';
                break;
        }
        
        $(this).animate({'background-color':color});
        $(this).css({'color':'white'});
    });
        
    $('#donate').click(function () {
       window.location.href = 'donate.html';
    });
        
    $('#updates').click(function() {
        window.location.href = 'updates.html';
    });
}