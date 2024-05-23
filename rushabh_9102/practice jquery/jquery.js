// -------- L I G H T - D A R K - M O D E - T H E M E ------------

// $(".fa-sun").on("click", function () {
//   $("body").toggleClass("dark-mode");
// });

// -------L O G I N - F O R M ---------

$(document).ready(function () {
  $(".fa-xmark").hide();

  // ------- E X P A N D ---------

  $(".fa-right-to-bracket").on("click", function () {
    $(".main-form-banner").slideDown("slow");
    $(".fa-right-to-bracket").hide();
    $(".fa-xmark").show();
  });

  // ------- C O L L A P S E ---------

  $(".fa-xmark").on("click", function () {
    $(".main-form-banner").slideUp("slow");
    $(".fa-xmark").hide();
    $(".fa-right-to-bracket").show();
  });
});
// -------L O G I N - F O R M - E N D ---------



// -------- L I G H T - D A R K - M O D E - T H E M E ------------

$(document).ready(function () {
  $(".fa-moon").hide();

  // ------- light-mode ---------

  $(".fa-sun").on("click", function () {
    $("body").toggleClass("dark-mode");
    $(".fa-sun").hide();
    $(".fa-moon").show();
  });

  // ------- dark-mode ---------

  $(".fa-moon").on("click", function () {
    $("body").toggleClass("light-mode");
    $(".fa-moon").hide();
    $(".fa-sun").show();
  });
});

