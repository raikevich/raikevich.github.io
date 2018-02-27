'use strict';

$(document).ready(function() {

    var is_touch_device = 'ontouchstart' in document.documentElement;
    if(is_touch_device) $('body').addClass('sensor');

    if ($('[data-fancybox]').length) {
        $('[data-fancybox]').fancybox();
    }
    /*if ($('.main_slider').length) {
        $('.main_slider').lightSlider({
            item: 1,
            loop: true,
            pager: true,
            auto: true,
            pause: 3000,
            speed: 700,
            pauseOnHover: false
        });
    }

    if ($('.partners_slider').length) {
        $('.partners_slider').lightSlider({
            item: 6,
            loop: true,
            slideMove: 1,
            pager: false,
            auto: true,
            pause: 3000,
            speed: 700,
            pauseOnHover: false,
            controls:false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        item: 4,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        item: 3,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        item: 2,
                    }
                }
            ]
        });
    }*/

    var wp = window.innerWidth - document.documentElement.clientWidth;

    if ($('.nav_ham').length) {
        $('.nav_ham').on('click', function() {
            $('.nav_ham').toggleClass('active');
            $('body').toggleClass('o-hidden');
        });
        $('.nav_ham + .nav_header a').on('click', function() {
            $('.nav_ham').toggleClass('active');
            $('body').toggleClass('o-hidden');
        });
    }

    if ($('.feedback').length) {
        $('.feedback').on('click', function(){
            $('.feedback_modal').addClass('active');
            $('body').addClass('o-hidden').css('margin-right', wp + 'px');
        });
        $('.feedback_modal .feedback_close').on('click', function() {
            $('.feedback_modal').removeClass('active');
            $('body').removeClass('o-hidden').css('margin-right','0px');
        });
        $('.feedback_modal').on('click', function(e){
            if ($(this).has(e.target).length === 0) {
                $('.feedback_modal').removeClass('active');
                $('body').removeClass('o-hidden').css('margin-right','0px');
            }
        });
    }

    $('[href*="#"]').on('click', function(e){
        var headerH = $('header').height();
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top-headerH }, 1000);
        e.preventDefault();
    });

});