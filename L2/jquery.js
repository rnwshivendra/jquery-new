// $("id").on("click",function(){})




$(document).on("keyup",function(event){
   if(event.key == "ArrowUp"){
    $("h1").hide();
   }

   console.log(event.key);

})

