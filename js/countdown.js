$(function () {
    'use strict';
    
    var passagePath = 'tpl/passage.tpl',
        footerPath = 'tpl/footer.tpl';
    
    loadTemplate(passagePath, $('.passageCont'), {theme: 'dark'});
    loadTemplate(footerPath, $('.footerCont'));
    
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
    
	$(".countdown").countEverest({
		//Set your target date here!
		day: 12,
		month: 10,
		year: 2014,
		leftHandZeros: false,
		onChange: function () {
			drawCircle(document.getElementById('days'), this.days, 365, '#ff0636');
			drawCircle(document.getElementById('hours'), this.hours, 24, '#2797f0');
			drawCircle(document.getElementById('minutes'), this.minutes, 60, '#2867b5');
			drawCircle(document.getElementById('seconds'), this.seconds, 60, '#cbcbcb');
		}
	});

	$('#enter_full_link').hover(function () {
		$(this).find('#cd_enter').animate({'color': '#ff0636'});
		$(this).find('#cd_colin').animate({'color': '#2797f0'});
		$(this).find('#cd_full').animate({'color': '#2867b5'});
		$(this).find('#cd_site').animate({'color': '#a8a8a8'});
	}, function () {
		$(this).find('span').animate({'color': 'black'});
	}).click(function () {
		$('#fade_container').fadeOut(2000);
		setTimeout(function () {
			window.location.href = 'html/landing.html';
		}, 2000);
	});
    
    fadeIn();
});