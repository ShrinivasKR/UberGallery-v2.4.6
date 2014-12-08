"use strict";

    // loads event data to display on Home
    (window.onload = function () {
        makeAjax(updateEvents);
    });
    var event1 = document.getElementById("event1");
    var event2 = document.getElementById("event2");
    var event3 = document.getElementById("event3");

    // This function creates an Ajax request to a given url and
    // executes a given function func with the response.
    function makeAjax(func) {
        var CAL_API = "https://www.googleapis.com/calendar/v3/calendars/";
        var CAL_ID = "3218n1qbhtm3fe5gims1fgciso@group.calendar.google.com/";
        var API_KEY = "AIzaSyC59NOWzcnm5DCri2-BF9gftvgSq_8isUc";
        if (event1 && event2 && event3) {
            event1.innerHTML = "test1";
            event2.innerHTML = "foo";
            event3.innerHTML = "bar";
        }
        var ajax = new XMLHttpRequest();
        ajax.onload = updateEvents;
        ajax.onerror = ajaxFailure;
        var startTime =  getCurrentTime();
        var url = CAL_API + CAL_ID + "events?maxResults=3&" +
        "orderBy=startTime&singleEvents=true&timeMin=" + encodeURIComponent(startTime) +"&key=" + API_KEY;
        ajax.open("GET",url, true);
        ajax.send();
    }

    function getCurrentTime() {
        var currentdate = new Date();
        var currTime = currentdate.getFullYear() + "-"
            + (currentdate.getMonth()+1) + "-"
            + currentdate.getDate() + "T"
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds() + "-08:00";
        return(currTime);
    }

    function updateEvents() {
        var events = JSON.parse(this.responseText);
        event1.innerHTML = events.items[0].summary + " " + events.items[0].start.dateTime;
        event2.innerHTML = events.items[1].summary + " " + events.items[0].start.dateTime;
        event3.innerHTML = events.items[2].summary + " " + events.items[0].start.dateTime;
    }

    function ajaxFailure(exception) {
        alert("Error making Ajax request:" +
            "\n\nServer status:\n" + this.status + " " + this.statusText +
            "\n\nServer response text:\n" + this.responseText);
        if (exception) {
            throw exception;
        }
    }