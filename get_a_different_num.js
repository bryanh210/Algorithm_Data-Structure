function getDifferentNumber(arr) {
  arr.sort();

  if(arr.length <1){ throw new Error('Array is empty')}

//arr.length because if it has only 1 item, it'll loop to first number too
  for(let i = 0 ; i< arr.length; i++){
    if(arr[i] !== i){
      return i;
    }

  }


 //cant throw error here because in case of [0, 1, 2, 3], number
  // will be 4, so it throw error before it can return the length


  return arr.length;
}

console.log(getDifferentNumber([0, 1, 2, 3]));
console.log(getDifferentNumber([0, 1000]));
console.log(getDifferentNumber([1000]));
