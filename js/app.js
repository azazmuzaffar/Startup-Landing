/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>>>> Navbar <<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */

/* Make the navbar fixed on scroll > 200 */
$(window).scroll(function () {
  var nav = $(".--navigation--");
  var top = 100;
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
    var iframe = document.getElementById("myIframe");
    iframe.src = "https://youtube.com/embed/L9jU-IIN0ng?autoplay=1&mute=1";
    $(".--video--").css("display", "block");
    $(".--frame--").animate({ opacity: "1", "margin-top": "0px" }, 200);
  });
});

/* It will hide the Video */
$(document).ready(function () {
  $(".--close--").click(function () {
    var iframe = document.getElementById("myIframe");
    iframe.src = " ";
    $(".--video--").css("display", "none");
    $(".--frame--").animate({ opacity: "1", "margin-top": "70px" }, 200);
  });
});

/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>> Switiching List <<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */

$(document).ready(function () {
  $(".toggle-list").on("click", function () {
    $(this).parent().parent().parent().toggleClass("active");
  });
});

/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>>> Questions <<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */

/* It will will be responsible for switching the questions */
/* when user click any of the question it will make that question active */

$(document).ready(function () {
  $(".--f-a-q--").on("click", "input", function () {
    $(".--f-a-q-- input.active").removeClass("active");
    $(this).addClass("active");
  });
});

/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>> Pricing Plans <<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */

$(document).ready(function () {
  $(".--btns-- ul").on("click", "li", function () {
    /* Checking which plan is active and changing payment based on that */
    if ($(".annual").hasClass("active")) {
      document.getElementById("--price-value--").innerHTML = "49.99/mo";
      $(".--plans--").addClass("animate");
      $(".--plans--").removeClass("animate2");
    } else {
      document.getElementById("--price-value--").innerHTML = "99.99/mo";
      $(".--plans--").removeClass("animate");
      $(".--plans--").addClass("animate2");
    }

    /* this will be responsible for switching plans */
    $(".--btns-- ul li.active").removeClass("active");
    $(this).addClass("active");
  });
});
