function longestSubstringWithoutDuplication(string) {
  let lastSeen = {};
  let longestIndex = [0,1];
  let startIndex = 0;

  for(let i = 0; i< string.length; i++){
    let char = string[i];
    if(lastSeen[char]){
      // check the max between startIndex and lastSeen[char]+1 because I want to find the new start pont (that's why it's +1), which is
      // the point where you have already seen the character
      startIndex = Math.max(startIndex, lastSeen[char]+1)
    }
    if(longest[1] - longest[0] < i+1 - startIndex){
      //update the longest array with new positions:
      longestIndex = [startIndex, i+1]
    }
    lastSeen[char] = i;
  }

  return string.slice(longestIndex[0], longestIndex[1])
}


function longestSubstringWithoutDuplication(string) {
  let lastSeen = {};
  let longest = [0,1];
  let startIndx = 0;

  for(let i = 0; i< string.length; i++){
    let char = string[i];
    if(char in lastSeen){
      // check the max between startIndex and lastSeen[char]+1 because I want to find the new start pont (that's why it's +1), which is
      // the point where you have already seen the character
      startIndx = Math.max(startIndx, lastSeen[char]+1)
    }
    if(longest[1] - longest[0] < i+1 - startIndx){
      //update the longest array with new positions:
      longest = [startIndx, i+1]
    }
    lastSeen[char] = i;
  }

  return string.slice(longestIndex[0], longestIndex[1])
}
