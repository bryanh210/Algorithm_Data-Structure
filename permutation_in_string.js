function checkPermutation(str1, str2){
  let result = false;

  let frequencyCheck1 ={};
  // putting chars of str1 to hash
  for(let i=0; i< str1.length; i++){
    let char1 = str1[i];

    if(!(char1 in frequencyCheck1)){
      frequencyCheck1[char1] = 1;
    }else{
      frequencyCheck1[char1]++;
    }
  }

  // put chars of str2 to hash
  let frequencyCheck2 = {};
  for(let j=0; j< str2.length; j++){
    let char2 = str2[j];

    if(!(char2 in frequencyCheck2)){
      frequencyCheck2[char2] = 1;
    }else{
      frequencyCheck2[char2]++;
    }
  }


  


  return result;

}
