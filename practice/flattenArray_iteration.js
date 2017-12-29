function flattenArray(arr){
  let result = [];

  while(arr.length){
    let value = arr.shift();
    if(Array.isArray(value)){
      arr = value.concat(...arr)
    }else{
      result.push(value)
    }
  }
  return result;
}


console.log(flattenArray([0,[1,3], [[5,6]], 4]))
