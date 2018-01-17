'use strict';

$(document).ready(function() {
	if ($('.menu__search i').length) {
	    $('.menu__search i').on('click',function(){
		    $('.search_form form').addClass('active');
		    $('.header__bottom-center').addClass('not-active');
	    });
    }
    if ($('.search_form form i').length) {
	    $('.search_form form i').on('click',function(){
		    $('.search_form form').removeClass('active');
		    $('.header__bottom-center').removeClass('not-active');
	    });
	}
    if ($('.carousel').length) {
	    $('.carousel').owlCarousel({
	        loop: true,
	        margin: 10,
	        nav: true,
	        navText: ['', ''],
	        responsive: {
	            0: {
	                items: 1
	            },
	            450: {
		            items: 2
	            },
	            768: {
	                items: 3
	            },
	            992: {
	                items: 4
	            },
	            1200: {
	                items: 5
	            }
	        }
	    });
	}
    if ($('.prod__tabs>div').length) {
	    $('.prod__tabs>div').on('click', function() {
	        if (!($(this).hasClass("active"))) {
	            $(this).siblings().removeClass('active');
	            var Cl = $(this).attr("class");
	            $(this).addClass('active');
	            $(this).parent().siblings('.prod__row').children().removeClass('active');
	            $(this).parent().siblings('.prod__row').children('.' + Cl + '-row').addClass('active');
	        }
	    });
	}
    if ($('.expand').length) {
	    $('.expand+ul').slideUp(0);
	    $('.expand').on('click', function() {
		    $(this).next('ul').slideToggle(300);
	    });
	}
    if ($('.header__bottom').length) {    
		var fmenu = $('.header__bottom');
		var menuwrap = $('.header__strate');
		var top = fmenu.offset().top;
		var menuh = fmenu.outerHeight();
		if ($('body').scrollTop() >= top) {
		      fmenu.addClass('active');
		      menuwrap.height(menuh);
		  }
		$(window).scroll(function(){
		  var pos = $('body').scrollTop();
		  if (pos >= top) {
		    fmenu.addClass('active');
		    menuwrap.height(menuh);
		  }
		  else {
		    fmenu.removeClass('active');
		    menuwrap.height(0);
		  }
		});
	}
    if ($('.aside_primary__item').length) {	
		$('.aside_primary__item').not('.all').on('click', function() {
			var parent = $(this).parent();
			if (parent.hasClass("active")) {
				parent.removeClass('active');
				parent.siblings('.aside_primary').removeClass('not-active');
				parent.siblings('.menu-mobile_links').removeClass('not-active');
				parent.siblings('.menu-mobile__bottom').removeClass('not-active');
			} else {
				parent.addClass('active');
				parent.siblings('.aside_primary').addClass('not-active');
				parent.siblings('.menu-mobile_links').addClass('not-active');
				parent.siblings('.menu-mobile__bottom').addClass('not-active');
			}
		});
	}
    if ($('.aside_secondary__item').length) {	
		$('.aside_secondary__item').not('.all').on('click', function() {
			var parent = $(this).parent();
			if (parent.hasClass("active")) {
				parent.removeClass('active');
				parent.siblings('.aside_secondary').removeClass('not-active');
				parent.siblings('.aside_primary__item').removeClass('not-active');
			} else {
				parent.addClass('active');
				parent.siblings('.aside_secondary').addClass('not-active');
				parent.siblings('.aside_primary__item').addClass('not-active');
			}
		});
	}
    if ($('.aside_third__item').length) {	
		$('.aside_third__item').not('.all').on('click', function() {
			var parent = $(this).parent();
			if (parent.hasClass("active")) {
				location.href = $(this).attr('data-url');
			} else {
				parent.siblings('.aside_third').removeClass('active');
				parent.siblings('.aside_third').children('.aside_fourth').slideUp(300);
				parent.addClass('active');
				$(this).next('.aside_fourth').slideDown(300);
			}
		});
	}
		
	var wp = window.innerWidth - document.documentElement.clientWidth;
	
    if ($('.mobile__trigger').length) {	
		$('.mobile__trigger').on('click', function() {
			$('.menu-mobile').addClass('active');
			$('body').addClass('o-hidden').css('margin-right', wp + 'px');
		});
		$('.menu-mobile__close').on('click', function() {
			$('.menu-mobile').removeClass('active');
			$('body').removeClass('o-hidden').css('margin-right','0px');
		});
	}
    if ($('.location').length) {	
		$('.location-trigger, .footer-mobile__region').on('click', function() {
			$('.choice_region').addClass('active');
			$('body').addClass('o-hidden').css('margin-right', wp + 'px');
		});
	}
    if ($('.menu-mobile__region').length) {
		$('.menu-mobile__region').on('click', function() {
			$('.choice_region').addClass('active');
			$('body').addClass('o-hidden').css('margin-right', wp + 'px');
			$('.menu-mobile').removeClass('active');
		});
	}
    if ($('.location-trigger__close').length) {
		$('.location-trigger__close').on('click', function() {
			$('.choice_region').removeClass('active');
			$('body').removeClass('o-hidden').css('margin-right','0px');
		});
	}
    if ($('.enter_link').length) {
		$('.enter_link').on('click', function() {
			$('.enter_form_wrap').addClass('active');
			$('body').addClass('o-hidden').css('margin-right', wp + 'px');
			$('.menu-mobile').removeClass('active');
		});
		$('.enter_form .close_form').on('click', function() {
			$('.enter_form_wrap').removeClass('active');
			$('body').removeClass('o-hidden').css('margin-right','0px');
		});
		$('.enter_form_wrap').on('click', function(e){
			if ($(this).has(e.target).length === 0) {
				$('.enter_form_wrap').removeClass('active');
				$('body').removeClass('o-hidden').css('margin-right','0px');
			}
		});
	}
    if ($('.buy_one_click').length) {
		$('.buy_one_click').on('click', function() {
			$('.buy_one_wrap').addClass('active');
			$('body').addClass('o-hidden').css('margin-right', wp + 'px');
			$('.menu-mobile').removeClass('active');
		});
		$('.buy_one .close_form').on('click', function() {
			$('.buy_one_wrap').removeClass('active');
			$('body').removeClass('o-hidden').css('margin-right','0px');
		});
		$('.buy_one_wrap').on('click', function(e){
			if ($(this).has(e.target).length === 0) {
				$('.buy_one_wrap').removeClass('active');
				$('body').removeClass('o-hidden').css('margin-right','0px');
			}
		});
	}
    if ($('.shop__tabs>div').length) {	
		$('.shop__tabs>div').on('click', function() {
	        if (!($(this).hasClass("active"))) {
	            $(this).siblings().removeClass('active');
	            var Cl = $(this).attr("class");
	            $(this).addClass('active');
	            $(this).parent().siblings('.shop__row').children().removeClass('active');
	            $(this).parent().siblings('.shop__row').children('.' + Cl + '-row').addClass('active');
	        }
	    });
	    
    if($("#slider").length){
	    $("#slider").slider({
		  value:2000,
		  min: 0,
		  max: 2000,
		  step: 10,
		  slide: function( event, ui ) {
		    $( "#amount" ).val(ui.value + " руб.");
		  }
		});
		$( "#amount" ).val($( "#slider" ).slider( "value" ) + " руб." );
	}
	}
    if ($('.filter__title').length) {	
		$('.filter__title').on('click', function() {
			$(this).next('ul').slideToggle(300);
		});
	}
    if ($('.switch_to_reg').length) {	
		$('.switch_to_reg').on('click', function() {
			$('.form_for_enter').removeClass('active');
			$('.form_for_reg').addClass('active');
		});
	}
    if ($('.switch_to_enter').length) {
		$('.switch_to_enter').on('click', function() {
			$('.form_for_enter').addClass('active');
			$('.form_for_reg').removeClass('active');
		});
	}
    if ($('.sort p').length) {
		$('.sort p').on('click', function() {
			$(this).next('ul').slideToggle(200);
		});
	}
    if ($('#gallery').length) {
		$('#gallery').lightSlider({
	        gallery: true,
	        item: 1,
	        vertical: false,
	        loop: true,
	        verticalHeight: 476,
	        vThumbWidth: 80,
	        thumbItem: 5,
	        thumbMargin: 10,
	        slideMargin: 0,
	        responsive: [{
	            breakpoint: 400,
	            settings: {
	                vThumbWidth: 60,
	                verticalHeight: 400,
	            }
	        }, ]
	    });
	}
    if ($('.fancybox').length) {
	    $('.fancybox').fancybox({
	        loop: true
	    });
	}
    if ($('.size_select>div').length) {
	    $('.size_select>div').on('click', function() {
	        if (!($(this).hasClass("active"))) {
	            $(this).siblings().removeClass('active');
	            var Cl = $(this).attr("class");
	            $(this).addClass('active');
	            $(this).parent().siblings('.tabs-row').removeClass('active');
	            $(this).parent().siblings('.' + Cl + '-row').addClass('active');
	        }
	    });
	}
    if ($('.section_order__sizes .title').length) {
	    $('.section_order__sizes .title').on('click', function() {
		    $(this).next('.sizes__radio').slideToggle(300);
	    });
	}
    if ($('.radio__label').length) {
	    $('.radio__label').on('click', function() {
		    $('.section_order__sizes .size_type').text($(this).parents('table').attr('data-size-type'));
		    $('.section_order__sizes .size_number').text($(this).text());
	    });
	}
    if ($('.slide_down .title').length) {
	    $('.slide_down .title').on('click', function() {
		    $(this).children('i').toggleClass('fa-caret-down fa-caret-up');
		    $(this).next('.content').slideToggle(300);
	    });
	}
	if ($('.order__sum__button').length) {
		$('.order__sum__button').each(function(indx,e) {
			var num = $(e).siblings('.order__price').find('.order_number');
			if (num.text() != '1') {
				num.parent('.order_proizv').removeClass('v-hid');
			}
			$(e).children('.order__minus').on('click', function() {
				if (num.text() != '1') {
					var price_one = Number($(e).siblings('.order__price').find('.price__one').text());
					var total = Number($('#order__grand_total').text());
					var col = Number(num.text());
					total = total - (price_one*col); 
					col --;
					total = total + (price_one*col);
					$('#order__grand_total').text(total);
					num.text(col);
					var summ = col * price_one;
					$(e).siblings('.order__price').find('.order__sum_one').text(summ);
					if (num.text() != '1') num.parent('.order_proizv').removeClass('v-hid');
						else num.parent('.order_proizv').addClass('v-hid');
				}
			});
			$(e).children('.order__plus').on('click', function() {
				var price_one = Number($(e).siblings('.order__price').find('.price__one').text());
				var total = Number($('#order__grand_total').text());
				var col = Number(num.text());
				total = total - (price_one*col); 
				col ++;
				total = total + (price_one*col);
				$('#order__grand_total').text(total);
				num.text(col);
				var summ = col * price_one;
				$(e).siblings('.order__price').find('.order__sum_one').text(summ);
				if (num.text() != '1') num.parent('.order_proizv').removeClass('v-hid');
					else num.parent('.order_proizv').addClass('v-hid');
				
				
			});
		});
	}
});

window.onload = function() {
    document.getElementById("pass1").onchange = validatePassword;
    document.getElementById("pass2").onchange = validatePassword;
}

function validatePassword() {
    var pass2 = document.getElementById("pass2").value;
    var pass1 = document.getElementById("pass1").value;
    if (pass1 != pass2)
        document.getElementById("pass2").setCustomValidity("Пароли не совпадают");
    else
        document.getElementById("pass2").setCustomValidity('');
}

function initMap() {
    var uluru = {
        lat: 53.821314,
        lng: 49.093473
    };
    var map = new google.maps.Map(document.getElementById('shop__map'), {
        zoom: 5,
        center: uluru,
    });
    var marker = new google.maps.Marker({
        position: {lat: 55.821314, lng: 49.093473},
        map: map 
    });
    var marker2 = new google.maps.Marker({
        position: {lat: 55.731716, lng: 37.574230},
        map: map 
    });
    var marker3 = new google.maps.Marker({
        position: {lat: 51.689408, lng: 39.185658},
        map: map 
    });
    var marker4 = new google.maps.Marker({
        position: {lat: 55.156396, lng: 61.389319},
        map: map 
    });
}


















