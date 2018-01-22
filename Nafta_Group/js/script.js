'use strict';

$(document).ready(function() {
    if( Modernizr.touchevents ){
        $('body').addClass('sensor');
    }
    if ($('[data-fancybox]').length) {
        $('[data-fancybox]').fancybox();
    }
    if ($('.main_slider').length) {
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

    $('[href*="#"]').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
        e.preventDefault();
    });

    $(window).on("load resize scroll", function(){
        if (window.innerWidth>767) {
            if ($(window).scrollTop() > window.innerHeight) {
                $('.click_top').addClass('active');
            } else {
                $('.click_top').removeClass('active');
            }
        }
        else {
            $('.click_top').removeClass('active');
        }
    });

});