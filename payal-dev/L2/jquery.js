//mouse-click(contextmenu)

$("#subm").on("contextmenu",function(){
alert("Do you want to submit?");
})

//mouse-event(dblclick)

$("img").on("dblclick",function(){
    $("img").hide();
    console.log(R);
})

//keyboardevent
$(document).keypress(function(event) {
    if (event.key === "a") {
      alert("You pressed the 'a' key!");
    }
  });
  



//theme dark:light

$("#logo-1").on("click",function(){
    
})

