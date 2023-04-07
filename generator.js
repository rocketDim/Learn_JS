// Функция генератор для получения уникальных идентификаторов

function createIdGenerator() {
    let lastGeneratedId = 0;

    return function () {
        lastGeneratedId += 1;
        return lastGeneratedId;
    };
}

const generatePhotoId = createIdGenerator();
const generateCommentId = createIdGenerator();

console.log(generatePhotoId());
console.log(generatePhotoId());
console.log(generateCommentId());
console.log(generatePhotoId());

