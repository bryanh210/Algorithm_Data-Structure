/*

capital permutations

input: string (all lowercase, a-z, no spaces, no punctuation)
output: array of strings

input: 'abc'
output: ['abc','ABC','Abc','aBc','abC','AbC','ABc','aBC']

input: ''
output: ['']



      0              ''
               /             \
      1       ''             'a'
          /       \       /        \
      2  ''       'b'    'a'      'ab'


      0              ''
               /             \
      1      'a'             'A'
          /       \       /        \
      2 'ab'     'aB'   'Ab'      'AB'


parenCombos

input: integer
output: array of strings

input: 3
output: ['((()))', '()()()', '(())()', '()(())', '(()())']


      0              ''
               /             \
      1      '('             ')'
          /       \       /        \
      2 '(('     '()'   ')('      '))'


time : O(2 ^ N)

*/

function parentCombos(int) {
  let result = [];

  function traverse(openBank, closeBank, build) {
    if (openBank === 0 && closeBank === 0) {
      result.push(build);
      return;
    }
    if (closeBank < openBank) {
      return;
    }
    if (closeBank < 0 || openBank < 0) {
      return;
    }

    traverse(openBank - 1, closeBank, build + '(');
    traverse(openBank, closeBank - 1, build + ')');

  }
  traverse(int, int, "");


  return result;
}


// console.log(parentCombos(3));







function mergesort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let middleIndex = Math.floor(arr.length / 2);

  let leftChunk = arr.slice(0, middleIndex);
  let rightChunk = arr.slice(middleIndex);

  let sortedLeft = mergesort(leftChunk);
  let sortedRight = mergesort(rightChunk);

  let result = [];

  let leftI = 0;
  let rightI = 0;

  while (leftI < sortedLeft.length && rightI < sortedRight.length) {
    if (sortedLeft[leftI] <= sortedRight[rightI]) {
      result.push(sortedLeft[leftI]);
      leftI++;
    } else {
      result.push(sortedRight[rightI]);
      rightI++;
    }
  }

  while (leftI < sortedLeft.length) {
    result.push(sortedLeft[leftI]);
    leftI++;
  }

  while (rightI < sortedRight.length) {
    result.push(sortedRight[rightI]);
    rightI++;
  }

  return result;



}


console.log(mergesort([3,1,9,5,4,7,2,6]));
