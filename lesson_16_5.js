// Сжатие массивов
let getZippedArrays = function (keyArr, valueArr) {
    let object = {};
    for (let i = 0; i < keyArr.length; i++) {
        object[keyArr[i]] = valueArr[i];
    }
    return object;
}