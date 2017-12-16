function arrayOfArrayProducts(arr) {
  // in case arr.length === 0 or only has 1 item
  if(arr.length < 2){
    return []
  }

  let arrayOfProducts = [];

  let productSoFar = 1;


  // this adds up all the right
  // PAY ATTENTION: the condition of the foor loop: <= arr.length-1. it must hit that
  for(let i = 0; i<= arr.length-1 ; i++){
    // this is to put the result at the right position
    arrayOfProducts[i] = productSoFar;
    productSoFar *= arr[i]
  }


  // PAY ATTENTION: the condition of the foor loop: >=0. it must hit that
  productSoFar = 1;
  for(let j = arr.length -1; j >= 0; j--){
    arrayOfProducts[j] *= productSoFar;
    productSoFar *= arr[j]
  }

  return arrayOfProducts;
}


console.log(arrayOfArrayProducts([8, 10, 2]))
