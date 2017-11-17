// Solving fibonacci with tabulation


function fib(number){
    // initialize 2 base values in arr
    let initial =[0,1]

    for(let i = 2; i < number+1; i++){
        initial.push(initial[i-1] + initial[i-2]);
    }

    return initial[number];

}

console.log(fib(6))


Memoization:

//        fib(6)
//          (8)
//      /     \
//  fib(5)   fib(4)
//    (5)      (3)
//   /  \ 
//fib(4)fib(3)
//  (3)  (2)
// / \
//f(3)f(2)
//(2)   // 1
// / \
//f(2)f(1)
// 1    1


// cache = {2: 1, 3: 2, 4: 3}

// Memoization: breaking down big problem into smaller problems, store
// small problems in cache. make use of overlapping problems

// tabulation: use array or matrix

// indices: index of fib sequence
// at 0 index: return 0, at 1 index: return 1, then add 2 previous numbers
// together (smaller sub problems), then keep adding it

// [0, 1, 1, 2]
