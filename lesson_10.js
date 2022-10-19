let qualificationDistance = 200;
let attempts = [120, 150, 160, 201, 203, 180, 202];
let qualified = false;
let averageBest = 0;


//Внешний цикл прохода по индексам (до предпоследнего значения)
for (let i = 0; i <= attempts.length - 1; i++) {
    let minValue = attempts[i];
    console.log(minValue);
    //Внутренний цикл прохода по индексам (от 1 до последнего значения)  
    for (let j = i + 1; j <= attempts.length; j++) {
        //Условное ветвление (замена minValue на минимальное найденное, запись в своп с последующей заменой местами attempts[i] и attempts[j])
        if (attempts[j] < minValue) {
            minValue = attempts[j];
            let swap = attempts[i];
            attempts[i] = minValue;
            attempts[j] = swap;
        }
    }
}
//Вывод отсортированного по возрастанию массива
console.log(attempts);

//3 лучших попытки
let firstBestAttempt = attempts[attempts.length - 1];
let secondBestAttempt = attempts[attempts.length - 2];
let thirdBestAttempt = attempts[attempts.length - 3];

averageBest = (firstBestAttempt + secondBestAttempt + thirdBestAttempt) / 3;

if (averageBest > qualificationDistance) {
    qualified = true;
} else {
    qualified = false;
}