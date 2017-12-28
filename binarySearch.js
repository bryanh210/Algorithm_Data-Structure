function binarySearch(arr, target){
  let mid, min = 0; max = arr.length -1;
  while(min <= max){
    mid = Math.ceil((min+ max) / 2);
    if(arr[mid] === target){
      return mid
    }else if (arr[mid] < target){
      min = mid +1
    } else if(arr[mid] > target){
      max = mid -1
    } else{
      return -1
    }
  }


}


console.log(binarySearch([1,2,4,5,9], 5))
