// сортировка массива с высчитыванием минимального значения эл-та

for (let i = 0; i <= array.length - 1; i++) {
  let minValue = array[i];

  for (let j = i + 1; j <= array.length - 1; j++) {
    if (array[j] < minValue) {
      minValue = array[j];
      let swap = array[i];
      array[i] = minValue;
      array[j] = swap;
    }
  }
}