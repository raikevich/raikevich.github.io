'use strict';

$(document).ready(function () {

    $('[href*="#"]').on('click', function (e) {
        $('html,body').stop().animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
        e.preventDefault();
    });

    var wp = window.innerWidth - document.documentElement.clientWidth;

    $('.js_formModalClose').on('click', function () {
        $('.formModal').removeClass('formModal-active');
        $('body').removeClass('o-hidden').css('margin-right', '0px');
    });

    if ($('.js_callback').length) {
        $('.js_callback').on('click', function () {
            $('.js_formCallback').addClass('formModal-active');
            $('body').addClass('o-hidden').css('margin-right', wp + 'px');
        });
        $('.js_formCallback').on('click', function (e) {
            if ($(this).has(e.target).length === 0) {
                $('.js_formCallback').removeClass('formModal-active');
                $('body').removeClass('o-hidden').css('margin-right', '0px');
            }
        });
    }

    $('.js_form_button').on('click', function () {
        var form = $(this).parents('form');
        var t = form.serialize();
        var res = $('#form_result');
        $.ajax({
            type: "POST",
            url: '/mail.php',
            data: t,
            beforeSend: function () {
                res.html('');
            },
            error: function () {
                $('.js_formResult').addClass('formModal-active');
                $('body').addClass('o-hidden').css('margin-right', wp + 'px');
                res.text('Ошибка сервера. Попробуйте позже');
            },
            success: function (data) {
                res.html(data);
                $('.js_formResult').addClass('formModal__active');
                $('body').addClass('o-hidden').css('margin-right', wp + 'px');
            }
        });

    });

    if($('.doctor_slider').length > 0) {
        var El = $('.doctor_slider');
	    El.find('.doctor_slide').eq(0).addClass('doctor_slide-active');
	    function doc_slider(){
		    var act = El.find('.doctor_slide-active');
		    var all = El.find('.doctor_slide');
		    if (act[0] == all.eq(-1)[0]) {
			    act.removeClass('doctor_slide-active');
			    all.eq(0).addClass('doctor_slide-active');
		    } else {
			    act.removeClass('doctor_slide-active');
			    act.next().addClass('doctor_slide-active');
		    }
	    }
	    window.doctor = setInterval(doc_slider, 5000);
	    El.find('.doctor_arrow-next').on('click',function(){
		    clearInterval(window.doctor);
		    var act = El.find('.doctor_slide-active');
		    var all = El.find('.doctor_slide');
		    if (act[0] == all.eq(-1)[0]) {
			    act.removeClass('doctor_slide-active');
			    all.eq(0).addClass('doctor_slide-active');
		    } else {
			    act.removeClass('doctor_slide-active');
			    act.next().addClass('doctor_slide-active');
		    }
		    window.doctor = setInterval(doc_slider, 5000);
	    });
	    El.find('.doctor_arrow-prev').on('click',function(){
		    clearInterval(window.doctor);
		    var act = El.find('.doctor_slide-active');
		    var all = El.find('.doctor_slide');
		    if (act[0] == all.eq(0)[0]) {
			    act.removeClass('doctor_slide-active');
			    all.eq(-1).addClass('doctor_slide-active');
		    } else {
			    act.removeClass('doctor_slide-active');
			    act.prev().addClass('doctor_slide-active');
		    }
		    window.doctor = setInterval(doc_slider, 5000);
	    });
    }

    if($('.mainSlider').length > 0) {
        var E = $('.mainSlider');
        var B = $('.mainSlider_numbers');
        var it = 'mainSlider_item-active';
        var n = 'mainSlider_number-active';
        E.find('.mainSlider_item').eq(0).addClass(it);
        B.find('.mainSlider_number').eq(0).addClass(n);
	    function mainSlide(){
		    var act = E.find('.mainSlider_item-active');
            var all = E.find('.mainSlider_item');
		    var actB = B.find('.mainSlider_number-active');
            var allB = B.find('.mainSlider_number');            
		    if (act[0] == all.eq(-1)[0]) {
			    act.removeClass(it);
                all.eq(0).addClass(it);
                actB.removeClass(n);
			    allB.eq(0).addClass(n);
		    } else {
			    act.removeClass(it);
                act.next().addClass(it);
                actB.removeClass(n);
			    actB.next().addClass(n);
		    }
	    }
	    window.mainSlide = setInterval(mainSlide, 5000);
	    B.find('.mainSlider_number').on('click',function(){
            clearInterval(window.mainSlide);
            var I = $(this).index();
            B.find('.mainSlider_number-active').removeClass(n);
            $(this).addClass(n);
            E.find('.mainSlider_item-active').removeClass(it);
            E.find('.mainSlider_item').eq(I).addClass(it);
		    window.mainSlide = setInterval(mainSlide, 5000);
	    });
    }

    ymaps.ready(function () {
        var w = window.innerWidth;
        var cent = [55.809735, 49.070440];
        var zm = 12;
        if (w < 992) {
            cent = [55.809527, 49.105];
            zm = 11;
        }

        var myMap = new ymaps.Map('map', {
                center: cent,
                zoom: zm
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark([55.786759, 49.112037], {
                hintContent: 'ул. Г. Камала, 4а'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/mark.png',
                // Размеры метки.
                iconImageSize: [40, 52],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-20, -52]
            }),

            myPlacemark2 = new ymaps.Placemark([55.820349, 49.101482], {
                hintContent: 'ул. Чистопольская, 5а'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/mark.png',
                // Размеры метки.
                iconImageSize: [40, 52],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-20, -52]
            });

        myMap.geoObjects.add(myPlacemark).add(myPlacemark2);
    });
});