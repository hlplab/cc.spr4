/**
 * .disableTextSelect - Disable Text Select Plugin
 *
 * Version: 1.1
 * Updated: 2007-11-28
 *
 * Used to stop users from selecting text
 *
 * Copyright (c) 2007 James Dempster (letssurf@gmail.com, http://www.jdempster.com/category/jquery/disabletextselect/)
 *
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 **/

/**
 * Requirements:
 * - jQuery (John Resig, http://www.jquery.com/)
 **/
//TODO:  fix code for IE, which at least doesn't work in IE8. looks like
// unselectable property is what I need for IE
// NOTE: There is no way to prevent selection in Opera --alw 2010-10-26
(function($) {
    if ($.browser.mozilla) {
        $.fn.disableTextSelect = function() {
            return this.each(function() {
                $(this).css({
                    'MozUserSelect' : 'none'
                });
            });
        };
        $.fn.enableTextSelect = function() {
            return this.each(function() {
                $(this).css({
                    'MozUserSelect' : ''
                });
            });
        };
    } else if ($.browser.msie) {
        $.fn.disableTextSelect = function() {
            return this.each(function() {
                //$(this).bind('selectstart.disableTextSelect', function() {
                //    return false;
                $(this).attr('unselectable', 'on');
                });
            });
        };
        $.fn.enableTextSelect = function() {
            return this.each(function() {
                //$(this).unbind('selectstart.disableTextSelect');
                $(this).removeAttr('unselectable');
            });
        };
    } else if ($.browser.webkit || $.browser.safari) {
        // code for Safari and Chrome added 2010-10-25 by Andrew Watts
         $.fn.disableTextSelect = function() {
             return this.each(function() {
                 $(this).css({
                     'KhtmlUserSelect' : 'none'
                 });
             });
         };
        $.fn.enableTextSelect = function() {
            return this.each(function() {
                $(this).css({
                    'KhtmlUserSelect' : ''
                });
            });
         };
    } else {
        $.fn.disableTextSelect = function() {
            return this.each(function() {
                $(this).bind('mousedown.disableTextSelect', function() {
                    return false;
                });
            });
        };
        $.fn.enableTextSelect = function() {
            return this.each(function() {
                $(this).unbind('mousedown.disableTextSelect');
            });
        };
    }
})(jQuery);
