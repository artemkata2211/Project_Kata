document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-two', {
    loop: false,
    pagination: {
      el: '.swiper-two-pagination',
      clickable: true
    },
    hashNavigation: true,
    slidesPerView: 1.5,
    mousewheel: true,
    keyboard: true,
    freeMode: true,
    width: 330,
    height: 80,
    breakpoints: {
      320: {
        enabled: true
      },
      768: {
        enabled: false
      }
    }
  });
});