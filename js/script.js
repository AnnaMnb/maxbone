
const swiper1 = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3.5,
    spaceBetween: 42,
    speed: 800,
    grabCursor: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      480: {
        spaceBetween: 20,
        slidesPerView: 1.5,
        slidesPerGroup: 1
      },
      640: {
        slidesPerView: 3.5,
        spaceBetween: 42,
      }
    },

  

    navigation: {
      nextEl: '.s-button-next',
      prevEl: '.s-button-prev'
    },
  });

