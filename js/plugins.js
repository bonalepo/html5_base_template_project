/*
==================================================================================
// Avoid `console` errors in browsers that lack a console.
==================================================================================
*/
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*
==================================================================================
// old browser functions (runs on ie7-)
==================================================================================
*/


function old_browser(){
$("body").prepend('<p class="chromeframe">You are using an <strong>outdated</strong> browser.<br />Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>');
}




/*
==================================================================================
// loads the fonts with : https://developers.google.com/webfonts/docs/webfont_loader 
// from google and http://www.bonalepo.com/fonts/my_fonts.css
==================================================================================
*/
    var fonts_loaded;
    WebFontConfig = {
	   google: {
		families: [ 'Tangerine', 'Cantarell' ]
	  },
      custom: { families: ['choco_regular', 'choco_bold'],
      urls: [ 'http://www.bonalepo.com/fonts/my_fonts.css' ] },
      active: function() {
        fonts_loaded = 'true';
      } 
    };
 
   (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
            '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();
