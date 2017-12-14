// Find duplicates in array

// use binarySearch

function findDuplicates(arr1, arr2) {

 let duplicates = [];
  for (let num of arr1) {
    if (binarySearch(num,arr2)!==-1) duplicates.push(num);
  }
  return duplicates;


  function binarySearch(target,arr){
    // keep index
    let max = arr.length -1, min = 0, mid;
    while(min <= max){
      mid = Math.floor((max+min)/2);
        if(target === arr[mid]){
          return mid
        }
        else if(target < arr[mid]){
          max = mid -1

          } else{
            min = mid +1
          }
      }

    // IF I DON'T RETURN -1 OUTSIDE, I WILL NEVER GET TO -1
    return -1
    }

 }


let arr1 = [1, 2, 3], arr2 = [3, 4, 50, 22];
console.log(findDuplicates(arr1, arr2))
