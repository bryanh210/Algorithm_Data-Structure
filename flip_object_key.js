const obj = {A : 1, B : 2, C : 3, D : 4}

function swap(json){
  var ret = {};
  for(var key in json){
    ret[json[key]] = key;
  }
  return ret;
}

console.log(swap(obj))
