//Бешенная сушка
let initialWeight = 6000; // Исходный вес в граммах
let targetWeight = 5000; // Желанный вес в граммах
let days = 0;

while (initialWeight > targetWeight) {
    initialWeight = initialWeight - initialWeight / 100 * 5;
    days++;
}
console.log(days);