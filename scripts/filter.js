(function () {
  var $imgs = $("#gallery img");
  var $buttons1 = $("#buttons1");   
var $buttons2 = $("#buttons2");
  var tagged = {};

  $imgs.each(function () {
    var img = this;
    var tags1 = $(this).data("tags1");

    if (tags1) {
      tags1.split(",").forEach(function (tagName1) {
        if (tagged[tagName1] == null) {
          tagged[tagName1] = [];
        }
        tagged[tagName1].push(img);
      });
    }
  });
  console.log(tagged);
  $("<button/>", {
    text: "Show All",
    class: "active",
    click: function () {
      $(this).addClass("active").siblings().removeClass("active");
      $imgs.show();
    },
  }).appendTo($buttons1);

  $.each(tagged, function (tagName1) {
    $("<button/>", {
      text: tagName1 + " (" + tagged[tagName1].length + ")",
      click: function () {
        $(this).addClass("active").siblings().removeClass("active");
        $imgs.hide().filter(tagged[tagName1]).show();
      },
    }).appendTo($buttons1);
  });
  $("button").css({
    "background-color": "red",
    color: "white",
    "border-radius": "15px",
    "margin": "10px"
  });

  $imgs.each(function () {
    var img = this;
    var tags2 = $(this).data("tags2");

    if (tags2) {
      tags2.split(",").forEach(function (tagName2) {
        if (tagged[tagName2] == null) {
          tagged[tagName2] = [];
        }
        tagged[tagName2].push(img);
      });
    }
  });
  console.log(tagged);
  $("<button/>", {
    text: "Show All",
    class: "active",
    click: function () {
      $(this).addClass("active").siblings().removeClass("active");
      $imgs.show();
    },
  }).appendTo($buttons2);

  $.each(tagged, function (tagName2) {
    $("<button/>", {
      text: tagName2 + " (" + tagged[tagName2].length + ")",
      click: function () {
        $(this).addClass("active").siblings().removeClass("active");
        $imgs.hide().filter(tagged[tagName2]).show();
      },
    }).appendTo($buttons2);
  });
  $("button").css({
    "background-color": "red",
    color: "white",
    "border-radius": "15px",
    "margin": "10px"
  });
})();

