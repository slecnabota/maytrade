const goods = new Swiper('.swiper-goods', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 25,
    navigation: {
      nextEl: '.goods-button-next',
      prevEl: '.goods-button-prev',
    },
    autoplay: {
      delay: 3000,
    },
    breakpoints:{
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
    },
  });