const promise1 = Promise.resolve("val1");
const promise2 = Promise.resolve("val2");

function promiseAggregate(arg1, arg2){
  return Promise.all([arg1,arg2]).then((values) =>{
    //takes in an array, returns an array
    return (values)
  })
}

const results = promiseAggregate(P1,P2)

const promises = Promise.all([P1,P2]);

promises.then(results =>{
  console.log(result)
})


// Async/Await:
const promises = async (arg1,ar2) =>{
  await arg1.then((arg2)=>{
    console.log(arg2)
  })
}


// TO PRINT BOTH OF THEM IN A FORM OF AN ARRAY USING ASYNC AWAIT:

const promise1 = Promise.resolve("val1");
const promise2 = Promise.resolve("val2");


function promiseAggregate(arg1, arg2){
  return Promise.all([arg1,arg2]).then((values) =>{
    //takes in an array, returns an array
    return (values)
  })
}

async function promises(arg1,arg2){
  await promiseAggregate(arg1,arg2)
  // .THEN IS TO CATCH THE RESPONSES
  .then((val) =>{
    console.log(val)
  })


}

console.log(promises(promise1,promise2))
