function findClosingParen(sentence, position){
  let track = 0;

  for(let i = position +1; i < sentence.length -1; i++){
    if(sentence[i] === '('){
      track ++;
    }
    else if( sentence[i] === ')'){
      if(track === 0){
        return i;
      } else{
        track --
      }
    }
  }

  throw "No closing parenthesis"
}


console.log(findClosingParen("()fuck", 0));
