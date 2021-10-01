$(document).ready(function () {
  $(".--video--button--").click(function () {
    $(".--video--").css("display", "block");
    $(".--frame--").animate({ opacity: "1", "margin-top": "0px" }, 200);
  });
});
$(document).ready(function () {
  $(".--close--").click(function () {
    $(".--video--").css("display", "none");
    $(".--frame--").animate({ opacity: "1", "margin-top": "70px" }, 200);
  });
});

$(window).scroll(function () {
  var nav = $(".--navigation--");
  var top = 200;
  if ($(window).scrollTop() >= top) {
    nav.addClass("fixed");
  } else {
    nav.removeClass("fixed");
  }
});
