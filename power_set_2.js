function PowerSet(str) {
  let result = []; //Step 1

  function recurse(depth, substr) {
    console.log("Depth before depth === str.length ",depth);
    if (depth === str.length) {
      result.push(substr);
      console.log("result before return ",result);
      return;
    }
    // decide whether to add the current character at str[depth] in or not
    // this is with
    recurse(depth + 1, substr + str[depth]);
    // this is without
    recurse(depth + 1, substr);
  }

  recurse(0, "");
  return result;
}

PowerSet('abc');

/*
result = [abc, ab,'']
                             0 1 2
                             a b c
                        0 =  a
                            /  \
                     1 =   b
                          /
                    2 =  c

Depth will be backtracked to the previous return value
ALl values stored in a heap
    2
    1
    Link-> https://medium.com/fhinkel/confused-about-stack-and-heap-2cf3e6adb771


line 14 returns -> line 12 until the heap is popped out
*/


(Logic: depth)
