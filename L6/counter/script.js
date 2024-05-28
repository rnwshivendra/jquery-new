$(".txt").hide();

$("#counter").counter({
    countFrom:1,
    countTo:50,
    duration:10000,
    placeholder: "?", 
    autoStart:false,
    onComplete: function() {
        $(".txt").show();
    }, 
    numberFormatter:          
    function(number) {
      return "&" + number;
    }
});

$("button").on("click",function(){
    $("#counter").counter("start")
})