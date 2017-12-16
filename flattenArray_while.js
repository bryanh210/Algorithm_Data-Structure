function flattenArray(arr) {
  var array = [];
  while(arr.length) {
    // pop from the beginning
    var value = arr.shift();
    console.log(value, "value");
    if(Array.isArray(value)) {
      // this line preserve the order
      console.log(arr, "before arr")
      //concat the array after the value, bringing up that array
      arr = value.concat(arr);
      console.log(arr, "after arr")
    } else {
      array.push(value);
      console.log(array, "array")
    }
  }
  return array;
}
