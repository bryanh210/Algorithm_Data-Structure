function anagramPalindrome(word){
  let check = false;
  let frequencyCheck ={};
  // loop thru the string to count the number of frequency:
  for(let i = 0; i< word.length; i++){
    let char = word[i];
    if(!(char in frequencyCheck)){
      frequencyCheck[char] = 1;
    }else{
      frequencyCheck[char]++;
    }
  }

  //loop thru the object to count the number of frequency
  let count = 0;
  for(let i in frequencyCheck){
    if(frequencyCheck[i] % 2 !== 0){
      count++;
    }
  }

  return count >1? false: true
}


function anagramPalindrome(str) {
  const frequencyMap = new Map();
  for(let i = 0; i<str.length; i++) {
    const char = str[i];
    console.log(char);
    let freqCount;
    if(!frequencyMap.has(char)){
      frequencyMap[char] = 1;
    }else{
      freqCount++;
    }
  }
console.log(frequencyMap);

  let count = 0;
  for(let char in frequencyMap) {
    if(Map[char] % 2 !== 0) {
      count++;
    }
  }
  return count < 2;
}
console.log(anagramPalindrome('abc'));
console.log(anagramPalindrome("carac"));
console.log(anagramPalindrome("carab"));
