/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>>>> Navbar <<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */

/* Make the navbar fixed on scroll > 200 */
$(window).scroll(function () {
  var nav = $(".--navigation--");
  var top = 200;
  if ($(window).scrollTop() >= top) {
    nav.addClass("fixed");
  } else {
    nav.removeClass("fixed");
  }
});

/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>>>>> Video <<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */

/* It will play the Video */
$(document).ready(function () {
  $(".--video--button--").click(function () {
    $("#appendVideo").append(
      '<iframe id="main-frame" src="https://youtube.com/embed/L9jU-IIN0ng?autoplay=1&mute=1" frameborder="0" allowfullscreen>'
    );
    $(".--video--").css("display", "block");
    $(".--frame--").animate({ opacity: "1", "margin-top": "0px" }, 200);
  });
});

/* It will hide the Video */
$(document).ready(function () {
  $(".--close--").click(function () {
    $("#main-frame").remove();
    $(".--video--").css("display", "none");
    $(".--frame--").animate({ opacity: "1", "margin-top": "70px" }, 200);
  });
});
