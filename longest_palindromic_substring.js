function longestPalindromicSubstring(string){
  if(string.length === 0) return " ";
  let longest ="";
  for(let i = 0; i<string.length; i++){
    for(let j =i; j<string.length; j++){
      const substring = string.slice(i, j+1);
      if(substring.length > longest.length && isPalindrome(substring)){
        longest = substring;
      }
    }
  }
  return longest;
}

function isPalindrome(string){
  let leftIdx = 0;
  let rightIdx = string.length -1;
  // for "aa" the final check isn't done because it didn't meet the requirement
  while(leftIdx < rightIdx){
    if(string[leftIdx] !== string[rightIdx]){
      return false;
    }
    leftIdx++;
    rightIdx--;
  }
  return true
}

console.log(longestPalindromicSubstring(" "))//''
console.log(longestPalindromicSubstring("abacc"))//aba
console.log(longestPalindromicSubstring("anc")) //""
