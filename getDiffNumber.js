function getDifferentNumber(arr){
  debugger;
  let compare = new Set();

  for(let i = 0; i< arr.length -1; i++){
    compare.add([arr[i]])
  }

  for(let i = 0; i< arr.length -1 ; i++){
    if(compare.has(i) === false){
      return i;
    }
  }

  return n;
}

console.log(getDifferentNumber([0,1,2,3]))
