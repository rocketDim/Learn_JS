let temperature = 20;
let isRaining = true;
let minutes = 0;


if (!isRaining && temperature >= 10 && temperature < 15) {
    minutes = 30;
}

if (!isRaining && temperature >= 15 && temperature < 25) {
    minutes = 40;
}

if (!isRaining && temperature >= 25 && temperature <= 35) {
    minutes = 20;
} else {
    minutes;
}
