'use strict';

$(document).ready(function() {
    if ($('.reviews_list').length) {
        $('.reviews_list').lightSlider({
            item: 2,
            loop: true,
            slideMove: 1,
            pager: false,
            auto: true,
            pause: 3000,
            speed: 700,
            pauseOnHover: false,
            controls:true,
            responsive: [
                {
                    breakpoint: 575,
                    settings: {
                        item: 1,
                    }
                }
            ]
        });
    }

    $('[href*="#"]').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
        e.preventDefault();
    });

    var wp = window.innerWidth - document.documentElement.clientWidth;

    if ($('.form_openModal').length) {
        $('.form_openModal').on('click', function() {
            $('.js_formModal').addClass('formModal__active');
            $('body').addClass('o-hidden').css('margin-right', wp + 'px');
        });
        $('.js_formModalClose').on('click', function() {
            $('.js_formModal').removeClass('formModal__active');
            $('body').removeClass('o-hidden').css('margin-right','0px');
        });
        $('.js_formModal').on('click', function(e){
            if ($(this).has(e.target).length === 0) {
                $('.js_formModal').removeClass('formModal__active');
                $('body').removeClass('o-hidden').css('margin-right','0px');
            }
        });
    }
    
    $('.js_form_button').on('click', function () {
        var form = $(this).parents('form');
        var t = form.serialize();
        var res = $('#form_result');
        t = t+'&form='+form.attr('id');

        $.ajax({
            type: "POST",
            url: '/mail.php',
            data: t,
            beforeSend: function () {
                res.html('');
            },
            error: function () {
                res.text('Ошибка сервера. Попробуйте позже');
            },
            success: function (data) {
	            res.html(data);
	            $('.js_formResult').addClass('formModal__active');
		        $('body').addClass('o-hidden').css('margin-right', wp + 'px');
            }
        });

    });
    
    if ($('#form_result').length) {
        $('.js_formResultClose').on('click', function() {
            $('.js_formResult').removeClass('formModal__active');
            $('body').removeClass('o-hidden').css('margin-right','0px');
        });
        $('.js_formResult').on('click', function(e){
            if ($(this).has(e.target).length === 0) {
                $('.js_formResult').removeClass('formModal__active');
                $('body').removeClass('o-hidden').css('margin-right','0px');
            }
        });
    }
});