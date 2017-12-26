/*
Find the contiguous subarray within an array (containing at least one number)
which has the largest sum.
For example, given the array [-2,1,-3,4,-1,2,1,-5,4], the contiguous subarray [4,-1,2,1] 
has the largest sum = 6.

Go through each number, add up the sum, and compare local Max with global Max

[-2,1,-3,4,-1,2,1,-5,4]
currentMax: -2, -1,
arrayMax:

logic:
compare local max with Math Max

function Contiguous(arr){
declare arrayMax and currentMax
both start out at 0

for loop:
currentMax = (0, currentMax)
}


*/


function maxSubArray(arr){
  let result = [];
  let currentMax = 0;
  let arrayMax = 0;

  for(let i = 0; i< arr.length -1 ; i ++){
    currentMax = Math.max(0, currentMax + arr[i]);
    console.log(currentMax);
    arrayMax = Math.max(arrayMax, currentMax)
    console.log(arrayMax)
    if(arrayMax > currentMax){
      result.push(arr[i+1])
    }
  }

  return result
}

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
