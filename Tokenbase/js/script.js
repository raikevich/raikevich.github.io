'use strict';

$(document).ready(function() {
    var is_touch_device = 'ontouchstart' in document.documentElement;
    if(is_touch_device) $('body').addClass('sensor');

    if ($('[data-fancybox]').length) {
        $('[data-fancybox]').fancybox();
    }
    if ($('.break').length) {
        $('.break').lightSlider({
            autoWidth:true,
            loop: true,
            pager: false,
            auto: true,
            cssEasing:'linear',
            controls:false,
            pause: 10000,
            speed: 7000,
            pauseOnHover: false
        });
    }

    var wp = window.innerWidth - document.documentElement.clientWidth;

    if ($('.nav__click').length) {
        $('.nav__click').on('click', function() {
            $('.nav').addClass('active');
            $('body').addClass('o-hidden').css('margin-right', wp + 'px');
        });
        $('.nav .fa-close').on('click', function() {
            $('.nav').removeClass('active');
            $('body').removeClass('o-hidden').css('margin-right','0px');
        });
    }

    if ($('.lang').length) {
        $('.lang').on('click', function() {
            $('.lang_mod').slideToggle(300);
        });
    }
});