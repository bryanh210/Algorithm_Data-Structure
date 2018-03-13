const data = [[1,2,3], [4,5,6],[7,8,9]];


function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}
console.log(flatten(data))
