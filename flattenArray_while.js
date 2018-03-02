function flattenArray(arr) {

  var result = [];
  while(arr.length) {
    // pop from the beginning EVERY TIME
    // THIS CHANGES THE ARR: IMPORTANT
    var value = arr.shift();

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



/* RECURSION ==== WHILE */



function flattenArray(arr){
  let result = [];

  while(arr.length > 0){
    let value = arr.shift();
    if(Array.isArray(value)){
      arr = value.concat(arr)
    }else{
      arr.push(value)
    }
  }

  return arr;
}
