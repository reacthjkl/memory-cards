function mixArray(array) {
  let n = array.length;
  for (let i = 0; i < n - 2; i++) {
    let randomElementIndex = getRandomNumber(i, n - 1);
    swapTwoElements(array, i, randomElementIndex);
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function swapTwoElements(array, firstIndex, secondIndex) {
  let currentElement = array[firstIndex];
  let elementToReplace = array[secondIndex];

  array[firstIndex] = elementToReplace;
  array[secondIndex] = currentElement;
}