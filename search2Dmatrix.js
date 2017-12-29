/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
For example,

Consider the following matrix:

[
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
Given target = 3, return true.

*/



 function binarySearch(arr, target){
    let mid, min = 0, max = arr.length -1;
    let result;
    while(min <= max){
      mid = Math.floor((min+ max) / 2);
      if(arr[mid] === target){
        result = mid;
        console.log(result, "result")
        return result;
      }else if (arr[mid] < target){
        min = mid +1
      } else if(arr[mid] > target){
        max = mid -1
      }
    }
      result = -1;
    console.log(result, "result")

  }

function matrixSearch(mtx, target){

  if(mtx.length < 1){ return false }

  
  let check = true;

  for(let i = 0; i < mtx.length; i++){
    let currentArr = mtx[i];


    if(binarySearch(currentArr, target) > -1){

// if you don't return true here, it will be updated to false in the next iteration
      return true;
    }else{

      check = false
    }
    /* this is always returning true:
    if(binarySearch(currentArr, target) === -1){
      check false
    }else{
      check = true
    }

    Why? cuz if I don't return true, this expression "binarySearch(currentArr, target) > -1"
    is going to return true even if it's supposed to be false.


    */

  }




  return check;

}


let matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]

console.log(matrixSearch(matrix, 2))
