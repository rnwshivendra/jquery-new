// -------L O G I N - F O R M ---------

// $(document).ready(function () {
//   $(".fa-xmark").hide();

//   // ------- expand ---------

//   $(".fa-user").on("click", function () {
//     $(".form-main-banner").slideDown("fast");
//     $(".fa-user").hide();
//     $(".fa-xmark").show();
//   });

//   // ------- collapse ---------

//   $(".fa-xmark").on("click", function () {
//     $(".form-main-banner").slideUp("fast");
//     $(".fa-xmark").hide();
//     $(".fa-user").show();
//   });

// });

$(".form-main-banner").hide();

$(document).ready(function() {
  $(".fa-user").on("click",function() {
    $(".form-main-banner").fadeIn();
    $(".form-main-banner").css("position","fixed");
    $(".form-main-banner").css("z-index","9");

  });

  $(".fa-xmark").on("click",function() {
    $(".form-main-banner").fadeOut();
  });

  window.onclick = function(event) {
    if (event.target == $(".form-main-banner")[0]) {
      $(".form-main-banner").fadeOut();
    }
  }
});

$(document).ready(function(){
  $('.sign-up').hide();

     
  $('.btn-1').on('click',function(){
  $('.sign-in').fadeOut(150);    
  $('.sign-up').fadeIn(150);    
  $('.form-main-banner').addClass('.sign-up');    
  });

  $('.btn-2').on('click',function(){
    $('.sign-up').fadeOut(150);    
  $('.sign-in').fadeIn(150); 
    $('.form-main-banner').removeClass('.sign-up');     
  });
})

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
  dots: true,
  arrows:false,
});



// --------------- C O U N T E R - U P --------------

$(document).ready(function() {
  $('.counter').counterUp({
  delay: 50, 
  time: 2000,
});
});
