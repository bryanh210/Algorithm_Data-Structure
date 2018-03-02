/* The formula is:
if(arr[i] >= i-j){
  jumps[i] = Math.min(jumps[j]+1, jumps[i])
}

Time complexity is O(n) cuz it loops thru the array once
*/

function minSteps([arr]){
  let jumps = (new Array(array.length)).fill(Infinity);
  jumps[0]= 0;

// start at 1 because jumps [0] is 0
  for(let i = 1; i<array.length; i++){
    for(let j=0; j<i; j++){
      if(arr[i] > i-j){
        jumps[i] = Math.min(jumps[j]+1, jumps[i])
      }
    }
  }

  return jumps[jumps.length-1]
}


minSteps([3,4,2,1,2,3,7,1,1,3]) // return 4
