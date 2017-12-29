function flattenArray(arr) {
  var array = [];
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
      array.push(value);

    }
  }
  return array;
}


/* RECURSION ==== WHILE */
