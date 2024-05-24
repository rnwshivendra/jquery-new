// -------L O G I N - F O R M ---------

$(document).ready(function () {
  $(".fa-xmark").hide();

  // ------- expand ---------

  $(".fa-user").on("click", function () {
    $(".main-form-banner").slideDown("slow");
    $(".fa-user").hide();
    $(".fa-xmark").show();
  });

  // ------- collapse ---------

  $(".fa-xmark").on("click", function () {
    $(".main-form-banner").slideUp("slow");
    $(".fa-xmark").hide();
    $(".fa-user").show();
  });
});

// -------- L I G H T - D A R K - M O D E - T H E M E ------------

$(document).ready(function () {
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: light)");
  if (systemSettingDark.matches) {
    $("body").addClass("light-mode");
  } else {
    $("body").addClass("dark-mode");
  }

  $(".fa-moon").hide();

  // ------- light-mode ---------

  $(".fa-sun").on("click", function () {
    $(".fa-sun").hide();
    $(".fa-moon").show();
    $("body").addClass("dark-mode");
  });

  // ------- dark-mode ---------

  $(".fa-moon").on("click", function () {
    $(".fa-moon").hide();
    $(".fa-sun").show();
    $("body").removeClass("dark-mode");
  });
});


// ------------ C R O U S A L -------------

$('.hero-crousal').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});