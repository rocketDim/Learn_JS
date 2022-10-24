let getPrice = function (timeHourse, urgentlyProject) {
    let bid = 1500;

    if (urgentlyProject) {
        timeHourse /= 2;
        bid *= 2.5;
    }


    if (timeHourse > 150) {
        bid -= 250;
    }
    return timeHourse * bid;
}