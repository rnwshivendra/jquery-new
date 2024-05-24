
$("#btn1").on("click",function(){
    
    $("#main").toggleClass("color")
})

$("#btn2").on("click",function(){

    $("#main").slideToggle(5000);
})

$("#btn3").on("click",function(){

    $("#main").fadeToggle(2000);
})