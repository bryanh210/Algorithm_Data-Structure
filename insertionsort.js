// Insertion sort:
//
// Insertion: First element is considered sorted. Other elements just needed to be put in place
// Good for arrays with less than 10 items


function insertionSort(input) {
  for (let i = 0; i < input.length; i++) {
    let temp = input[i];
    let pointer = i;
    while (pointer > 0 && temp < input[pointer - 1]) {
      input[pointer] = input[pointer - 1];
      pointer--;
    }
    input[pointer] = temp;
  }
  return input;
}
