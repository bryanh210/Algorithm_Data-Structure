const map =
{"username": "sally",
  "profile": {"name": "Sally Clojurian",
            "address": {"city": "Austin",
                        "state": "TX"}}};

// user=> (get-in m [:profile :name])
// "Sally Clojurian"
// user=> (get-in m [:profile :address :city])
// "Austin"
// user=> (get-in m [:profile :address :zip-code])
// nil
// user=> (get-in m [:profile :address :zip-code] "no zip code!")
// "no zip code!"

// get_in(map, ["profile", "name"]) = map.profile.name
//Edge case: "date-of-birth" // map.profile["date-of-birth"];

/*
write a function(obj, arr)
// if object doesnt exist or arr doesnt exist, return null
// if there's third ar, return that
declare result as String
split the arr into arr[0], arr[1],...
convert JSOn to Object
return obj[arr[0][arr[1].toString();

*/

function get_in(obj, arr, optional){
  let result;
  if(!obj || !arr) return null;
  if(optional) return optional;

  const argArray = [];
  for(let i = 0; i< arr.length; i++){
    const arg= arr[i];
    argArray.push(arg);
  }


// i have to recognize this to establish the pattern BEFORE I get into the loop
// if not established this pattern it will be hard to get into the loop
// to know what it is


//Point of confusion: I didn't recognize this pattern fast enough

  result = obj[argArray[0]]

  for(let i = 1; i< argArray.length; i++){
    const char = argArray[i];
     result = result[char];
    console.log(char, "char")
    console.log(result, "result")
  }



return result
}

console.log(get_in(map,["profile", "address", "city"]));
// get_in(map,["profile", "name"], "no zip code!");
// get_in();
