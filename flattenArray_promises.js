/// Example

function iterator(result, num) {
  return result + num;
}

function sum(array) {
  return array.reduce(iterator);
}

sum([1, 2, 3]);



//Flatten-while

function flattenArray(arr) {
  const result = [];
  while(arr.length > 0){
    const val = arr.shift();
    if (!(Array.isArray(val))) {
       result.push(val)
    }else{
        .then(val =>{
        arr = value.concat(arr);
        })

    }
  }
  return result;
    // .then(()=>{
    //   return result;
    // })
    .catch((err)=>{
      console.log(err)
    })
}

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



// Flatten-recursion

function flattenArray(arr) {
  const result = [];

  arr.forEach((item) =>{
    if(!Array.isArray(item)){
      result.push(item)
    }else{
      .then(item =>{
        result = result.concat(flattenArray(item))
      })
    }
  })
   return.result;

   .catch(err =>{
     console.log(err)
   })
}
