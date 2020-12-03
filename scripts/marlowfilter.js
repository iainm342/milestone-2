let img;
let index;
let modal;

$(function() {
    $('body').on('click', '.filter-img', function() {
        var $img = $(event.target);
        var index = $img.data('index');
        var $modal = $("#myModal" + index);
        // $modal.find('img').attr('href', img.attr('href'));
        $modal.css('display', 'block');
    });

    $('body').on('click', '.modal .close', function(event) {
        var $modal = $(event.target).closest('.modal');
        $modal.css('display', 'none');
    });
});

(function () {
  var $imgs = $("#gallery img");
  var $buttons1 = $("#buttons1");   
  var $modalBut = $('.modal-button');
  var taggedCost = {};

  $imgs.each(function () {
    var img = this;
    var tags1 = $(this).data("tags1");

    if (tags1) {
      tags1.split(",").forEach(function (tagName1) {
        if (taggedCost[tagName1] == null) {
          taggedCost[tagName1] = [];
        }
        taggedCost[tagName1].push(img);
      });
    }
  });
  
  $("<button/>", {
    text: "Show All",
    class: "active",
    click: function () {
      $(this).addClass("active").siblings().removeClass("active");
      $imgs.show();
      $modalBut.show();
    },
  }).appendTo($buttons1);

  $.each(taggedCost, function (tagName1) {
    $("<button/>", {
      text: tagName1 + " (" + taggedCost[tagName1].length + ")",
      click: function () {
        $(this).addClass("active").siblings().removeClass("active");
        $imgs.hide().filter(taggedCost[tagName1]).show();
        $modalBut.hide().filter(taggedCost[tagName1]).show();
      },
    }).appendTo($buttons1);
  });
  $("button").css({
    "background-color": "#fa0606",
    "color": "white",
    "border-radius": "15px",
    "margin": "10px"
  });
})();

(function () {
  var $imgs = $("#gallery img");
  var $buttons2 = $("#buttons2");   
  var $modalBut = $('.modal-button');
  var taggedStyle = {};

  $imgs.each(function () {
    var img = this;
    var tags2 = $(this).data("tags2");

    if (tags2) {
      tags2.split(",").forEach(function (tagName2) {
        if (taggedStyle[tagName2] == null) {
          taggedStyle[tagName2] = [];
        }
        taggedStyle[tagName2].push(img);
      });
    }
  });
 
  $("<button/>", {
    text: "Show All",
    class: "active",
    click: function () {
      $(this).addClass("active").siblings().removeClass("active");
      $imgs.show();
      $modalBut.show();
    },
  }).appendTo($buttons2);

  $.each(taggedStyle, function (tagName2) {
    $("<button/>", {
      text: tagName2 + " (" + taggedStyle[tagName2].length + ")",
      click: function () {
        $(this).addClass("active").siblings().removeClass("active");
        $imgs.hide().filter(taggedStyle[tagName2]).show();
        $modalBut.hide().filter(taggedStyle[tagName2]).show();
      },
    }).appendTo($buttons2);
  });
  $("button").css({
    "background-color": "#fa0606",
    "color": "white",
    "border-radius": "15px",
    "margin": "10px"
  });
})();