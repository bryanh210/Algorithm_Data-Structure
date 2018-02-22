function threeSum(arr,target){
  debugger;
  let result = [];
  let orderedArray = arr.sort();
  for(let i = 0; i< orderedArray.length -1; i++){
    // if j = 0, this 
    for(let j = i+1; j< orderedArray.length; j++){
      let twoSum = orderedArray[i] + orderedArray[j];
      let difference = target - twoSum;
      if(binarySearch(orderedArray, difference) !== -1){
        result.push([orderedArray[i], orderedArray[j], difference])
      }
    }
  }
  return result;
}

function binarySearch(arr,target){
  let mid;
  let start = 0;
  let end = arr.length -1;

  if(arr.length === 0){ return -1};

  while(start <= end){
    mid = Math.floor(start+end) /2;

    if(arr[mid] === target){
      return mid;
    }else if(arr[mid] < target){
      start = mid +1;
    }else if(arr[mid] > target){
      end = mid -1;
    }
  }
  return -1
}

// console.log(binarySearch([1,2,3],1))

console.log(threeSum([12,3,1,2,-6,5,-8,6],0))
