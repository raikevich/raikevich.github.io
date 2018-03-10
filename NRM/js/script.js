'use strict';

$(document).ready(function() {
    var is_touch_device = 'ontouchstart' in document.documentElement;
    if(is_touch_device) $('body').addClass('sensor');

});