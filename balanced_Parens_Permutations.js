Input: int # of parenthesis
Output: [str] all valid presentations
ex:
1 -> ['()'];
2 -> [ '(())', '()'];

O(n): n! (so n*n*n*n if its 4)


function balancedPermutations(n) {
  let result = [];

  // GUYS, please stop highlight the code
  function build(close, open, substr){

    if(close === 0 && open === 0) {
      result.push(substr);
      return undefined;
    }

      else if(open === 0) {
      build(close - 1, open, substr + ')');

    }

    else if(open === close) {
      build(close, open - 1, substr + '(');
    }

    else if(open < close) {
      build(close - 1, open, substr + ')');
      build(close, open - 1, substr + '(');
    }
  }

  build(n, n, "");

  return result;
}

console.log(balancedPermutations(10))
