/*
Logic: Split string by ''
Then 2 pointers to swap string at array[start] and [end]
increase start, decrease end
join string by ''
*/


function reverseStringInPlace(string){
  let stringArray = string.split('');
  let start = 0;
  let end = stringArray.length -1;

  while(start < end){
    [stringArray[start], stringArray[end]] = [stringArray[end], stringArray[start]];
    start++;
    end--;
  }

// join with a character. Without '', it'd be [g,o,d]
  return stringArray.join('');
}


console.log(reverseStringInPlace('dog'))
