$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.header__burger').click(function (event) {
      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс) 
      $('.header__burger, .header__menu').toggleClass('active');
      // при открытом бургере блокируем прокрутку страницы
      $('body').toggleClass('lock');
   });
});

// закрытие бургера, при нажатии на меню
const headerLinks = document.querySelectorAll('.header__menu')
headerLinks.forEach((el) => {
   el.addEventListener('click', () => {
      $('.header__burger,.header__menu').toggleClass('active');
   })
})


// спойлер-аккордион 
$(document).ready(function () {
   // ссылка, на которую нажимаем 
   $('.spoiler-link').click(function (event) {
      // общий класс спойлера
      if ($('.footer__spoiler').hasClass('one')) {
         // ссылка, на которую нажимаем 
         $('.spoiler-link').not($(this)).removeClass('hidden');
         // блок который идет сразу после ссылки
         $('.spoiler-block').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('hidden').next().slideToggle(300);
   });
});