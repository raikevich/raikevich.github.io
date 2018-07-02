'use strict';

$(document).ready(function() {
    if($('.my-flipster').length) {
        $('.my-flipster').flipster({
            loop: true,
            scrollwheel: false,
            start: 2,
            buttons: 'custom',
            buttonPrev: '<div class="flip_btn flip_btn__prev"></div>',
            buttonNext: '<div class="flip_btn flip_btn__next"></div>'
        });
    }
    if($('.sfera_slider').length) {
        $('.sfera_slider').lightSlider({
            item: 3,
            loop: false,
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

    if ($('.calc').length) {
        $('.calc_question').height($('.calc_item__active').height());
        $('.calc_question input[name="sfera"]').on('click',function () {
            $('.calc_select').prop('disabled',true);
            $(this).parent().next().prop('disabled',false);
        });
        $('.service_other').on('click',function(){
            $('.calc_item__interview').removeClass('calc_item__next');
            $('.calc_item__other').addClass('calc_item__next');
            $('.calc_number i').text('14');
            $('.calc_status>div').css('width', 2*100 / 14 + '%');
        });
        $('.service_interview').on('click',function(){
            $('.calc_item__other').removeClass('calc_item__next');
            $('.calc_item__interview').addClass('calc_item__next');
            $('.calc_number i').text('10');
            $('.calc_status>div').css('width', 2*100 / 10 + '%');
        });
        $('.js_calc_next').on('click',calcNext);
        $('.js_calc_prev').on('click',calcPrev);
    }

    function calcNext() {
        var sum = parseInt($('.calc_number i').text());
        var number = parseInt($('.calc_number span').text()) + 1;
        var er=0;
        if ($('.calc_item__active input').val()=="") {
            $('.calc_item__active input').attr('placeholder','Заполните поле');
            er = 1;
        }
        if ($('.calc_item__active input').attr('name')=="email" && ($('.calc_item__active input').val().indexOf("@")==-1 || $('.calc_item__active input').val().indexOf(".")==-1)) {
            er=1;
            $('.calc_item__active input').val('');
            $('.calc_item__active input').attr('placeholder','Введите e-mail в правильном формате');
        }
        if ((number<=sum) && er==0) {
            $('.calc_number span').text(number);
            $('.calc_status>div').css('width', number*100 / sum + '%');
            $('.calc_item__active').toggleClass('calc_item__active calc_item__prev').nextAll('.calc_item__next').first().toggleClass('calc_item__active calc_item__next');
            $('.calc_question').height($('.calc_item__active').height());
        }
    }
    function calcPrev() {
        var sum = parseInt($('.calc_number i').text());
        var number = parseInt($('.calc_number span').text()) - 1;
        if (number>0) {
            $('.calc_number span').text(number);
            $('.calc_status>div').css('width', number*100 / sum + '%');
            $('.calc_item__active').toggleClass('calc_item__active calc_item__next').prevAll('.calc_item__prev').first().toggleClass('calc_item__active calc_item__prev');
            $('.calc_question').height($('.calc_item__active').height());
        }
    }
});