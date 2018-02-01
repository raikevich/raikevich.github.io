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

    if ($('.lang').length) {
        $('.lang').on('click', function() {
            $('.lang_mod').slideToggle(300);
        });
    }
    if ($('.search').length) {
        $('.search').on('click', function() {
            $('.search_mod').slideToggle(300);
        });
    }
    if ($('.profile__name').length) {
        $('.profile__name').on('click', function() {
            $('.profile_mod').slideToggle(300);
        });
    }

    if ($('.add_comm i').length) {
        $('.add_comm i').on('click', function() {
            $(this).prevAll('input').prop('checked',true);
            $(this).nextAll('input').prop('checked',false);
        });
    }
});