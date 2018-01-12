// Number permutation: powerset permutation
// Time complexity is n!
// ex: abcd -> 4! = 24.



function stringPermutations(str) {
  let result = [""]

  for(let strIndex = 0; strIndex < str.length; strIndex++) {

    let temp = [];

    for(let i = 0; i < result.length; i++) {
      let entry = result[i]; //""
      for(let j = 0; j <= entry.length; j++) {
        let newStr = entry.slice(0,j) + str[strIndex] + entry.slice(j, entry.length);
        temp.push(newStr);
      }
    }
    result = temp;
  }
  return result;
}


console.log(stringPermutations("abc"))
