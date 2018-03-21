Input: int # of parenthesis
Output: [str] all valid presentations
ex:
1 -> ['()'];
2 -> [ '(())', '()()'];

O(n): n! (so n*n*n*n if its 4)
=> Exponential complexity

// draw out a tree
function balancedPermutations(n) {
  let result = [];


  function build(close, open, substr){

    if(close === 0 && open === 0) {
      // this goes fourth
      // eighth
      result.push(substr);
      console.log(substr, "substrfinal")
      return
    }

      else if(open === 0) {
        // this goes third
        //7th
        // as close decreases, add ')'
      build(close - 1, open, substr + ')');
        console.log(substr, 'substr3')

    }

    else if(open === close) {
      // this goes first
      // this goes fifth
      build(close, open - 1, substr + '(');
      console.log(substr, 'substr2')
    }

    else if(open < close) {
      // this goes second
      build(close - 1, open, substr + ')');
      console.log(substr, 'substr1-close')

      // this goes sixth
      build(close, open - 1, substr + '(');
      console.log(substr, 'substr1-open')
    }
  }

  build(n, n, "");

  return result;
}
