$(document).ready(function(){
  // Counter
  $('.countdown').counterUp({
    delay: 50,
    time: 1000
});
  
  var swiper = new Swiper('.swiper-container', {
      effect: 'flip',
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
});

// wow js
new WOW().init();


