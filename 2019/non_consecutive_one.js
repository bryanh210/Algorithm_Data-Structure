
# 230 - Non-Consecutive Ones

Given a positive integer `n`, return an array of all the binary strings of length n that *DO NOT* contain consecutive `1`s.

```
Input: n (Integer)
Output: [Str] (Array of Strings)
```

# Example

```
Input: 2
Output: ["00", "01", "10"]

Input: 3
Output: ["000", "001", "010", "100", "101"]
```

# Constraints

```
Time Complexity: O(2^N)
Auxiliary Space Complexity: O(2^N)
```

The order of the strings in the array does not matter.

Use recursion to solve this problem.

# Solution

*Key Insight:*

Use helper method recursion, similar to how you would generate all the bit strings of a given length, but only recurse with a `1` if there isn't a `1` at the preceding index.

 * 1) Initialize an empty array and return it at the end of the function

* 2) Initialize a helper method that takes a string, `substr`, as an input, and it invoked below with the empty string
  * a) If the length of `substr` is equal to `n`, push `substr` into the result array and return
  * b) Otherwise, invoke the helper function again with `substr + 0` as its argument
  * c) If the character at the last index of `substr` is a `0`, then recurse with `substr + 1`

# Code

```javascript
function NonConsecutiveOnes(n) {
  let result = [];

  function recurse(substr) {
    if(substr.length === n) {
      result.push(substr);
      return;
    }
    recurse(substr + 0);
    if(substr[substr.length - 1] !== "1") {
      recurse(substr + 1)
    }
  }

  recurse("");
  return result;
}


console.log(NonConsecutiveOnes(4));

```

# Resources
[Generate all Bit Strings with Non Consecutive 1s](https://www.geeksforgeeks.org/generate-binary-strings-without-consecutive-1s/)



*recursive tree (part of it)
""
/0
"0"
/"00" \1
/"000"  \"001"
/
