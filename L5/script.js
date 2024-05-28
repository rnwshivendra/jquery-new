const swiper = new Swiper(".swiper",{
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
  autoplay:{
    delay:1000,
    pauseOnMouseEnter:true
  }
})