$(document).ready(function(){
    $('#toggle').on("click",function(){
        if(this.checked) {
            $('body').addClass('black');
        } else {
            $('body').removeClass('white');
        
        }
    });
});


$('.slider').slick();


$(document).ready(function(){

    $(".btn-s").on("click",function(){
    
        $(".container").slideToggle("1000",function(){
            
        })

    })
})




