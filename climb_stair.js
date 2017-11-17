Ex:Climb stairs
You can move up 1,2 or 3 stairs at a time
6 steps
Can climb up 1, 2 or 3 stairs
So how many unique way can we get to top of flight?

      6
    / |  \
  5   4   3
/ | \
4 3 2  1 2 1

base case: return number of ways
if(n === 0) return 1 // if it's 0 its considered 1 way, just in that case
if(n ===1), return 1
if( n ===2)  return 2

Recursive solution:
function climbStairs(input){

    function countWays(n){
        if (n === 0){
            return 1;
        } else if (n === 1){
            return 1;
        } else if (n === 2){
            return 2;
        }

        return countWays(n-1) + countWays(n-2) + countWays(n-3);
    }
    return countWays(input);
}


console.log(climbStairs(6));

Memoized solution:

function climbStairsMemo(input){
    let cache = {};

    function countWays(n){
      // if cache[n]
        if (cache[n] !== undefined){
            return cache[n];
        } else if (n === 0){
            return 1;
        } else if (n === 1){
            return 1;
        } else if (n === 2){
            return 2;
        }

        cache[n] = countWays(n-1) + countWays(n-2) + countWays(n-3);
        return cache[n];
    }
    return countWays(input);
}

console.time('MEMOIZATION: ');
console.log(climbStairsMemo(20));
console.timeEnd('MEMOIZATION: ');


if you have to jump up to steps, at odd number stairs (1,3,5), there are 0 steps to reach it


TABULATION: bottom up

function climbStairsTab(n, jumps){
    let result = new Array(n+1);
    result.fill(0);

    result[0] = 1;

    for (let i = 0; i < jumps.length; i++){
        for (let j = jumps[i]; j < result.length; j++){
            let sum = 0;
            for (let k = 0; k <= i; k++){
                sum += result[j - jumps[k]]
            }
            result[j] = sum;
        }
    }

    return result[n];
}

console.time('TABULATION: ');
console.log(climbStairsTab(20, [1,2,3]));
console.timeEnd('TABULATION: ');
 Approximately the same time as memoization

// Time for tabulation here is O(n * m) m is size of the jumps array
