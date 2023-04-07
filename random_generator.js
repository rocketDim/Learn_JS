/*
  ЗАДАЧА:
  Напишите функцию-генератор для получения случайных идентификаторов
  из указанного диапазона, и так, чтобы они не повторялись,
  пока не будут перебраны все числа из этого промежутка.
*/

function getRandomPositiveInteger(min, max) {
    const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
    const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
    const result = Math.random() * (upper - lower + 1) + lower;

    return Math.floor(result);
}

function createRandomIdFromRangeGenerator(min, max) {
    const previousValues = [];

    return function () {
        let currentValue = getRandomPositiveInteger(min, max);
        if (previousValues.length >= (max - min + 1)) {
            console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
            return null;
        }
        while (previousValues.includes(currentValue)) {
            currentValue = getRandomPositiveInteger(min, max);
        }
        previousValues.push(currentValue);
        return currentValue;
    };
}

const generatePhotoId = createRandomIdFromRangeGenerator(1, 3);

console.log(generatePhotoId());
console.log(generatePhotoId());
console.log(generatePhotoId());
console.log(generatePhotoId()); // Получим ошибку в консоли и null в качестве значения
