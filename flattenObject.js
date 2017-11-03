//Flatten nested object
// using helper recusrion

// Pseudo:
// function flattenObject(obj){
//   //result = {}
//
//
// //substring at the beginning is ''
// // then afterward it's each of the inner objects
// // substring is what's gonna build out the string:
// {.a.b etc}
//   funct helper(substring, obj){
//     if(obj[key] is number){
//       result[substring + '.' + key] = Obj[key];
//       return
//     } else{
//       helper(substring + key, O[key])
//     }
//   }
// }


function flattenObj(obj){
  let result = {};

  function recurse(substr, object){
    let newKeyy;
    if(substr.length === 0){
      newKey = key;
    } else{
      newKey = substr + '.' + ke;
    }
    if(typeof o[key] === "number"){
      result[newKey] = o[key]
    } else{
      recurse[newKey, o[key]]
    }
  }

  return result;
}

let test = {
  a: { b: 1,
        c: 2},
      d: { x: {
          y: 5,
          z: 6
      }}
      w: 7,
    e: 8,
    o: 9
}
