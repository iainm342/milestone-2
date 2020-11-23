(function () {
  var $imgs = $("#gallery img");
  var $buttons1 = $("#buttons1");   
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
  console.log(taggedCost);
  $("<button/>", {
    text: "Show All",
    class: "active",
    click: function () {
      $(this).addClass("active").siblings().removeClass("active");
      $imgs.show();
    },
  }).appendTo($buttons1);

  $.each(taggedCost, function (tagName1) {
    $("<button/>", {
      text: tagName1 + " (" + taggedCost[tagName1].length + ")",
      click: function () {
        $(this).addClass("active").siblings().removeClass("active");
        $imgs.hide().filter(taggedCost[tagName1]).show();
      },
    }).appendTo($buttons1);
  });
  $("button").css({
    "background-color": "red",
    color: "white",
    "border-radius": "15px",
    "margin": "10px"
  });
})();

(function () {
  var $imgs = $("#gallery img");
  var $buttons2 = $("#buttons2");   
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
  console.log(taggedStyle);
  $("<button/>", {
    text: "Show All",
    class: "active",
    click: function () {
      $(this).addClass("active").siblings().removeClass("active");
      $imgs.show();
    },
  }).appendTo($buttons2);

  $.each(taggedStyle, function (tagName2) {
    $("<button/>", {
      text: tagName2 + " (" + taggedStyle[tagName2].length + ")",
      click: function () {
        $(this).addClass("active").siblings().removeClass("active");
        $imgs.hide().filter(taggedStyle[tagName2]).show();
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
