function nextPermutation(arr){
  // if all digits are sorted in descending order
  // from right to left, reverse array
  for(let i = arr.length; i>= 0; i--){
    if(arr[i] > arr[i+1]){
      arr = arr.reverse();
    }
  }


  // if all digits are sorted in ascending order from
  // left to right, swap the last 2 digits
  if(arr.sort()){
    //arr[arr.length-1]
    [[arr[arr.length-1]], [arr[arr.length-2]]] = [[arr[arr.length-2]], [arr[arr.length-1]]]

  }




  return arr
}

console.log(nextPermutation([1,2,3]));
console.log(nextPermutation([3,2,1]))
