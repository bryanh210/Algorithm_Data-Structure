function flattenArray(arr) {

  const result = [];
  while(arr.length >0) {
    // pop from the beginning EVERY TIME
    // THIS CHANGES THE ARR: IMPORTANT
    const value = arr.shift();

    if(Array.isArray(value)) {
      // this line preserve the order

      //concat the array after the value, bringing up that array
      arr = value.concat(arr);
      console.log(arr, "after arr")
    } else {
      result.push(value);

    }
  }
  return result;
}

flattenArray([[1,2],3,4])

/* RECURSION ==== WHILE */



function flattenArray(arr){
  let result = [];

  while(arr.length > 0){
    const value = arr.shift();
    if(Array.isArray(value)){
      arr = value.concat(arr)
    }else{
      result.push(value)
    }
  }

  return arr;
}

flattenArray([[1,2],3,4])
