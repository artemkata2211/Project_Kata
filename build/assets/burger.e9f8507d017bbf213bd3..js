const burgerOpen = document.querySelector('.header__burger');
const sideBar = document.querySelector('.hidden-sidebar');
const burgerClose = sideBar.querySelector('.div__burger');
burgerOpen.addEventListener('click', function () {
  sideBar.classList.add('show');
});
burgerClose.addEventListener('click', function () {
  sideBar.classList.remove('show');
});
document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    sideBar.classList.remove('show');
  }
});
document.body.addEventListener('click', function (evt) {
  if (!sideBar.contains(evt.target) && evt.target !== burgerOpen) {
    sideBar.classList.remove('show');
  }
});
sideBar.addEventListener('click', function (evt) {
  evt.stopPropagation();
});