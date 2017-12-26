// Given an array of size N of positive sorted #'s
// find the minimum positive number that doesn't appear.
// Final answer should be O(n) time and O(1) space.
// Example if arr=[1,2,3,4,9] answer=5.



//here, the index is the most important piece
//ONLY WORK ON SORTED ARRAY

function missingNumber(arr){
   if(arr.length === 0){ throw "no positive number found" }

  else if(arr[0] === 0){
      for(let i = 0 ; i< arr.length; i++){
      if(arr[i] !== i){
        return i;
      }
    }
  }
  else{
    for(let i = 0 ; i< arr.length; i++){
      if(arr[i] !== i+1){
        return i+1;
      }
    }
  }


}


console.log(missingNumber([0,1,3,4]))

console.log(missingNumber([1,1000]))

console.log(missingNumber([2,1000]))

console.log(missingNumber([1,2,1000]))

 console.log(missingNumber([1,2,3,4,9]));
