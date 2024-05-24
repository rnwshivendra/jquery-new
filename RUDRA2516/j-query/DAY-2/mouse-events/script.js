$(document).ready(function(){
   
    $("body").on("contextmenu",function(){

        $(".wrapper").toggle();
        event.preventDefault();

        
    });

});

