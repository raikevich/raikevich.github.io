'use strict';

$(document).ready(function () {
    var is_touch_device = 'ontouchstart' in document.documentElement;
    if (is_touch_device) $('body').addClass('sensor');

    //3. COUNTDOWN
    var ctd = document.getElementById('countdown');

    countdown();

    function countdown() {
        // Дата окончания счетчика UTC(год, месяц {январь=0, февраль=1, март=2...}, день, часы, минуты)
        var launch_date = new Date(Date.UTC(2018, 5, 12, 0, 0));
        var days;
        var hours;
        var minutes;
        var seconds;
        var rest;
        var now = new Date();

        seconds = rest = Math.floor(((launch_date.getTime() - now.getTime()) / 1000));

        days = zero(Math.floor(seconds / 86400));
        seconds -= days * 86400;

        hours = zero(Math.floor(seconds / 3600));
        seconds -= hours * 3600;

        minutes = zero(Math.floor(seconds / 60));
        seconds -= minutes * 60;

        seconds = zero(Math.floor(seconds));

        function zero(n) {
            return (n < 10 ? '0' : false) + n;
        }

        rest <= 0 ? days = hours = minutes = seconds = '00' : setTimeout(countdown, 1000);

        var t_days = '';
        var t_hours = '';
        var t_minutes = '';
        var t_seconds = '';

        if ((days >= 11 && days <= 19) || (days % 10 >= 5 && days % 10 <= 9) || days % 10 == 0) t_days = 'дней';
        else if (days % 10 >= 2 && days % 10 <= 4) t_days = 'дня';
        else if (days % 10 == 1) t_days = 'день';

        if ((hours >= 11 && hours <= 19) || (hours % 10 >= 5 && hours % 10 <= 9) || hours % 10 == 0) t_hours = 'часов';
        else if (hours % 10 >= 2 && hours % 10 <= 4) t_hours = 'часа';
        else if (hours % 10 == 1) t_hours = 'час';


        if ((minutes >= 11 && minutes <= 19) || (minutes % 10 >= 5 && minutes % 10 <= 9) || minutes % 10 == 0) t_minutes = 'минут';
        else if (minutes % 10 >= 2 && minutes % 10 <= 4) t_minutes = 'минуты';
        else if (minutes % 10 == 1) t_minutes = 'минута';


        if ((seconds >= 11 && seconds <= 19) || (seconds % 10 >= 5 && seconds % 10 <= 9) || seconds % 10 == 0) t_seconds = 'секунд';
        else if (seconds % 10 >= 2 && seconds % 10 <= 4) t_seconds = 'секунды';
        else if (seconds % 10 == 1) t_seconds = 'секунда';

        ctd.innerHTML =
            '<li><div><span class="h2">' + days + '</span><br> ' + t_days + '</div></li>' +
            '<li><div><span class="h2">' + hours + '</span><br> ' + t_hours + '</div></li>' +
            '<li><div><span class="h2">' + minutes + '</span><br> ' + t_minutes + '</div></li>' +
            '<li><div><span class="h2">' + seconds + '</span><br> ' + t_seconds + '</div></li>';
    }

    if ($('.nav_ham').length) {
        $('.nav_ham').on('click', function() {
            $('.nav_ham').toggleClass('active');
            $('body').toggleClass('o-hidden');
        });
    }

});