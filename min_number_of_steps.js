for minimum number of steps: we only need to return the cache. Why? ( go thru the example: n = 6)

Why plus 1?-- ask


function minSteps(n){

//     let cache = {};

    function traverse(n){
//         if(cache[n] !== undefined) {
//             return cache[n];
//         }

        if (n === 1){
            return 0;
        }

        let steps = traverse(n - 1);

        if (n % 2 === 0){
            let stepsTwo = traverse(n / 2);
            steps = Math.min(steps, stepsTwo);
        }

        if (n % 3 === 0){
            let stepsThree = traverse(n / 3);
            steps = Math.min(steps, stepsThree);
        }
//         cache[n] = steps + 1;
//         return cache[n];
        return steps + 1;
    }

    return traverse(n);
}

console.time('memo')
console.log(minSteps(200))
console.timeEnd('memo')
