// расчитать медиану

let median;
if (array.length % 2 !== 0) {
  let medianIndex = (array.length - 1) / 2;
  median = array[medianIndex];
} else {
  let leftIndex = array.length / 2 - 1;
  let rightIndex = array.length / 2;
  median = (array[leftIndex] + array[rightIndex]) / 2;
}