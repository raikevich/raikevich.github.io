'use strict';

$(document).ready(function() {

    var is_touch_device = 'ontouchstart' in document.documentElement;
    if(is_touch_device) $('body').addClass('sensor');

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
            controls:true,
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

    if ($('.btn_slider__prev').length) {
        $('.btn_slider__prev').on('click', function () {
            $('.lSPrev').trigger('click');
        });
    }
    if ($('.btn_slider__next').length) {
        $('.btn_slider__next').on('click', function () {
            $('.lSNext').trigger('click');
        });
    }

    if ($('#file_rezume').length) {
        $('#file_rezume').on('change', function() {
            $('label[for="file_rezume"] svg').css('fill','red');
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

    var H_pro=0;
    var h_pro=0;

    if ($('.pro_content').length) {
        $('.pro_content>div').each(function (i,e) {
            h_pro = $(e).height();
            if (h_pro>H_pro) H_pro=h_pro;
        });

        $('.pro_content').height(H_pro);

        $('[id^="pro_"]').on('mouseenter',function () {
            $('.pro_links>p').removeClass('active');
            $('.pro_content>div').removeClass('active');
            $(this).addClass('active');
            var t_id = $(this).attr("id");
            $('#'+t_id+'_div').addClass('active');
        });
    }

    if ($('.sfera_d').length) {
        $('.add_sfera').on('click', function () {
            $('.sfera_d').append('<div class="dop_sfera"><input placeholder="Укажите сферу деятельности"><div class="remove_sfera"></div></div>');
            refresh_sfera();
        });
        refresh_sfera();
    }
    $.datepicker.setDefaults(
        {
            closeText: 'Закрыть',
            prevText: '',
            currentText: 'Сегодня',
            monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
                'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
            monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
                'Июл','Авг','Сен','Окт','Ноя','Дек'],
            dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
            dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
            dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
            weekHeader: 'Не',
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        });
    if ($('#date').length) {
        $('#date').datepicker();
    }
});
function refresh_sfera() {
    $('.remove_sfera').on('click', function () {
        $(this).parent().remove();
    });
}