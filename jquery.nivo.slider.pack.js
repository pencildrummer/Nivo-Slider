/*
 * jQuery Nivo Slider v3.2
 * http://nivo.dev7studios.com
 *
 * Copyright 2012, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

/* Edited by Fabio Borella */

(function(a){var v=function(p,w){var e=a.extend({},a.fn.nivoSlider.defaults,w),c={currentSlide:0,currentImage:"",totalSlides:0,running:!1,paused:!1,stop:!1,controlNavEl:!1},k=a(p);k.data("nivo:vars",c).addClass("nivoSlider");k.on("slideto.nivoslider",function(b,f,d){if(c.running||a(this).hasClass("active"))return!1;clearInterval(n);n="";q.attr("src",c.currentImage.attr("src"));c.currentSlide=f-1;isNaN(d)||(originalSpeed=e.animSpeed,e.animSpeed=d);r(k,m,e,"control");isNaN(d)||(e.animSpeed=originalSpeed)});
k.on("slideprev.nivoslider",function(b,a){if(c.running)return!1;clearInterval(n);n="";c.currentSlide-=2;isNaN(a)||(originalSpeed=e.animSpeed,e.animSpeed=a);r(k,m,e,"prev");isNaN(a)||(e.animSpeed=originalSpeed)});k.on("slidenext.nivoslider",function(b,a){if(c.running)return!1;clearInterval(n);n="";isNaN(a)||(originalSpeed=e.animSpeed,e.animSpeed=a);r(k,m,e,"next");isNaN(a)||(e.animSpeed=originalSpeed)});var m=k.children();m.each(function(){var b=a(this),f="";b.is("img")||(b.is("a")&&(b.addClass("nivo-imageLink"),
f=b),b=b.find("img:first"));var d=0===d?b.attr("width"):b.width(),e=0===e?b.attr("height"):b.height();""!==f&&f.css("display","none");b.css("display","none");c.totalSlides++});e.randomStart&&(e.startSlide=Math.floor(Math.random()*c.totalSlides));0<e.startSlide&&(e.startSlide>=c.totalSlides&&(e.startSlide=c.totalSlides-1),c.currentSlide=e.startSlide);a(m[c.currentSlide]).is("img")?c.currentImage=a(m[c.currentSlide]):c.currentImage=a(m[c.currentSlide]).find("img:first");a(m[c.currentSlide]).is("a")&&
a(m[c.currentSlide]).css("display","block");var q=a("<img/>").addClass("nivo-main-image");q.attr("src",c.currentImage.attr("src")).show();k.append(q);a(window).resize(function(){k.children("img").width(k.width());q.attr("src",c.currentImage.attr("src"));q.stop().height("auto");a(".nivo-slice").remove();a(".nivo-box").remove()});k.append(a('<div class="nivo-caption"></div>'));var x=function(b){var f=a(".nivo-caption",k);if(""!=c.currentImage.attr("title")&&void 0!=c.currentImage.attr("title")){var d=
c.currentImage.attr("title");"#"==d.substr(0,1)&&(d=a(d).html());"block"==f.css("display")?setTimeout(function(){f.html(d)},b.animSpeed):(f.html(d),f.stop().fadeIn(b.animSpeed))}else f.stop().fadeOut(b.animSpeed)};x(e);var n=0;!e.manualAdvance&&1<m.length&&(n=setInterval(function(){r(k,m,e,!1)},e.pauseTime));e.directionNav&&(k.append('<div class="nivo-directionNav"><a class="nivo-prevNav">'+e.prevText+'</a><a class="nivo-nextNav">'+e.nextText+"</a></div>"),a(k).on("click","a.nivo-prevNav",function(){k.trigger("slideprev.nivoslider")}),
a(k).on("click","a.nivo-nextNav",function(){k.trigger("slidenext.nivoslider")}));if(e.controlNav){c.controlNavEl=a('<div class="nivo-controlNav"></div>');k.after(c.controlNavEl);for(var s=0;s<m.length;s++)if(e.controlNavThumbs){c.controlNavEl.addClass("nivo-thumbs-enabled");var u=m.eq(s);u.is("img")||(u=u.find("img:first"));u.attr("data-thumb")&&c.controlNavEl.append('<a class="nivo-control" rel="'+s+'"><img src="'+u.attr("data-thumb")+'" alt="" /></a>')}else c.controlNavEl.append('<a class="nivo-control" rel="'+
s+'">'+(s+1)+"</a>");a("a:eq("+c.currentSlide+")",c.controlNavEl).addClass("active");a("a",c.controlNavEl).bind("click",function(){k.trigger("slideto.nivoslider",[a(this).attr("rel")])})}e.pauseOnHover&&k.hover(function(){c.paused=!0;clearInterval(n);n=""},function(){c.paused=!1;""!==n||e.manualAdvance||(n=setInterval(function(){r(k,m,e,!1)},e.pauseTime))});k.bind("nivo:animFinished",function(){q.attr("src",c.currentImage.attr("src"));c.running=!1;a(m).each(function(){a(this).is("a")&&a(this).css("display",
"none")});a(m[c.currentSlide]).is("a")&&a(m[c.currentSlide]).css("display","block");""!==n||c.paused||e.manualAdvance||(n=setInterval(function(){r(k,m,e,!1)},e.pauseTime));e.afterChange.call(this)});var t=function(b,f,d){a(d.currentImage).parent().is("a")&&a(d.currentImage).parent().css("display","block");a('img[src="'+d.currentImage.attr("src")+'"]',b).not(".nivo-main-image,.nivo-control img").width(b.width()).css("visibility","hidden").show();for(var c=a('img[src="'+d.currentImage.attr("src")+'"]',
b).not(".nivo-main-image,.nivo-control img").parent().is("a")?a('img[src="'+d.currentImage.attr("src")+'"]',b).not(".nivo-main-image,.nivo-control img").parent().height():a('img[src="'+d.currentImage.attr("src")+'"]',b).not(".nivo-main-image,.nivo-control img").height(),g=0;g<f.slices;g++){var h=Math.round(b.width()/f.slices);g===f.slices-1?b.append(a('<div class="nivo-slice" name="'+g+'"><img src="'+d.currentImage.attr("src")+'" style="position:absolute; width:'+b.width()+"px; height:auto; display:block !important; top:0; left:-"+
(h+g*h-h)+'px;" /></div>').css({left:h*g+"px",width:b.width()-h*g+"px",height:c+"px",opacity:"0",overflow:"hidden"})):b.append(a('<div class="nivo-slice" name="'+g+'"><img src="'+d.currentImage.attr("src")+'" style="position:absolute; width:'+b.width()+"px; height:auto; display:block !important; top:0; left:-"+(h+g*h-h)+'px;" /></div>').css({left:h*g+"px",width:h+"px",height:c+"px",opacity:"0",overflow:"hidden"}))}a(".nivo-slice",b).height(c);q.stop().animate({height:a(d.currentImage).height()},f.animSpeed)},
y=function(b,f,d){a(d.currentImage).parent().is("a")&&a(d.currentImage).parent().css("display","block");a('img[src="'+d.currentImage.attr("src")+'"]',b).not(".nivo-main-image,.nivo-control img").width(b.width()).css("visibility","hidden").show();for(var c=Math.round(b.width()/f.boxCols),g=Math.round(a('img[src="'+d.currentImage.attr("src")+'"]',b).not(".nivo-main-image,.nivo-control img").height()/f.boxRows),h=0;h<f.boxRows;h++)for(var l=0;l<f.boxCols;l++)l===f.boxCols-1?b.append(a('<div class="nivo-box" name="'+
l+'" rel="'+h+'"><img src="'+d.currentImage.attr("src")+'" style="position:absolute; width:'+b.width()+"px; height:auto; display:block; top:-"+g*h+"px; left:-"+c*l+'px;" /></div>').css({opacity:0,left:c*l+"px",top:g*h+"px",width:b.width()-c*l+"px"})):b.append(a('<div class="nivo-box" name="'+l+'" rel="'+h+'"><img src="'+d.currentImage.attr("src")+'" style="position:absolute; width:'+b.width()+"px; height:auto; display:block; top:-"+g*h+"px; left:-"+c*l+'px;" /></div>').css({opacity:0,left:c*l+"px",
top:g*h+"px",width:c+"px"})),a('.nivo-box[name="'+l+'"]',b).height(a('.nivo-box[name="'+l+'"] img',b).height()+"px");q.stop().animate({height:a(d.currentImage).height()},f.animSpeed)},r=function(b,f,d,c){var g=b.data("nivo:vars");g&&g.currentSlide===g.totalSlides-1&&d.lastSlide.call(this);if((!g||g.stop)&&!c)return!1;d.beforeChange.call(this);c?("prev"===c&&q.attr("src",g.currentImage.attr("src")),"next"===c&&q.attr("src",g.currentImage.attr("src"))):q.attr("src",g.currentImage.attr("src"));g.currentSlide++;
g.currentSlide===g.totalSlides&&(g.currentSlide=0,d.slideshowEnd.call(this));0>g.currentSlide&&(g.currentSlide=g.totalSlides-1);a(f[g.currentSlide]).is("img")?g.currentImage=a(f[g.currentSlide]):g.currentImage=a(f[g.currentSlide]).find("img:first");d.controlNav&&(a("a",g.controlNavEl).removeClass("active"),a("a:eq("+g.currentSlide+")",g.controlNavEl).addClass("active"));x(d);a(".nivo-slice",b).remove();a(".nivo-box",b).remove();var h=d.effect;f="";"random"===d.effect&&(f="sliceDownRight sliceDownLeft sliceUpRight sliceUpLeft sliceUpDown sliceUpDownLeft fold fade boxRandom boxRain boxRainReverse boxRainGrow boxRainGrowReverse".split(" "),
h=f[Math.floor(Math.random()*(f.length+1))],void 0===h&&(h="fade"));-1!==d.effect.indexOf(",")&&(f=d.effect.split(","),h=f[Math.floor(Math.random()*f.length)],void 0===h&&(h="fade"));g.currentImage.attr("data-transition")&&(h=g.currentImage.attr("data-transition"));g.running=!0;var l=0,e=0,k=f="",m="";f="";if("sliceDown"===h||"sliceDownRight"===h||"sliceDownLeft"===h)t(b,d,g),e=l=0,f=a(".nivo-slice",b),"sliceDownLeft"===h&&(f=a(".nivo-slice",b)._reverse()),f.each(function(){var c=a(this);c.css({top:"0px"});
e===d.slices-1?setTimeout(function(){c.animate({opacity:"1.0"},d.animSpeed,"",function(){b.trigger("nivo:animFinished")})},100+l):setTimeout(function(){c.animate({opacity:"1.0"},d.animSpeed)},100+l);l+=50;e++});else if("sliceUp"===h||"sliceUpRight"===h||"sliceUpLeft"===h)t(b,d,g),e=l=0,f=a(".nivo-slice",b),"sliceUpLeft"===h&&(f=a(".nivo-slice",b)._reverse()),f.each(function(){var c=a(this);c.css({bottom:"0px"});e===d.slices-1?setTimeout(function(){c.animate({opacity:"1.0"},d.animSpeed,"",function(){b.trigger("nivo:animFinished")})},
100+l):setTimeout(function(){c.animate({opacity:"1.0"},d.animSpeed)},100+l);l+=50;e++});else if("sliceUpDown"===h||"sliceUpDownRight"===h||"sliceUpDownLeft"===h){t(b,d,g);var n=e=l=0;f=a(".nivo-slice",b);"sliceUpDownLeft"===h&&(f=a(".nivo-slice",b)._reverse());f.each(function(){var c=a(this);0===e?(c.css("top","0px"),e++):(c.css("bottom","0px"),e=0);n===d.slices-1?setTimeout(function(){c.animate({opacity:"1.0"},d.animSpeed,"",function(){b.trigger("nivo:animFinished")})},100+l):setTimeout(function(){c.animate({opacity:"1.0"},
d.animSpeed)},100+l);l+=50;n++})}else if("fold"===h)t(b,d,g),e=l=0,a(".nivo-slice",b).each(function(){var c=a(this),f=c.width();c.css({top:"0px",width:"0px"});e===d.slices-1?setTimeout(function(){c.animate({width:f,opacity:"1.0"},d.animSpeed,"",function(){b.trigger("nivo:animFinished")})},100+l):setTimeout(function(){c.animate({width:f,opacity:"1.0"},d.animSpeed)},100+l);l+=50;e++});else if("fade"===h)t(b,d,g),k=a(".nivo-slice:first",b),k.css({width:b.width()+"px"}),k.animate({opacity:"1.0"},2*d.animSpeed,
"",function(){b.trigger("nivo:animFinished")});else if("slideInRight"===h)t(b,d,g),k=a(".nivo-slice:first",b),k.css({width:"0px",opacity:"1"}),k.animate({width:b.width()+"px"},2*d.animSpeed,"",function(){b.trigger("nivo:animFinished")});else if("slideInLeft"===h)t(b,d,g),k=a(".nivo-slice:first",b),k.css({width:"0px",opacity:"1",left:"",right:"0px"}),k.animate({width:b.width()+"px"},2*d.animSpeed,"",function(){k.css({left:"0px",right:""});b.trigger("nivo:animFinished")});else if("boxRandom"===h)y(b,
d,g),m=d.boxCols*d.boxRows,l=e=0,f=v(a(".nivo-box",b)),f.each(function(){var c=a(this);e===m-1?setTimeout(function(){c.animate({opacity:"1"},d.animSpeed,"",function(){b.trigger("nivo:animFinished")})},100+l):setTimeout(function(){c.animate({opacity:"1"},d.animSpeed)},100+l);l+=20;e++});else if("boxRain"===h||"boxRainReverse"===h||"boxRainGrow"===h||"boxRainGrowReverse"===h){y(b,d,g);var m=d.boxCols*d.boxRows,p=l=e=0,r=0,s=[];s[p]=[];f=a(".nivo-box",b);if("boxRainReverse"===h||"boxRainGrowReverse"===
h)f=a(".nivo-box",b)._reverse();f.each(function(){s[p][r]=a(this);r++;r===d.boxCols&&(p++,r=0,s[p]=[])});for(g=0;g<2*d.boxCols;g++){f=g;for(c=0;c<d.boxRows;c++)0<=f&&f<d.boxCols&&(function(c,f,e,g,l){var k=a(s[c][f]),m=k.width(),n=k.height();"boxRainGrow"!==h&&"boxRainGrowReverse"!==h||k.width(0).height(0);g===l-1?setTimeout(function(){k.animate({opacity:"1",width:m,height:n},d.animSpeed/1.3,"",function(){b.trigger("nivo:animFinished")})},100+e):setTimeout(function(){k.animate({opacity:"1",width:m,
height:n},d.animSpeed/1.3)},100+e)}(c,f,l,e,m),e++),f--;l+=100}}},v=function(b){for(var a,c,e=b.length;e;a=parseInt(Math.random()*e,10),c=b[--e],b[e]=b[a],b[a]=c);return b},z=function(a){this.console&&"undefined"!==typeof console.log&&console.log(a)};this.stop=function(){a(p).data("nivo:vars").stop||(a(p).data("nivo:vars").stop=!0,z("Stop Slider"))};this.start=function(){a(p).data("nivo:vars").stop&&(a(p).data("nivo:vars").stop=!1,z("Start Slider"))};this.slideTo=function(b,c){a(p).trigger("slideto.nivoslider",
[b,c])};this.slidePrev=function(b){a(p).trigger("slideprev.nivoslider",[b])};this.slideNext=function(b){a(p).trigger("slidenext.nivoslider",[b])};e.afterLoad.call(this);return this};a.fn.nivoSlider=function(p){return this.each(function(w,e){var c=a(this);if(c.data("nivoslider"))return c.data("nivoslider");var k=new v(this,p);c.data("nivoslider",k)})};a.fn.nivoSlider.defaults={effect:"random",slices:15,boxCols:8,boxRows:4,animSpeed:500,pauseTime:3E3,startSlide:0,directionNav:!0,controlNav:!0,controlNavThumbs:!1,
pauseOnHover:!0,manualAdvance:!1,prevText:"Prev",nextText:"Next",randomStart:!1,beforeChange:function(){},afterChange:function(){},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){}};a.fn._reverse=[].reverse})(jQuery);