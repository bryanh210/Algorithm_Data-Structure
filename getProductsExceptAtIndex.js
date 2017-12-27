function getProductsOfAllIntsExceptAtIndex(arr) {
  let result = [];

  if(arr.length < 2){ throw new Error("need at least 2 items")}

  let productSoFar = 1;
  // go left -> right
  // have to go to arr.length because what we want is the result array
  // has to be arr.length because there's this "<". So basically you limit it to
  // less than the length of the existing array


  for(let i = 0; i< arr.length; i++){
    result[i] = productSoFar;
    productSoFar *= arr[i]
  }

  // go right -> left, multiply all numbers because if not I will have to multiply them

// here is fine because i = arr.length -1 so you're not limiting anything
  productSoFar = 1;
  for(let i = arr.length -1; i>= 0; i--){
    result[i] *= productSoFar;
    productSoFar *= arr[i]
  }


  return result



}





console.log(getProductsOfAllIntsExceptAtIndex([2, 7, 3, 4]))
