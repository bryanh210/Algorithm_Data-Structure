function flattenArray(arr){
  let result = [];
  arr.forEach((item) =>{
    if(Array.isArray(item)){
      result = result.concat(flattenArray(item))
    } else{
      result.push(item)
    }
  })


return result

}

console.log(flattenArray([[1,3],[[2,4]]]))

console.log(flattenArray([0,[1,3], [[5,6]], 4]))


/*

Logic:

u go through the array, if it's not an Array, then you push that item into the result.
If it is, then you basically go into that array, do the exact same thing and push that item
into the result
