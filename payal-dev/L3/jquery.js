//------------remove class()&slide---------
$("#btn-1").on("click",function(){
    $("#cont").toggleClass("pr");
})

$("#btn-1").on("click",function(){
    $("#cont").slideToggle("1000");
})

//----------fade--------------
$("#btn-2").on("click",function(){
    $("#cont-1").fadeToggle("1000");
})


$("#btn-3").on("click",function(){
    $("#cont-2").fadeOut("1000");
})