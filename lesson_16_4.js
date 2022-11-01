// Парковка
let checkVehicle = function (wheel, weight) {
    if (wheel === 2 && weight < 100) {
        return 'Парковка разрешена';
    } else {
        return 'Вам здесь не место! Мяу!'
    }

}