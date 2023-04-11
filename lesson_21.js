// Открыти/закрытие  модального окна

/*<section class="popup">
      <div class="popup__content">
        <h2 class="visually-hidden">Подробности о товаре</h2>
        <ul class="features">
          <li class="feature feature--eco">
            <p>Экологически чистые материалы</p>
          </li>
          <li class="feature feature--handmade">
            <p>Связано вручную с любовью и умилением</p>
          </li>
          <li class="feature feature--gift">
            <p>Поставляется в подарочной упаковке</p>
          </li>
          <li class="feature feature--like">
            <p>Увеличивает лайки на фотографиях</p>
          </li>
        </ul>
        <button class="popup__button button-hide" type="button">Закрыть</button>
      </div>
    </section>*/

var popup = document.querySelector('.modal');                   // объявление переменной попапа
var openPopupButton = document.querySelector('.button-open');   // переменная на открытие окна
var closePopupButton = popup.querySelector('.button-close');    // переменная на закрытие окна

openPopupButton.addEventListener('click', function (evt) {       // обработчик события на открытие окна
    evt.preventDefault();
    popup.classList.add('modal--show');
});

closePopupButton.addEventListener('click', function () {         // обработчик события на закрытие окна
    popup.classList.remove('modal--show');
});

document.addEventListener('keydown', function (evt) {            // обработчик события закрытие окна клавишей ESC
    if (evt.keyCode === 27) {
        popup.classList.remove('modal--show');
    }
});
