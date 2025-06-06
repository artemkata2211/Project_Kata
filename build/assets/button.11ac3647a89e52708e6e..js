const buttonTwo = document.querySelector('.btn-two__swiper--two');
const swiperTwo = document.querySelector('.swiper-two-close-button');
buttonTwo.onclick = function () {
  if (swiperTwo.classList.contains('hidden-two')) {
    swiperTwo.classList.remove('hidden-two');
    buttonTwo.classList.add('icon--two');
    buttonTwo.textContent = "Скрыть";
  } else {
    swiperTwo.classList.add('hidden-two');
    buttonTwo.textContent = "Показать еще";
    buttonTwo.classList.remove('icon--two');
  }
};