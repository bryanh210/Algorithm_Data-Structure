function minNumofJumps(arr){
  const jumps = (new Array(arr.length)).fill(Infinity);
  jumps[0]= 0;

  for(let i = 1; i < arr.length; i++){
    for(let j = 0; j< i; j++){
      if(arr[j] + j >= i){
        jumps[i] = Math.min(jumps[j]+1, jumps[i])
      }
    }
  }
  return jumps[jumps.length -1]
}
