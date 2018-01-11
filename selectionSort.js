//Selection sort
 // Go through the array, assume the first one is the largest item in the array.
 // then keep going through the array, and swap with the larger item
 // At the end, swap the largest item with the last item in the array
 // Do it recursivel again till everything is sorted


function selectionSort(arr){
  const n = arr.length;

  for(let k = n-1; k >0; k--){
    let largest = 0;
    for(let i= 0; i < arr.length; i++){
      if(arr[i] > arr[largest]){
        largest = i;
      }
    }
    // swap the largest and i
  }
}

selectionSort([3,9,1,4,7])
