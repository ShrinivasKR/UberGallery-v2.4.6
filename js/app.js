/**
 * Created by Shrinivas on 11/18/2014.
 */

"use strict";

$(document).ready(function() {
    //load header
    $('#head').load('header.html');
    $('body').hide();

    $(window).load(function() {
        $('body').fadeIn(500);
    })

});