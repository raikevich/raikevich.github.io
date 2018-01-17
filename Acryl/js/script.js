'use strict';

$(document).ready(function() {
	 var wp = window.innerWidth - document.documentElement.clientWidth;

    if($('.nav__menu').length > 0) {
		$('.menu_click').on('click',function(){
			$('.nav__menu').addClass('active');
			$('body').addClass('modal-open').css('margin-right', wp + 'px');
		});
		$('.nav__menu i.fa-close').on('click',function(){
			$('.nav__menu').removeClass('active');
			$('body').removeClass('modal-open').css('margin-right','0px');
		});
	}
});