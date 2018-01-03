// print out all the prime Numbers between 1 -> 10000
// prime number: number divided by itself & 1 only: 2,3,5,7,11,13,17
/*
Strategy:
Have a display function. Every time it has a prime Number it'll push it into
and array

Check Prime:
Prime rule: divided by itself and 1
so if it's divisible by another number, it's false

*/


function printPrime(limit){
  const prime = [2];

  for(let i = 2; i< limit; i+=2){
    if(checkPrime(i)){
      prime.push(i);
    }
  }
  console.log(prime)
}

function checkPrime(num){
  for(let i = 2; i< num; i++){
    if(num % i === 0){
      return false
    }
  }
  return true;
}

printPrime(100)
