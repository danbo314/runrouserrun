/*-----------------------------------------------
 FSSlider - Unique Fullscreen Slider
 Version: 1.0 - (2011/01/28)
 Requires jQuery v1.4.2 or later 
 Author: Karim Hossenbux
 URL: http://themeforest.net/user/twi
-----------------------------------------------*/

(function($) {
	var params = new Array;
	var order = new Array;
	var images = new Array;
	var interval = new Array;
	var imagePos = new Array;
	var appInterval = new Array;	
	var squarePos = new Array;
	var reverse = new Array;
	var elem;
	
	$.fn.fsslider = function(options){
		init = function(el){
		
			var elemId = el.id;
			
			order[elemId] = new Array();
			images[elemId] = new Array();
			imagePos[elemId] = 0;
			squarePos[elemId] = 0;
			reverse[elemId] = 1;
			params[elemId] = $.extend({}, $.fn.fsslider.defaults, options);
			params[elemId].width = $(window).width();
			params[elemId].height = $(window).height();
			
			$.each($('#'+elemId+' img'), function(i,item){
				images[elemId][i] = $(item).attr('src');
				$(item).hide();
				$(item).next().hide();
			});
			
			$('#'+elemId).append("<div id='fss-content'></div>");
			$.render(elemId);
			if(params[elemId].navigation){$.nav(elemId);}
			$.transition(elemId,0);
			$.transitionCall(elemId);
		}
		
		$.render = function(elemId){
			tWidth = sWidth = parseInt(params[elemId].width/params[elemId].spw);
			tHeight = sHeight = parseInt(params[elemId].height/params[elemId].sph);
			counter = sLeft = sTop = 0;
			tgapx = gapx = params[elemId].width - params[elemId].spw*sWidth;
			tgapy = gapy = params[elemId].height - params[elemId].sph*sHeight;
			for(i=1;i <= params[elemId].sph;i++){
				gapx = tgapx;
					if(gapy > 0){
						gapy--;
						sHeight = tHeight+1;
					} else {
						sHeight = tHeight;
					}
				for(j=1; j <= params[elemId].spw; j++){	
					if(gapx > 0){
						gapx--;
						sWidth = tWidth+1;
					} else {
						sWidth = tWidth;
					}
					order[elemId][counter] = i+''+j;
					counter++;
					$('#fss-content').append("<div class='fss-"+elemId+"' id='fss-"+elemId+i+j+"' style='width:"+sWidth+"px; height:"+sHeight+"px; float: left; position: absolute;'></div>");	
					$("#fss-"+elemId+i+j).css({ 
						'background-position': -sLeft +'px '+(-sTop+'px'),
						'left' : sLeft ,
						'top': sTop
					});
					sLeft += sWidth;
				}
				sTop += sHeight;
				sLeft = 0;					
			}
			$('#'+elemId).append("<div id='fss-"+params[elemId].texture+"' class='fss-texture' style='width:"+params[elemId].width+"px;height:"+params[elemId].height+"px;'></div>");
		};
		
		$.transitionCall = function(elemId){
			clearInterval(interval[elemId]);	
			delay = params[elemId].delay + params[elemId].spw*params[elemId].sph*params[elemId].sDelay;
			interval[elemId] = setInterval(function() { $.transition(elemId) }, delay);
		}
		
		$.transition = function(elemId,direction){
			$.effect(elemId);
			squarePos[elemId] = 0;
			appInterval[elemId] = setInterval(function() { $.appereance(elemId,order[elemId][squarePos[elemId]])  },params[elemId].sDelay);
			if(typeof(direction) == "undefined") {
				imagePos[elemId]++;
			} else {
				if(direction == 'prev') {
					imagePos[elemId]--;
				} else {
					imagePos[elemId] = direction;
				}
			}
			var img = new Image();
			if(typeof(direction) != "undefined") {
				img.src = images[elemId][imagePos[elemId]];
			} else {
				img.src = images[elemId][0];
			}
			
			var w = img.width;
			var h = img.height;
			if  (imagePos[elemId] == images[elemId].length) {
				imagePos[elemId] = 0;
			}
			if (imagePos[elemId] == -1){
				imagePos[elemId] = images[elemId].length-1;
			}	
		};
		
		$.appereance = function(elemId,sid){
			if (squarePos[elemId] == params[elemId].spw*params[elemId].sph) {
				clearInterval(appInterval[elemId]);
				return;
			}
			var img = new Image();
			img.src = images[elemId][imagePos[elemId]];
			var ratio = img.height / img.width;	
			var browserheight = $(window).height();
			var browserwidth = $(window).width()
			if ((browserheight/browserwidth) > ratio){
			    var img_w = browserheight / ratio;
			    var img_h = browserheight;
			} else {
			    var img_w = browserwidth;
			    var img_h = browserwidth * ratio;
			}
			var bgsize = img_w + 'px auto';			
			$("#fss-"+elemId+sid).css({ 
				'background-size': bgsize,
				'-moz-background-size': bgsize,
				'-webkit-background-size': bgsize,
				'-o-background-size': bgsize,
			});
			$('#fss-'+elemId+sid).css({ opacity: 0, 'background-image': 'url('+images[elemId][imagePos[elemId]]+')' });
			$('#fss-'+elemId+sid).animate({ opacity: 1 }, 300);
			squarePos[elemId]++;
		};
		
		$.nav = function(elemId){
			$('.fss-texture').append("<div id='fss-nav-"+elemId+"' style='position:absolute;z-index:200;bottom:10px;right:10px;'></div>");
			$('#fss-nav-'+elemId).append("<a href='#' id='fss-prev-"+elemId+"' class='fss-prev' style='margin-right:2px;'></a>");
			$('#fss-nav-'+elemId).append("<a href='#' id='fss-next-"+elemId+"' class='fss-next'></a>");
			$('#fss-prev-'+elemId).click( function(e){
				e.preventDefault();
				$.transition(elemId,'prev');
				$.transitionCall(elemId);		
			}).mouseover( function(){ $('#fss-nav-'+elemId).show() });
			$('#fss-next-'+elemId).click( function(e){
				e.preventDefault();
				$.transition(elemId);
				$.transitionCall(elemId);
			}).mouseover( function(){ $('#fss-nav-'+elemId).show() });				
		}
		
		$.effect = function(elemId){	
			effA = ['rand', 'diagonal','lineal'];
			if(params[elemId].effect == '') {
				eff = effA[Math.floor(Math.random()*(effA.length))];
			} else {
				eff = params[elemId].effect;
			}
			order[elemId] = new Array();
			if(eff == 'rand'){
				counter = 0;
				  for(i=1;i <= params[elemId].sph;i++){
				  	for(j=1; j <= params[elemId].spw; j++){	
				  		order[elemId][counter] = i+''+j;
						counter++;
				  	}
				  }	
				$.rand(order[elemId]);
			}
			if(eff == 'diagonal') $.diagonal(elemId);	
			if(eff == 'lineal')	$.lineal(elemId);
			reverse[elemId] *= -1;
			if(reverse[elemId] > 0){
				order[elemId].reverse();
			}
		}
				
		$.rand = function(arr) {				
		var i = arr.length;
		if ( i == 0 ) return false;
			while ( --i ) {
				 var j = Math.floor( Math.random() * ( i + 1 ) );
				 var tempi = arr[i];
				 var tempj = arr[j];
				 arr[i] = tempj;
				 arr[j] = tempi;
			}
		}	

		$.lineal = function(elemId){
			counter = 0;
			for(i=1;i <= params[elemId].sph;i++){
				for(j=1; j <= params[elemId].spw; j++){	
					order[elemId][counter] = i+''+j;
					counter++;
				}
				
			}
		}
		
		$.diagonal = function(elemId){
			var n = params[elemId].sph;
			var m = params[elemId].spw;
			var c = 0;
			var to = to2 = from = 1;
			var dowhile = true;
			while(dowhile){
				for(i=from;i<=to;i++){
					order[elemId][c] = i+''+parseInt(to2-i+1);
					c++;
				}
				to2++;
				if(to < n && to2 < m && n<m) to++;	
				if(to < n && n>=m) to++;
				if(to2 > m)	from++;
				if(from > to) dowhile = false;	
			}			
		}
	
		this.each (	function(){ init(this); } );
		
		$(window).bind('resize', function() {
			var elemId = elem.id;
			$('#'+elemId+' .fss-texture').css({
				width: $(window).width(),
				height: $(window).height()
			});
			$.each($('.fss-' + elemId), function(){
				tWidth = sWidth = parseInt($(window).width()/params[elemId].spw);
				tHeight = sHeight = parseInt($(window).height()/params[elemId].sph);
				counter = sLeft = sTop = 0;
				tgapx = gapx = $(window).width() - params[elemId].spw*sWidth;
				tgapy = gapy = $(window).height() - params[elemId].sph*sHeight;
				var img = new Image();
				img.src = images[elemId][imagePos[elemId]];
				var ratio = img.height / img.width;
				var browserheight = $(window).height();
				var browserwidth = $(window).width()
				if ((browserheight/browserwidth) > ratio){
				    var img_w = browserheight / ratio;
				    var img_h = browserheight;
				} else {
				    var img_w = browserwidth;
				    var img_h = browserwidth * ratio;
				}
				var bgsize = img_w + 'px auto';
				for(i=1;i <= params[elemId].sph;i++){
					gapx = tgapx;
						if(gapy > 0){
							gapy--;
							sHeight = tHeight+1;
						} else {
							sHeight = tHeight;
						}
					for(j=1; j <= params[elemId].spw; j++){
						if(gapx > 0){
							gapx--;
							sWidth = tWidth+1;
						} else {
							sWidth = tWidth;
						}
						order[elemId][counter] = i+''+j;
						counter++;	
						$("#fss-"+elemId+i+j).css({ 
							'background-position': -sLeft +'px '+(-sTop+'px'),
							'left' : sLeft ,
							'top': sTop,
							'background-size': bgsize,
							'-moz-background-size': bgsize,
							'-webkit-background-size': bgsize,
							'-o-background-size': bgsize,
							'width': sWidth,
							'height': sHeight
						});
						sLeft += sWidth;
					}
					sTop += sHeight;
					sLeft = 0;					
				}
			});
		});
		
	};
	
	$.fn.fsslider.defaults = {	
		width: $(window).width(),
		height: $(window).height(),
		spw: 4, 
		sph: 3, 
		delay: 6000, 
		sDelay: 70, 
		effect: '',
		texture: 'cross',
		navigation: true
	};
})(jQuery);