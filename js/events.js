/**
 * Created by Ivy on 12/2/2014.
 */

"use strict";

function isVisible (){
    $.stellar('refresh');

    $('#events').stellar({
        horizontalScrolling: false,
        verticalOffset: 150
    });

    var links = $('#navigation').find('li');
    var slide = $('.slide');
    var myWindow = $('#events');
    var htmlbody = $('html, body');
    var dataslide;

    slide.waypoint(function (event, direction) {
        dataslide = $(this).attr('data-slide');

        if(direction == 'down') {
            $('#navigation li[data-slide="' + dataslide +'"]').addClass('current')
        } else {
            $('#navigation li[data-slide="' + dataslide +'"]').addClass('current')
        }
    });

    myWindow.scroll(function() {
        if(myWindow.scrollTop() == 0) {
            $('#navigation li[data-slide="1"]').addClass('current');
            $('#navigation li[data-slide="2"]').removeClass('current');
        }
    });

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutExpo');
    }

    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
}

$('#events').bind('isVisible', isVisible());

$('#events').show('slow', function(){
    $(this).trigger('isVisible');
});
