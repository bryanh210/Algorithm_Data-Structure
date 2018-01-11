/*
Logic:
Cut off the string from beginning to end -1 and then put that last variable into every position possible"
Ex: input: ABC
A
AB, BA
ABC, ACB

There are 2 sets in this problem. One set containing the last item, one set is the result set

 */


function stringPerm(string){
  //base case.
  if(string.length <= 1) { return new Set(string)};
  // -1 is except the last character
  let allCharsExceptLast = string.slice(0,-1);
  let lastChar = string[string.length -1];

  let permuCharsOfAllExceptLast = stringPerm(allCharsExceptLast);

  let permSet = new Set();
  //forEach is to loop through set 1
  permuCharsOfAllExceptLast.forEach((item) =>{
    for(let position = 0; position <= item.length; position++){
      let permutation = item.slice(0,position) + lastChar + string.slice(position);
      permSet.add(permutation)
    }
  })

  return permSet;
}


console.log(stringPerm("cats"))
