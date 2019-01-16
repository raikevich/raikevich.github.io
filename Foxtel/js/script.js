var $ = jQuery.noConflict();

var number=0;

$(document).ready(function() {
    if($('.on_help').length){
        $('.on_help').on('click',function(){
            $('.help').removeClass('active');
            $('.steps').addClass('active');
        });
    }
    if($('.first_close').length){
        $('.first_close').on('click',function(){
            $('.first').addClass('deactive');
            setTimeout(cloud_graph,500);
        });
    }
});

$(window).on('load',function() {
    if($('.help_image').length) {
        $('.help_anime').addClass('active');
    }
    if($('.cloud_graph_wrap').length) {
        cloud_graph();
        $(window).on('scroll',function(){
            cloud_graph();
        });
    }

});

function cloud_graph() {
    if(number==0) {
        var start = $('.cloud_graph').offset().top;
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled + $(window).height() > start) {
            var summ = 0;

            $('[data-value]').each(function (i, e) {
                summ += Number($(e).attr('data-value'));
            });
            $('[data-value]').each(function (i, e) {
                $(e).css('width', Number($(e).attr('data-value')) * 100 / summ + '%');
            });
            setTimeout(function () {
                $('[data-sub]').each(function (i, e) {
                    var N = Number($(e).attr('data-sub'));
                    var c = cm = h = l = lt = wh = 0;
                    if (N % 2 == 1) {
                        h = (N + 1) / 2;
                        c = 5 * h + 5;
                        cm = 30 - c;
                        l = $(e).position().left + $(e).outerWidth() / 2;
                        lt = $('[data-value]').eq(N - 1).position().left + $('[data-value]').eq(N - 1).outerWidth() / 2;
                        wh = l - lt;
                        $('.linesub_start_' + N).css({'top': '100%', 'height': cm + 'px', 'left': lt + 'px'});
                        $('.linesub_horiz_' + N).css({
                            'top': 'calc(100% + ' + cm + 'px)',
                            'left': lt + 'px',
                            'width': wh + 'px'
                        });
                        $('.linesub_end_' + N).css({
                            'top': 'calc(100% + ' + cm + 'px)',
                            'left': l + 'px',
                            'height': c + 'px'
                        });
                    } else {
                        h = N / 2;
                        c = 5 * h + 5;
                        cm = 30 - c;
                        l = $(e).position().left + $(e).outerWidth() / 2;
                        lt = $('[data-value]').eq(N - 1).position().left + $('[data-value]').eq(N - 1).outerWidth() / 2;
                        wh = l - lt;
                        $('.linesub_start_' + N).css({'bottom': '100%', 'height': cm + 'px', 'left': lt + 'px'});
                        $('.linesub_horiz_' + N).css({
                            'bottom': 'calc(100% + ' + cm + 'px)',
                            'left': lt + 'px',
                            'width': wh + 'px'
                        });
                        $('.linesub_end_' + N).css({
                            'bottom': 'calc(100% + ' + cm + 'px)',
                            'left': l + 'px',
                            'height': c + 'px'
                        });
                    }
                });
            }, 1700);
            number = 1;
        }
    }
}