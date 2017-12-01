// check if the string is in the set
// Given a set of strings, e.g. {“one”, “two”, “four”}, and a target string, e.g. “fouroneone”, return true if the target string is composed of elements from the set.



function isStringInSet(set,target){
  let result = true;

  let keepTrack = '';

  if (target.length === 0 || set.length === 0){ return false;}

  for(let i = 0; i< target.length; i++){
     keepTrack = keepTrack + target[i];
    if(!set.has(keepTrack)){
        result = false

        console.log(keepTrack);
    } else{
      // this is in the case that the set hand
      // {"four", "one", "on", "two"}
      // 'one' will be counted as 'on' and return false
      result = isStringInSet(set, target.substring(i, target.length));

      keepTrack = '';
      console.log(keepTrack);
    }
  }


  return result;
}
//  var mySet = new Set();

// mySet.add(1); // Set { 1 }
// mySet.add(5); // Set { 1, 5 }
// mySet.add(5); // Set { 1, 5 }

{"one", "on", "two", "four"}

let exampleSet = new Set();
exampleSet.add("one");
exampleSet.add("on");
exampleSet.add("two");
exampleSet.add("four");

// 'o' -> 'on' -> 'one'


let exampleTarget = "fourone";

let exampleTarget1 = "fouroneon";

console.log(isStringInSet(exampleSet, exampleTarget))
console.log(isStringInSet(exampleSet, exampleTarget1))



// handling edge case: ('on', "one") -> double counted
var wordBreak = function(s, wordDict) {
    if(wordDict === null || wordDict.size === 0) {
        return false;
    }

    var possible = [];
    possible[0] = true;

    for(var i = 0; i < s.length; i++) {
        if(possible[i]) {
            for(var j = i + 1; j <= s.length; j++) {
                var str = s.substring(i, j);
                if(wordDict.has(str)) {
                    possible[j] = true;
                }
            }
        }
    }

    return possible[s.length] === true;
};
