//---------------------slider-cont--------------------
$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  });

  //headline.js
$(function() {
  $('.products').animatedHeadline();
})

$(function() {
  $('.testimonial').animatedHeadline({
    animationType: 'slide'
  });
})
