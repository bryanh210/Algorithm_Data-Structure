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
