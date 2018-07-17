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

    if ($('.blag_slider').length) {
        $('.blag_slider').lightSlider({
            item: 3,
            loop: true,
            slideMove: 1,
            pager: false,
            auto: true,
            pause: 3000,
            speed: 700,
            pauseOnHover: false,
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
            if ($(window).scrollTop() > window.innerHeight/2) {
                $('.click_top').addClass('active');
            } else {
                $('.click_top').removeClass('active');
            }
        }
        else {
            $('.click_top').removeClass('active');
        }
    });

    $('#send_mail_btn').on('click',function () {
        var t = $('#send_mail').serialize();
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: t,
            beforeSend: function() {
                $('#send_mail_result').html('');
            },
            error: function(){
                $('#send_mail_result').text('Ошибка сервера. Попробуйте позже');
            },
            success: function(data) {
                $('#send_mail_result').html(data);
            }
        });
    });

    if ($('.ham_list').length) {
        $('.ham_list').on('click',function () {
            $('.service_list').addClass('active');
        });
    }

    if ($('.ham_grid').length) {
        $('.ham_grid').on('click',function () {
            $('.service_list').removeClass('active');
        });
    }

    if ($('.about_tabs').length) {
        function aboutBottom() {
            //var tabA = $('.tabs_yearItem.active');
            //$('.tabs_bottom').css({'left':tabA.offset().left, 'top':tabA.offset().top+tabA.outerHeight(), 'width':tabA.outerWidth()});
            var tabC = $('.tabs_contentItem.active');
            $('.tabs_content').css({'height':tabC.outerHeight()});
        }
        aboutBottom();
        $('.tabs_yearItem').on('click',function () {
            $('.tabs_yearItem').removeClass('active');
            $(this).addClass('active');
            $('.tabs_contentItem').removeClass('active');
            $('.content_'+$(this).attr('id')).addClass('active');
            aboutBottom();
        });
    }


});