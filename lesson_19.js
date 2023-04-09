/*Данные по продуктам хранятся в массиве с объектами assortmentData, каждый объект соответствует одному товару и содержит свойства:
- inStock. Если значение true — мороженое в наличии, если false — товара в наличии нет.
- isHit. Если значение true — мороженое самое популярное среди покупателей.
Каждому состоянию товара соответствует специальный класс:
Товар в наличии — good--available.
Недоступный товар — good--unavailable.
Хит продаж — good--hit.
Оформи код в виде функции updateCards, которая принимает на вход массив с данными. Вызови её, передав assortmentData.*/



var assortmentData = [
    {
        inStock: true,
        isHit: false
    },
    {
        inStock: false,
        isHit: false
    },
    {
        inStock: true,
        isHit: true
    },
    {
        inStock: true,
        isHit: false
    },
    {
        inStock: false,
        isHit: false
    }
];

var updateCards = function (cards) {
    var elements = document.querySelectorAll('.good');
    for (var i = 0; i < cards.length; i++) {
        var element = elements[i];
        var card = cards[i];

        var availabilityClass = 'good--available';
        if (!card.inStock) {
            availabilityClass = 'good--unavailable';
        }
        element.classList.add(availabilityClass);

        if (card.isHit) {
            element.classList.add('good--hit');
        }
    }
}
updateCards(assortmentData);