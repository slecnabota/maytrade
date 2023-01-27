const certificate = new Swiper('.swiper-certificate', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.certificate-button-next',
      prevEl: '.certificate-button-prev',
    },
    autoplay: {
      delay: 3000,
    },
  });