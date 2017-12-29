function getProductsOfAllIntsExceptAtIndex(arr) {
  let result = [];

  // loop through the left -> right
  let productSoFar = 1;
  for(let i = 0; i< arr.length; i++){
    result[i] = productSoFar;
    productSoFar *= arr[i]
  }

  productSoFar = 1;
  for(let i = arr.length -1; i>= 0; i--){
    // multiply here, not before because before you didnt need the product, now you do
    result[i] *= productSoFar;
    productSoFar *= arr[i]
  }

  // loop thru the right -> left

  return result;
}





console.log(getProductsOfAllIntsExceptAtIndex([2, 7, 3, 4]))
