// Задом наперед
let numbers = [1, 3, 5, 7, 9, 11];

for (let i = 0; i <= (numbers.length - 1) / 2; i++) {

    let swapLast = numbers[numbers.length - (1 + i)];
    let swapFirst = numbers[i];

    numbers[i] = swapLast;
    numbers[numbers.length - (1 + i)] = swapFirst;
}
