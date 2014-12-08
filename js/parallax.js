/**
 * Created by Ivy on 12/6/2014.
 */

"use strict";

var dataslide;

jQuery(document).ready(function ($){
    $(window).stellar();

    var links = $('#navigation').find('li');
    var slide = $('.slide');
    var myWindow = $(window);
    var htmlbody = $('html,body');

    slide.waypoint(function (event, direction) {
        dataslide = $(this).attr('data-slide');

        if(direction == 'down') {
            $('#navigation li[data-slide="' + dataslide +'"]').addClass('current')
        } else {
            $('#navigation li[data-slide="' + dataslide +'"]').addClass('current')
        }
    }, {offset: 50});

    myWindow.scroll(function() {
        if(myWindow.scrollTop() == 0) {
            $('#navigation li[data-slide="1"]').addClass('current');
            $('#navigation li[data-slide="2"]').removeClass('current');
        }
    });

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top - 75
        }, 1000, 'easeInOutExpo');
    }

    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
});

