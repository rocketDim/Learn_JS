// надо отображать актуальное состояние товаров: «в наличии», «нет в наличии», «хит»

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

        var availablityClass = 'good--unavailable';
        if (card.inStock) {
            availablityClass = 'good--available';
        }

        element.classList.add(availablityClass);

        if (card.isHit) {
            element.classList.add('good--hit');
        }
    }
}

updateCards(assortmentData);