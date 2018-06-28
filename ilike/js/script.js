'use strict';

$(document).ready(function() {
    if($('.my-flipster').length) {
        $('.my-flipster').flipster({
            loop: true,
            scrollwheel: false,
            buttons: 'custom',
            buttonPrev: '<div class="flip_btn flip_btn__prev"></div>',
            buttonNext: '<div class="flip_btn flip_btn__next"></div>'
        });
    }
    if($('.sfera_slider').length) {
        $('.sfera_slider').lightSlider({
            item: 3,
            loop: true,
            slideMove: 1,
            pager: false,
            auto: true,
            pause: 3000,
            speed: 700,
            pauseOnHover: false,
            controls: true,
            prevHtml: '<div class="flip_btn flip_btn__prev"></div>',
            nextHtml: '<div class="flip_btn flip_btn__next"></div>',
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        item: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        item: 1,
                    }
                }
            ]
        });
    }
    if($('.case_slider').length) {
        $('.case_slider').lightSlider({
            item: 1,
            loop: true,
            slideMove: 1,
            pager: false,
            auto: true,
            pause: 8000,
            speed: 700,
            pauseOnHover: false,
            controls: true,
            prevHtml: '<div class="flip_btn flip_btn__prev flip_btn__black"></div>',
            nextHtml: '<div class="flip_btn flip_btn__next flip_btn__black"></div>'
        });
    }
    $('[href*="#"]').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
        e.preventDefault();
        $('.menu').removeClass('active');
    });
    $('.menu_btn').on('click', function(){
        $('.menu').toggleClass('active');
    });
    $(document).on('click',function (e){
        var menu = $('.menu');
        if (!menu.is(e.target) && menu.has(e.target).length === 0) {
            $('.menu').removeClass('active');
        }
    });

    var wp = window.innerWidth - document.documentElement.clientWidth;

    if ($('.js_modal').length) {
        $('.js_modal').on('click', function() {
            $('.js_modalw').addClass('modalw__active');
            $('body').addClass('o-hidden').css('margin-right', wp + 'px');
        });
        $('.js_modalw_close').on('click', function() {
            $('.js_modalw').removeClass('modalw__active');
            $('body').removeClass('o-hidden').css('margin-right','0px');
        });
        $('.js_modalw').on('click', function(e){
            if ($(this).has(e.target).length === 0) {
                $('.js_modalw').removeClass('modalw__active');
                $('body').removeClass('o-hidden').css('margin-right','0px');
            }
        });
    }

    if ($('.js_modal_2').length) {
        $('.js_modal_2').on('click', function() {
            $('.js_modalw_2').addClass('modalw__active');
            $('body').addClass('o-hidden').css('margin-right', wp + 'px');
        });
        $('.js_modalw_2_close').on('click', function() {
            $('.js_modalw_2').removeClass('modalw__active');
            $('body').removeClass('o-hidden').css('margin-right','0px');
        });
        $('.js_modalw_2').on('click', function(e){
            if ($(this).has(e.target).length === 0) {
                $('.js_modalw_2').removeClass('modalw__active');
                $('body').removeClass('o-hidden').css('margin-right','0px');
            }
        });
    }

    $('input.js_tel').mask('+7 (999) 999-99-99');
});