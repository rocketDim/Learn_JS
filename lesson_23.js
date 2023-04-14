/*Нужно запрограммировать мессенджер.Как должна работать программа:
— Шаблон сообщения находится в теге template с идентификатором message - template.
— В блоке сообщения(класс chat - message) должен быть текст сообщения, кнопка удаления и имя пользователя.
— Новое сообщение добавляется в конец контейнера с классом chat - content.
— Чтобы добавить новое сообщение, нужно ввести текст в поле ввода(элемент с классом chat - form - input) и нажать кнопку «Отправить» (отправляет данные из формы с классом chat - form).
- Чтобы удалить сообщение, нужно кликнуть по кнопке с крестиком(элемент с классом chat - message - button).Эта кнопка появляется при наведении на сообщение.
*/

// шаблон для сообщений
var messageTemplate = document.querySelector('#message-template').content;
var newItemTemplate = messageTemplate.querySelector('.chat-message');
// Чат
var chat = document.querySelector('.chat-content');
// Элемент чата 
var items = chat.children;
// Форма для заполнения
var newItemForm = document.querySelector('.chat-form');
// Форма для ввода текста
var newItemInput = newItemForm.querySelector('.chat-form-input');
// Закрытие (крестик)
var buttonClose = messageTemplate.querySelector('.chat-message-button');
// Заполнение почты
newItemForm.addEventListener('submit', function (evt) {
    event.preventDefault();// убираем запрос на сервер
    // Переменная для хранения строки ввода
    var messageText = newItemInput.value;
    // Создаем шаблон сообщения
    var messageTemp = newItemTemplate.cloneNode(true);
    var messageDescription = messageTemp.querySelector('.chat-message-text');
    // добавляем в шаблон заполненную строку
    messageDescription.textContent = messageText;
    // отправляем шаблон в чат
    chat.appendChild(messageTemp);
    deleteMessageHandler(messageTemp);
    // обнуляем строку ввода
    newItemInput.value = '';
});

// удаляем строку при нажатии на крестик
var deleteMessageHandler = function (message) {
    // создание прем для крестика
    var button = message.querySelector('.chat-message-button');
    // создание обработчика событий
    button.addEventListener('click', function () {
        // удаляем сообщение
        message.remove();
    });
}

// цикл для обработки сообщений 
for (var i = 0; i < items.length; i++) {
    deleteMessageHandler(items[i]);
}