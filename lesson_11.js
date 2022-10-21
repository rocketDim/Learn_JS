let calculateSalary = function (dirtyCash) {
    let tax = 0.35;
    if (dirtyCash >= 100000) {
        tax = 0.45;
    }
    let pureCash = Math.ceil(dirtyCash * tax);
    pureCash = dirtyCash - pureCash;
    return pureCash;
}