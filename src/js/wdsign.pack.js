/**
    The MIT License (MIT)

    Copyright (c) 2013 Rick Benetti - WDSIGN

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

 * @project_name fristclass
 * @copyright    Copyright (c) 2013 Rick Benetti - WDSIGN - firstclass (http://firstclass.wdsign.com.br)
 * @author       Rick Benetti <rick@wdsign.com.br>
**/
/**
 *
 * wdsign - Tabs
 * @author: Rick Benetti - <rick@wdsign.com.br>
 *
 **/
;(function($) {
    // inicia o plugin
    $.fn.wdsign_tabs = function() {
        var baseElem = $(this);
        $(this).find('.menu-tab .menu-link').click(function(e) {
            e.stopPropagation();
            var newID = $(this).attr('href');

            //Impedir de funcionar caso clique num link ativo
            if ($(baseElem).find('.menu-tab .link-active').attr('href') == newID)
                return false;

            //Removendo a classe link-ativo e substituindo pela classe link-item
            $(baseElem).find('.menu-tab .active')
                .addClass('link-tab')
                .removeClass('link-active');

            //Hora de fazer as coisas aparecerem
            $(baseElem).find('.content-tab').hide();
            $(newID).show();

            //Botando o link como ativo agora
            $(this).addClass('link-active').removeClass('link-tab');

            return false;
        });
    }
})(jQuery);

/**
 *
 * wdsign - Dropdown Click
 * @author: Rick Benetti - <rick@wdsign.com.br>
 *
 **/
;(function($) {
    // inicia o plugin
    $.fn.wdsign_dropclick = function() {
        $(this).find('.drop-item').click(function() {
            var submenu = $('.drop-box');
            submenu.hide();
            if (submenu.is(":visible")) {
                submenu.fadeOut();
            } else {
                submenu.fadeIn();
            }
        });

        var submenu_active = false;
        $('.drop-box').mouseenter(function() {
            submenu_active = true;
        });

        $('.drop-box').mouseleave(function() {
            submenu_active = false;
            setTimeout(function() {
                if (submenu_active === false) $('.drop-box').fadeOut();
            }, 1000);
        });
    }
})(jQuery);


/**
 *
 * wdsign - NavSidebar by Click
 * @author: Rick Benetti - <rick@wdsign.com.br>
 *
 **/
;(function($) {
    // inicia o plugin
    $.fn.wdsign_navSidebar = function() {
        var thirdLevel = $('.nav-sidebar .second-level .third-level');
        var secondLevel = $('.nav-sidebar .second-level .sub-item:has(ul.sub-menu) > .sub-link');

        $(secondLevel).addClass('more-items');
        $(secondLevel).on('click', function(e) {
            e.preventDefault();
            $(thirdLevel).slideUp('slow');
            var remove = false;
            if (!$(this).hasClass('less-items'))
                remove = true;
            $(secondLevel).removeClass('less-items');
            if (remove) {
                $(this).addClass('less-items').parent().find('.third-level').slideDown('slow');
            }
        });
    }

})(jQuery);
