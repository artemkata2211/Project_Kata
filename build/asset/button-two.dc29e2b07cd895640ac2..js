const button = document.querySelector('.btn__swiper');
const swiperOnes = document.querySelectorAll('.swiper-one-close-button');
button.onclick = function () {
  for (let swiperOne of swiperOnes) {
    if (swiperOne.classList.contains('hidden')) {
      swiperOne.classList.remove('hidden');
      button.textContent = "Скрыть";
      button.classList.add('icon');
    } else {
      swiperOne.classList.add('hidden');
      button.textContent = "Показать еще";
      button.classList.remove('icon');
    }
  }
};