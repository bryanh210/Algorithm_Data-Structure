function binarySearch(arr,target){
  let mid, min = 0, max = arr.length-1;

  if(arr.length === 0) { return -1};

// <= is important
  while(min <= max){
    mid = Math.floor((min+max)/2);
    if(target === arr[guess]){
      return mid;
    } else if(target < arr[guess]){
      max = mid -1;

    } else if(target > arr[guess]) {
      min = mid + 1;
    }
  }

    return -1
}


console.log(binarySearch([1,2,4,5,9], 5))
