/* >>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>> Startup Landing <<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<< */

/* >>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>> Navbar <<<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<< */

/* Make the navbar fixed on scroll > 200 */
$(window).scroll(function () {
  var nav = $(".--navigation--");
  var top = 10;
  if ($(window).scrollTop() >= top) {
    nav.addClass("fixed");
  } else {
    nav.removeClass("fixed");
  }
});

/* adds active class to the nav element where the scroll position is currently at */
$(document).ready(function () {
  $(window).scroll(function () {
    //get current sroll position
    var scrollPosition = $(window).scrollTop();

    //get the position of the containers
    var one = $("#Home").offset().top,
      two = $("#Courses").offset().top,
      three = $("#Pricing-Plan").offset().top,
      four = $("#FAQ").offset().top;

    var nav1 = $(".home"),
      nav2 = $(".our-courses"),
      nav3 = $(".the-pricing"),
      nav4 = $(".the-faq");

    // if the scroll position is the same as the position of the container specified
    // and add the "active" class to the corresponding nav element
    if (scrollPosition >= one && scrollPosition <= $("#our-favourite-courses").offset().top) {
      nav1.siblings().removeClass("active");
      nav1.addClass("active");
    } else {
      nav1.removeClass("active");
    }
    if (scrollPosition + 150 >= two && scrollPosition <= $("#how-it-works").offset().top) {
      nav2.siblings().removeClass("active");
      nav2.addClass("active");
    } else {
      nav2.removeClass("active");
    }
    if (scrollPosition + 100 >= three && scrollPosition <= $("#free-tutorials").offset().top) {
      nav3.siblings().removeClass("active");
      nav3.addClass("active");
    } else {
      nav3.removeClass("active");
    }
    if (scrollPosition + 100 >= four && scrollPosition <= $("#learn-from-us").offset().top) {
      nav4.siblings().removeClass("active");
      nav4.addClass("active");
    } else {
      nav4.removeClass("active");
    }
  });
});

/* Will Open Mobile Manu When Click */
$(document).ready(function () {
  $(".--toggle-menu--").on("click", function () {
    $(".--mobile--nav--").addClass("show");
    $(".--nav-overlay--").addClass("show");
    $("body").addClass("lock");
  });
});

/* Will Close Mobile Manu When Click */
$(document).ready(function () {
  $(".--clost-it--").on("click", function () {
    $(".--mobile--nav--").removeClass("show");
    $(".--nav-overlay--").removeClass("show");
    $("body").removeClass("lock");
  });
});

/* BY Clicking on any of the list item it will remove the mobile navbar */
$(document).ready(function () {
  $(".--nav-list-- ul li").on("click", "a", function () {
    $(".--mobile--nav--").removeClass("show");
    $(".--nav-overlay--").removeClass("show");
    $("body").removeClass("lock");
  });
});

/* >>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>> Video <<<<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<< */

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

/* >>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>> Slider/Favourite COurse <<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<< */

var $slickEl = $(".favourite-courses");

$slickEl.slick({
  focusOnSelect: true,
  centerPadding: "0px",
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

/* >>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>> Switching List <<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<< */

$(document).ready(function () {
  $(".toggle-list").on("click", function () {
    $(this).parent().parent().parent().toggleClass("active");
  });
});

/* >>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>> Questions/FAQ <<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<< */

/* It will will be responsible for switching the questions */
/* when user click any of the question it will make that question active */
$(document).ready(function () {
  $(".--f-a-q--").on("click", "input", function () {
    $(".--f-a-q-- input.active").removeClass("active");
    $(this).addClass("active");
  });
});

/* >>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>> Pricing Plans <<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<< */

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

/* >>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>> End <<<<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<< */
