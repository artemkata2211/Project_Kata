const modalOpen = document.querySelector('.header__call');
const modal = document.querySelector('.modal');
const modalClose = modal.querySelector('.modal__btn-item');
const contactChatCopy = document.querySelector('.contact__chatcopy');

contactChatCopy.addEventListener('click', function () {
   modal.classList.add('showsed');
});

modalOpen.addEventListener('click', function () {
   modal.classList.add('showsed');
});

modalClose.addEventListener('click', function () {
    modal.classList.remove('showsed');
});

document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      modal.classList.remove('showsed');  
    }
});

document.body.addEventListener('click', function (evt) {
  if (!modal.contains(evt.target) && evt.target !== modalOpen && evt.target !== contactChatCopy) {
    modal.classList.remove('showsed');
  } 
});

modal.addEventListener('click', function (evt) {
    evt.stopPropagation();
});