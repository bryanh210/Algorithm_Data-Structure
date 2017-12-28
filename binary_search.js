/*pseudocode:
have variable midpoint
min = 0; max = arr.length -1

condition is min >= max
+) if midpoint = target, return the index (guess)
=) if midpoint < target, search the right of midpoint by increasing the min to be search +1,
=) if midpoint < target, search the right of midpoint by increasing the min to be search +1,

return -1 if not found


*/

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
}


console.log(binarySearch([], 4))

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 4))
