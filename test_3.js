//Оцените сайт
let rewiews = document.querySelectorAll('.review');
let submitButton = document.querySelector('.submit-button');
let error = document.querySelector('.error');

for (let rewiew of rewiews) {
    rewiew.onchange = function () {
        if (rewiew.dataset.evaluation === 'good') {
            error.classList.remove('shown');
            submitButton.disabled = false;
        } else {
            error.classList.add('shown');
            submitButton.disabled = true;
        };
    };
};