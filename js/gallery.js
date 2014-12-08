/**
 * Created by Ivy on 12/3/14.
 */
$(document).ready(function () {
    //var img = "../img/GalleryImages/2012";
    //var fileextension = [".png", ".jpg"];
    //$(data).find("a:contains(" + (fileextension[0]) + "), a:contains(" + (fileextension[1]) + ")").each(function () {
    //    $.ajax({
    //        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    //        url: dir,
    //        success: function (data) {
    //            //Lsit all png file names in the page
    //            $(data).find("a:contains(" + fileextension + ")").each(function () {
    //                var filename = this.href.replace(window.location.host, "").replace("http:///", "");
    //                $("body").append($("<img src=" + dir + filename + "></img>"));
    //            });
    //        }
    //    });
    //});
    //
    //var gallery = $('#gallery');
    //var row = $(document.createElement('div'));
    //var img;
    //_.forEach(imagesDisplayed, function(elemIndex) {
    //    if(elemIndex > 0 && 0 == elemIndex % 4) {
    //        gallery.append(row);
    //        row = $(document.createElement('div'));
    //    }
    //    img = $(document.createElement('img'));
    //    row.append(img);
    //});
    //gallery.append(row);
    $('#button2012').click(function () {
        $("#2012").removeClass("hidden");
        $("#2013").addClass("hidden");
        $("#2014").addClass("hidden");
    });
    $('#button2013').click(function () {
        $("#2013").removeClass("hidden");
        $("#2012").addClass("hidden");
        $("#2014").addClass("hidden");
    });
    $('#button2014').click(function () {
        $("#2014").removeClass("hidden");
        $("#2012").addClass("hidden");
        $("#2013").addClass("hidden");
    });
    $('#showAllButton').click(function () {
        $(".gallery").removeClass("hidden");
    });
    $('').click(function () {
        $(".gallery").removeClass("hidden");
    });
    //to Scroll
    $('.photo').click(function(){
        if($(this).hasClass("enlarged")) {
            $(this).removeClass("enlarged");
        }
        else {
            $(this).addClass("enlarged");
        }
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 100);
    });
});


