function fib(num){
  let memo = {};

  if(num < 0) { return new Error("Only positive number accepted")};
  if(num === 0 || num === 1){
    return num
  }

  if(memo.hasOwnProperty(num)){
    return memo[num]
  }

  let result = fib(num -1) + fib(num -2);
  memo[num] = result;

  return memo[num]


}
