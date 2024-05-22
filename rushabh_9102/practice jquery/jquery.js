
// -------- L I G H T - D A R K - M O D E - T H E M E ------------

$("#toggle-theme").on("click",function(){
   $("body").toggleClass("light-mode");
   $("body").toggleClass("dark-mode");
})

// -------L O G I N - F O R M ---------

$('.fa-right-to-bracket').on('click',function(){
   $('.main-form-banner').toggle(200);
});