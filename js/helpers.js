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
    footerPath = '../tpl/footer.tpl';

function bgFader(loc) {
    var paths = [
        'DSC05906.JPG',
        'DSC05909.JPG',
        'DSC05915.JPG',
        'DSC05921.JPG',
        'DSC05925.JPG',
        'DSC05926.JPG',
        'IMG_0209.JPG',
        'IMG_0212.JPG',
        'IMG_0566.JPG',
        'IMG_2033.JPG',
    ],
    newLoc = loc % paths.length,
    newImg = paths[newLoc],
    url = 'url("../img/'+newImg+'")';

    $('#landing_container').css({'background-image':url});

    setTimeout(function() {
        bgFader(++loc);
    }, 4000);
}

function fadeIn (callback) {
    $('#fade_container').fadeIn(2000, function() {        
        $('#CRCM').hover(function() {
            $(this).find('.endTitle').animate({'color': '#2867b5'});
        }, function() {
            $(this).find('.endTitle').animate({'color': '#9d9d9d'});
        });
        
        $(window).resize(function() {
            $('#fade_container').height($(this).height(true));
        });
        
        loadHeaderOptions();
        //bgFader(0);
        
        if(callback)
            callback();
    });
}

function loadTemplate (path, node, args) {
    $.ajax({
        url: path,
        success: function (data) {
            var template = Handlebars.compile(data);
            node.html(template(args));
        }
    });
}

function loadHeaderOptions () {
    $('#CRCM').click(function() {
        window.location.href = 'landing.html'; 
    });
        
    $('.header_options').hover(function () {
        $(this).animate({'background-color':'#cbcbcb'});
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
            case 'calendar':
                color = '#2867b5';
                break;
        }
        
        $(this).animate({'background-color':color});
        $(this).css({'color':'white'});
    });
        
    $('#donate').click(function () {
       window.location.href = 'donate.html'; 
    });
        
    $('#calendar,#updates').click(function() {
        var buttonTxt = $(this).html(),
            that = this;
        
        $(this).addClass('comingSoon').html('Coming Soon!');
        
        setTimeout(function() {
            $(that).removeClass('comingSoon').html(buttonTxt);
        }, 4000);
    });
}