var $ = jQuery.noConflict();

var number = 0;

$(document).ready(function () {
    if ($('.on_help').length) {
        $('.on_help').on('click', function () {
            $('.help').removeClass('active');
            $('.steps').addClass('active');
        });
    }
    if ($('.first_close').length) {
        $('.first_close').on('click', function () {
            $('.first').addClass('deactive');
            setTimeout(cloud_graph, 500);
        });
    }
    if ($('.numbers_show_phone').length) {
        $('.numbers_show_phone span').on('click', function () {
            $(this).parent().prev().slideToggle(300);
            if ($(this).text() == 'Показать все')
                $(this).text('Скрыть');
            else $(this).text('Показать все');
        });
    }
    if ($('.show_table_row').length) {
        $('.show_table_row').on('click', function () {
            $(this).parent().prev().find('.table_row_hide').slideToggle(0);
            if ($(this).text() == 'Показать все города')
                $(this).text('Скрыть города');
            else $(this).text('Показать все города');
        });
    }
    if ($('.manage_on').length) {
        $('.manage_on').on('click', function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                if ($(this).find('.manage_save').length) {
                    $(this).find('.manage_save').remove();
                } else {
                    $(this).html('<div class="manage_save">Что бы услуга была отключена, нажмите кнопку <span>«Сохранить»</span></div>');
                }
            } else {
                $(this).addClass('active');
                if ($(this).find('.manage_save').length) {
                    $(this).find('.manage_save').remove();
                } else {
                    $(this).html('<div class="manage_save">Что бы услуга начала действовать, нажмите кнопку <span>«Сохранить»</span></div>');
                }
            }
        });
    }
    if ($('.manage_trigger').length) {
        $('.manage_trigger_on').on('click', function () {
            $('.manage_trigger').children().removeClass('active');
            $(this).addClass('active');
            if ($('.manage_trigger').length) {
                $('.manage_open').addClass('active');
                $('.manage_table .manage_desc').show();
            }
        });
        $('.manage_trigger_off').on('click', function () {
            $('.manage_trigger').children().removeClass('active');
            $(this).addClass('active');
            if ($('.manage_trigger').length) {
                $('.manage_open').removeClass('active');
                $('.manage_table .manage_desc').hide();
            }
        });
    }
    if ($('.manage_open').length) {
        $('.manage_open').on('click', function () {
            $(this).toggleClass('active');
            $(this).parent().parent().next('.manage_desc').toggle();
        });
    }

    if ($('#slider_memory').length) {
        var d = $('#slider_memory');
        var d_min = Number(d.attr('data-min'));
        var d_max = Number(d.attr('data-max'));
        var d_value = Number(d.attr('data-value'));
        $("#slider_memory").slider({
            range: "min",
            value: d_value,
            min: d_min,
            max: d_max,
            slide: function (event, ui) {
                $(".ui-slider-horizontal .ui-slider-handle").text(ui.value + ' ГБ');
                //$( "#slider_amount" ).css('left',$('.ui-slider-handle').css('left'));
            }
        });
        $(".ui-slider-horizontal .ui-slider-handle").text($("#slider_memory").slider("value") + ' ГБ');

        $('#slider_memory').on('mousewheel', function(e) {
            e.preventDefault();
            var con = $("#slider_memory").slider("values",0);
            if(e.originalEvent.wheelDelta<0 && con<d_max){
                $("#slider_memory").slider("value",con+1);
                $(".ui-slider-horizontal .ui-slider-handle").text(con+1 + ' ГБ');
            }
            if(e.originalEvent.wheelDelta>0 && con>d_min){
                $("#slider_memory").slider("value",con-1);
                $(".ui-slider-horizontal .ui-slider-handle").text(con-1 + ' ГБ');
            }
        });
    }

    if ($('.usergroup_table').length) {
        $('.remove_from_group').on('click', function () {
            var t = $(this).parents('tr');
            t.addClass('remove');
            setTimeout(function () {
                t.remove();
            }, 300);
        });

        $('.usergroup_drag').sortable({
            handle: ".drag_table"
        });
        $('.usergroup_show_table').on('click', function () {
            $(this).toggleClass('active').parents('.usergroup_item').next('.usergroup_hide').slideToggle();
        });
    }

    if ($('.modal_help').length) {
        $('.help_icon').on('click', function () {
            var par = $(this).parent();
            $('.modal_help').not(par).removeClass('active');
            par.toggleClass('active');
        });
        $('.modal_help').on('click', function (e) {
            e.preventDefault();
        });
    }

    if ($('.input_set').length) {
        $('.input_param').on('click', function () {
            $(this).siblings('.input_set_wrap').find('input').val($(this).attr('data-param'));
        });
    }

    if ($('.modal_menu').length) {
        $('.modal_menu li').on('click', function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $(this).parents('.modal_wrap').find('.modal_tab').removeClass('active');
            $(this).parents('.modal_wrap').find('.modal_tab').eq($(this).index()).addClass('active');
        });
    }

    var wp = window.innerWidth - document.documentElement.clientWidth;

    if ($('.modal_analyt_table').length) {
        $('.btn_analyt_table').on('click', function () {
            $('.modal_analyt_table').addClass('active');
            $('body').addClass('ohidden').css('margin-right', '0px');
        });
    }

    if ($('.modal_add_group').length) {
        $('.button_add_group').on('click', function () {
            $('.modal_add_group').addClass('active');
            $('body').addClass('ohidden').css('margin-right', '0px');
        });
    }

    if ($('.modal_activate').length) {
        $('.button_activate').on('click', function () {
            $('.modal_activate').addClass('active');
            $('body').addClass('ohidden').css('margin-right', '0px');
        });
    }

    if ($('.modal_close').length) {
        $('.modal_close').on('click', function () {
            $(this).parents('.modal').removeClass('active');
            $('body').removeClass('ohidden').css('margin-right', '0px');
        });
    }

    if ($('.modal_cancel').length) {
        $('.modal_cancel').on('click', function () {
            $(this).parents('.modal').removeClass('active');
            $('body').removeClass('ohidden').css('margin-right', '0px');
        });
    }

    if ($('.modal').length) {
        $('.modal').on('click', function (e) {
            if ($(this).has(e.target).length === 0) {
                $('.modal').removeClass('active');
                $('body').removeClass('ohidden').css('margin-right', '0px');
            }
        });
    }

    if ($('.log_datepicker').length) {
        $('.log_date').change(function () {
            var d_from;
            var d_to;
            if ($(this).val() == 'Текущий день') {
                d_from = Date.today().toString('dd.MM.yyyy');
                d_to = Date.today().toString('dd.MM.yyyy');
            }
            if ($(this).val() == 'Текущая неделя') {
                d_from = Date.today().last().monday().toString('dd.MM.yyyy');
                d_to = Date.today().next().sunday().toString('dd.MM.yyyy');
            }
            if ($(this).val() == 'Текущий месяц') {
                d_from = Date.today().moveToFirstDayOfMonth().toString('dd.MM.yyyy');
                d_to = Date.today().moveToLastDayOfMonth().toString('dd.MM.yyyy');
            }
            if ($(this).val() == 'Текущий год') {
                d_from = '01.01.' + Date.today().toString('yyyy');
                d_to = '31.12.' + Date.today().toString('yyyy');
            }
            $(this).parents('.block_date').find("[id^='datepicker_from']").val(d_from);
            $(this).parents('.block_date').find("[id^='datepicker_to']").val(d_to);
        });

        $('.radio_switch').on('click',function(){
            if ($(this).hasClass('radio_switch_week')) {
                d_from = Date.today().last().monday().toString('dd.MM.yyyy');
                d_to = Date.today().next().sunday().toString('dd.MM.yyyy');
            }
            if ($(this).hasClass('radio_switch_month')) {
                d_from = Date.today().moveToFirstDayOfMonth().toString('dd.MM.yyyy');
                d_to = Date.today().moveToLastDayOfMonth().toString('dd.MM.yyyy');
            }

            $(this).parents('.analyt_form').find("[id^='datepicker_from']").val(d_from);
            $(this).parents('.analyt_form').find("[id^='datepicker_to']").val(d_to);
        });

        $("[id^='datepicker_from']").datepicker($.datepicker.regional["ru"]);
        $("[id^='datepicker_to']").datepicker($.datepicker.regional["ru"]);

        $('.form_clean').on('click', function () {
            $(this).parents('form').find('input').val('');
        });
    }

    if ($('.block_row_report').length) {
        $('.report_button').on('click', function () {
            $('.report_info').slideUp();
            $('.report_hide').slideDown();
        });
        $('.report_close').on('click', function () {
            $('.report_info').slideDown();
            $('.report_hide').slideUp();
        });
    }
    if ($('.device').length) {
        $('.device_item').on('click', function () {
            if (!$(this).hasClass('active')) {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
                $('.device_desc_wrap').children().slideUp('300');
                $('.device_desc_wrap').children().eq($(this).index()).slideDown('300');
            }
        });
    }

    if ($('.domen_name').length) {
        $('.domen_rename').on('click', function () {
            if ($(this).text() == 'Переименовать') {
                $(this).text('Готово');
                $(this).siblings('input.domen_title').addClass('rename').prop('disabled',false).select();
            }
            else if ($(this).text() == 'Готово') {
                $(this).text('Переименовать');
                $(this).siblings('input.domen_title').removeClass('rename').prop('disabled',true);
            }
        });

        $('.domen_delete').on('click', function () {
            var par = $(this).parents('.domen_name');
            par.addClass('remove');
            par.next('.domen_table').addClass('remove');
            setTimeout(function () {
                par.next('.domen_table').remove();
                par.remove();
            }, 300)
        });
    }

    if ($('.block_select').length && !$('.constructor').length) {
        $('.block_select_first').on('click', function () {
            $(this).next('.block_select_hide').slideToggle(200);
        });
        $('.block_select_item').on('click', function () {
            $(this).parents('.block_select_hide').slideUp(200);
            $(this).parents('.block_select').find('.block_select_first span').text($(this).text());
        });
    }

    if ($('.block_trigger .manage_on').length) {
        $('.block_trigger .manage_on').on('click', function () {
            var p = $(this).parents('.block_trigger');
            if (p.hasClass('block_trigger_off')) {
                p.removeClass('block_trigger_off');
            } else {
                p.addClass('block_trigger_off');
            }
        });
    }

    if ($('.checkbox_text .label_checkbox').length) {
        $('.checkbox_text .label_checkbox input[type="checkbox"]').change(function () {
            if ($(this).prop('checked')) {
                $(this).parents('label').next('label').find('input').prop("disabled", false);
            } else {
                $(this).parents('label').next('label').find('input').prop("disabled", true);
            }
        });
    }

    if ($('.checkbox_text .label_select').length) {
        $('.checkbox_text .label_select select').change(function () {
            if ($(this).val() == "Задать вручную") {
                $(this).parents('label').next('label').find('input').prop("disabled", false);
            } else {
                $(this).parents('label').next('label').find('input').prop("disabled", true);
            }
        });
    }

    if ($('.table .label_checkbox').length) {
        $('.table thead .label_checkbox input').change(function () {
            if($(this).prop("checked")) {
                $(this).parents('table').find('tbody .label_checkbox input').prop('checked',true);
            } else {
                $(this).parents('table').find('tbody .label_checkbox input').prop('checked',false);
            }
        });
    }

    if ($('.titleRingingLists').length) {
        $('.label_checkbox input').change(function(){
            var kolvo = $('tbody .label_checkbox input:checked').length;
            var s1='';
            var s2='';
            if (kolvo%10>=2 && kolvo%10<=4) {
                s1='о';
                s2='а';
            }
            if (kolvo%10==0 || (kolvo%10>=5 && kolvo%10<=19)) {
                s1='о';
                s2='ов';
            }
            $('.numCheckContacts').text('Выбран'+s1+' '+kolvo+' контакт'+s2);
        });
    }
    if ($('.textarea').length) {
        $('.textarea textarea').keyup(function () {
            var num = $(this).val().length;
            if (num <= 600) {
                $(this).next('.textareanum').removeClass('textareanum_red').find('span').text(num);
            } else {
                $(this).next('.textareanum').addClass('textareanum_red').find('span').text(num);
            }
        });
    }
    if ($('.site_name').length) {
        $('.site_edit').on('click', function () {
            if ($(this).hasClass('edit')) {
                $(this).removeClass('edit');
                $(this).siblings('input').removeClass('rename').prop('disabled',true);
            }
            else {
                $(this).addClass('edit');
                $(this).siblings('input').addClass('rename').prop('disabled',false).select();
            }
        });
    }

    if ($('.source_name').length) {
        $('.source_edit').on('click', function () {
            if ($(this).hasClass('edit')) {
                $(this).removeClass('edit');
                $(this).siblings('input').removeClass('rename').prop('disabled',true);
            }
            else {
                $(this).addClass('edit');
                $(this).siblings('input').addClass('rename').prop('disabled',false).select();
            }
        });
    }

    if($('.resize').length) {
        $('.resize').each(function (i,e) {
            $(e).attr('size', $(e).val().length);
        });
    }

    if($('.constructor').length) {
        $('.ul_const').sortable({
            handle: ".const_move"
        });
        $( ".ul_const_double li" ).draggable({
            connectToSortable: ".ul_const",
            helper: "clone",
            revert: "invalid"
        });
        $( "ul, li" ).disableSelection();
    }

    if($('.sip_displayName').length) {
        $('[name="sip_displayName"]').change(function () {
            var sipName = $('[name="sip_displayName"]:checked').parents('label').attr('data-display');
            $('.sip_displayName').text(sipName);
        });
        $('[name="sip_displayId"]').change(function () {
            var sipName = $('[name="sip_displayId"]:checked').parents('label').attr('data-display');
            $('.sip_displayId').text(sipName);
        });
    }

    if ($('.analyt_menu_title').length) {
        $('.analyt_menu_title').on('click', function () {
            $(this).toggleClass('active');
        });
    }

    if ($('.analyt_help').length) {
        $('.analyt_help').on('click', function () {
            var Next = $(this).next('.analyt_help_modal');
            if(Next.is(':hidden')) {
                $('.analyt_help_modal').hide();
                $('.where_missed_detail_right').css('margin-bottom',0);
                Next.show();
                $(this).parents('.where_missed_detail_right').css('margin-bottom',Next.outerHeight()+3+'px');
                var Img = $(this).find('img');
                Next.css('--help_pos',Img.position().left + (Img.width()/2));
            } else {
                $('.analyt_help_modal').hide();
                $('.where_missed_detail_right').css('margin-bottom',0);
            }

        });
    }
    
    if ($('.error').length) {
        $('.error').on('click', function () {
            $(this).removeClass('error');
            $(this).next('.text_error').remove();
        });
    }
});

function resizeInput(t) {
    $(t).attr('size', $(t).val().length);
}

function input_file(t) {
    var ind = $(t).val().lastIndexOf('\\');
    $(t).next('.file_input').text($(t).val().substring(ind+1));
}

function delete_input(t) {
    var par = $(t).parents('label');
    $(par).addClass('label_remove');
    setTimeout(function () {
        $(par).next('label').find('p').text($(par).find('p').text());
        $(par).remove();
    },300);
    return false;
}

function add_input(t) {
    var par = $(t).parents('label');
    var pnew = par.clone().insertAfter(par);
    $(t).addClass('delete_input').attr('onclick', 'return delete_input(this)');
    $(pnew).find('p').text('');
    $(pnew).find('.file_input').text('');
    $(pnew).find('input').val('');
    return false;
}

function remove_block(t) {
    $(t).parents('.const_block').addClass('remove');
    setTimeout(function(){
        $(t).parents('li').remove();
    },300);
}

function block_select_first(t) {
    $(t).next('.block_select_hide').slideToggle(200);
}

function block_select_item(t) {
    $(t).parents('.block_select_hide').slideUp(200);
    $(t).parents('.block_select').find('.block_select_first span').text($(t).text());
}

$(window).on('load', function () {
    if ($('.help_image').length) {
        $('.help_anime').addClass('active');
    }
    if ($('.cloud_graph_wrap').length) {
        cloud_graph();
        $(window).on('scroll', function () {
            cloud_graph();
        });
    }
});

function cloud_graph() {
    if (number == 0) {
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