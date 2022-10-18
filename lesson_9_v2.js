let usersByDay = [4, 2, 1, 3];
console.log(usersByDay);

for (let i = 0; i <= usersByDay.length - 2; i++) {
    let minValue = usersByDay[i];

    for (let j = i + 1; j <= usersByDay.length - 1; j++) {
        if (usersByDay[j] < minValue) {
            minValue = usersByDay[j];
            let swap = usersByDay[i];
            usersByDay[i] = minValue;
            usersByDay[j] = swap;
        }
    }
}
console.log(usersByDay);
