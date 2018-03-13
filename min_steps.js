function minNumofJumps(arr){
  // the jump array will be equal to arr.length
  const jumps = (new Array(arr.length)).fill(Infinity);
  jumps[0]= 0;

  for(let i = 1; i < arr.length; i++){
    for(let j = 0; j< i; j++){
      if(arr[j] + j >= i){
        // first iteration: either Infinity or jumps[j]+1 cuz u need 1 jump no matter what
        jumps[i] = Math.min(jumps[j]+1, jumps[i])
      }
    }
  }
  return jumps[jumps.length -1]
}
