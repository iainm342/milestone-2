//jQuery function to create buttons on the filter pages using the data tags in the HTML

//Using the data index value this script shows/hides the images when filter is applied
$(function() {
    $('body').on('click', '.filter-img', function() {

        var $img = $(event.target);
        var index = $img.data('index');
        var $modal = $("#myModal" + index);
        $modal.css('display', 'block');
    });

    $('body').on('click', '.modal .close', function(event) {
        var $modal = $(event.target).closest('.modal');
        $modal.css('display', 'none');
    });
});

//Creates the filter buttons based on the information contained in the data-tags

//Cost filter buttons

//Stores all the images and button elements.
(function() {
    var $imgs = $("#gallery img");
    var $buttons1 = $("#buttons1");
    var $modalBut = $('.modal-button');
    //Creates a tagged object.
    var taggedCost = {};

    //Loops through the images and stores image in variable.
    $imgs.each(function() {
        var img = this;
        //Gets the elements tags
        var tags1 = $(this).data("tags1");

        //If the element had tags, splits it at comma and if it doesn't adds it to the empty object
        if (tags1) {
            tags1.split(",").forEach(function(tagName1) {
                if (taggedCost[tagName1] == null) {
                    taggedCost[tagName1] = [];
                }
                //adds the image to the array
                taggedCost[tagName1].push(img);
            });
        }
    });

    //Creates the "Show All" button and 
    
    $("<button/>", {
        text: "Show All",
        class: "active",
        click: function() {
            $(this).addClass("active").siblings().removeClass("active");
            $imgs.show();
            $modalBut.show();
        },
    }).appendTo($buttons1);

    //Creates the individual buttons

    $.each(taggedCost, function(tagName1) {
        $("<button/>", {
            text: tagName1 + " (" + taggedCost[tagName1].length + ")",
            click: function() {
                $(this).addClass("active").siblings().removeClass("active");
                $imgs.hide().filter(taggedCost[tagName1]).show();
                $modalBut.hide().filter(taggedCost[tagName1]).show();
            },
        }).appendTo($buttons1);
    });

    //Styling of buttons that appear in the DOM

    $("button").css({
        "background-color": "#fff",
        "color": "white",
        "border-radius": "15px",
        "margin": "10px"
    });
})();

(function() {
    var $imgs = $("#gallery img");
    var $buttons2 = $("#buttons2");
    var $modalBut = $('.modal-button');
    var taggedStyle = {};

    $imgs.each(function() {
        var img = this;
        var tags2 = $(this).data("tags2");

        if (tags2) {
            tags2.split(",").forEach(function(tagName2) {
                if (taggedStyle[tagName2] == null) {
                    taggedStyle[tagName2] = [];
                }
                taggedStyle[tagName2].push(img);
            });
        }
    });

    //Creates the "Show All" button

    $("<button/>", {
        text: "Show All",
        class: "active",
        click: function() {
            $(this).addClass("active").siblings().removeClass("active");
            $imgs.show();
            $modalBut.show();
        },
    }).appendTo($buttons2);

    //Creates the individual buttons

    $.each(taggedStyle, function(tagName2) {
        $("<button/>", {
            text: tagName2 + " (" + taggedStyle[tagName2].length + ")",
            click: function() {
                $(this).addClass("active").siblings().removeClass("active");
                $imgs.hide().filter(taggedStyle[tagName2]).show();
                $modalBut.hide().filter(taggedStyle[tagName2]).show();
            },
        }).appendTo($buttons2);
    });

    //Styling of buttons that appear in the DOM

    $("button").css({
        "background-color": "red",
        "border-color": "white",
        "color": "white",
        "border-radius": "15px",
        "margin": "10px"
    });
})();