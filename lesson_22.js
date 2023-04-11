/* В галерее есть миниатюры (элементы с классом 'gallery__picture-preview') и большое изображение (класс 'full-picture').
После клика по превью большая фотография должна поменяться.Большое изображение должно быть таким же, как и в миниатюре, только большего размера.
Пути к полноразмерным фотографиям находятся в массиве pictures.Порядок элементов в массиве такой же, как и порядок миниатюр в разметке.*/


// массив с фото
var pictures = [
    'gallery-tomato/tomato-red-large.jpg',
    'gallery-tomato/tomato-yellow-large.jpg',
    'gallery-tomato/tomato-strange-large.jpg'
];

// переменная пребеирает фото 
var thumbnails = document.querySelectorAll('.gallery__picture-preview');
// пременная отвечает за большое фото
var fullPicture = document.querySelector('.full-picture');

// обработчик событий, отвечает за подстановку большого фото
var addThumbnailClickHandler = function (preview, picture) {
    preview.addEventListener('click', function () {
        fullPicture.src = picture;
    });
};

// цикл перебирает все фото
for (var i = 0; i < thumbnails.length; i++) {
    addThumbnailClickHandler(thumbnails[i], pictures[i]);
}