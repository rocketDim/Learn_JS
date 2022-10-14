// Протеиновый коктейль
let days = 9; // Дней в периоде
let evenDayAmount = 200; // Количество протеина в чётные дни
let oddDayAmount = 100; // Количество протеина в нечётные дни
let total = 0; // Общее количество протеина

for (let i = 1; i <= days; i++) {
    if (i % 2 === 0) {
        total += evenDayAmount;
    } else {
        total += oddDayAmount
    }
}