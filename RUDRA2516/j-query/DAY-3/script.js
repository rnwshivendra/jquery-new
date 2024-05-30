$(document).ready(function(){
    $('#toggle').on("click",function(){
        if(this.checked) {
            $("h3").css("color","white")
            $("h1").css("color","white")
            $("p").css("color","white")
            $("#login").css("color","black")
            $('body').addClass('black');
        }         
            else {
                $('body').removeClass('black');
                $("h3").css("color","black")
                $("h1").css("color","black")
                $("p").css("color","black")
            }
        
        })
    })



$('.slider').slick();


$(document).ready(function(){

    $(".btn-s").on("click",function(){
    
        $(".container").slideToggle("1000",function(){
            
            $(".form-container").css("backdrop-filter","blur","120px"); 
        })

    })
})



$('.men-wear').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
                  
  
$('.btn').on('click',function(){
    alert('you have login successfully! ')
})


    