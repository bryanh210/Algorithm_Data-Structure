function binarySearch(arr,target){
  let guess, min = 0, max = arr.length-1;

  if(arr.length === 0) { return -1};

  while(min <= max){
    guess = Math.floor((min+max)/2);
    if(target === arr[guess]){
      return guess;
    } else if(target < arr[guess]){
      max = guess -1;

    } else if(target > arr[guess]) {
      min = guess + 1;
    }
  }

    return -1
}x


console.log(binarySearch([1,2,4,5,9], 5))
