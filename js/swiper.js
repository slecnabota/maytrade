const swiper = new Swiper('.swiper-brands', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 65,
    navigation: {
      nextEl: '.brands-button-next',
      prevEl: '.brands-button-prev',
    },
    breakpoints: {
      320:{
        slidesPerView: 2,
        spaceBetween: 20,
      },
      565:{
        slidesPerView: 2,
        spaceBetween: 65,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 65,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 65,
      }
    }
 });