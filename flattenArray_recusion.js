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


console.log(flattenArray([0,[1,3], [[5,6]], 4]))
