function quicksort(arr) {

  function subsort(left, right) {
    if (left >= right) {
      return;
    }

    let pivotIndex = right;
    let pivot = arr[pivotIndex];

    let wall = left;

    for (let i = left; i < pivotIndex; i++) {
      if (arr[i] <= pivot) {
        [arr[i], arr[wall]] = [arr[wall], arr[i]];
        wall++;
      }
    }

    [arr[wall], arr[pivotIndex]] = [arr[pivotIndex], arr[wall]];

    subsort(left, wall - 1);
    subsort(wall + 1, right);


  }
  subsort(0, arr.length - 1);

  return arr;
}