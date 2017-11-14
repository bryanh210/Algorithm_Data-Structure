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
