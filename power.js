/*
Implement the power function of the base a and the expo b

pow(2,3) -> 8

x^-1 = 1/x^1
x^-2 = 1/x^2
int res = a^b Integer.MAX_VALUE

int in java is 32-bit
4 bytes
  01111111 11111111 11111111 11111111
                                    1

                                  2^31 -1

 a^b = (a^2)^(b/2)

*/

//pow(2,3): 2 * 2 *2

/* Pseudo code
 declare function(a,b)
  set result = 1;

  if(

  if(b === 0){
  return 1}

  if (b === 1){
  return a}



  b = 100
  b = 99

  a = a * a;
  b = b/2;
 loop through 2 to b:

  a = a* a;


  outside of loop, set result equal to a
  return result


  +23 2 + 3
  +*123 2*3 + 1
  int, double


  ----- example-----

 2^100 = 2^5 * 2 ^5 * 2^4
      = 32 * 32 * 16
      = 1024 *  16 = 16384


   a = a * a; (4)
  b = b/2; (50)

  50 -> 25 -> 12 or 13
            50
            |
            25
            /  \
          12   13
          /
          6
          /
          3
        /   \
        1    2
              \
              1


  recursive helper: b/ 2
  base case: b = 1;
  recursive case (if b isn't 1){
  if(b is odd)



 loop from 2 to 50:

  a = a* a;

  // 4^50 = result;

2^99 = (16384)/ 2 = 8192
  a = a * a; (4)
  b = b/2; (50)
 loop through 2 to b:

  a = a* a;


  a^b = (a^2)^(b/2)

time: log b
*/


function power(a,b){
  if(b === 0){
    return 1}
  else if (b === 1){
      return a}
  else{
    a = a *a;

    function dividedb(b){
      if(b =1){ return;}
      while(b > 1){
      if(b % 2 ===1){ b = Max.floor(b)}
      else{ b = b/2 }
      }

    }
    dividedb(b);

  for(let i = 2; i < b+1; i++){
    a = a*a;
  }

    result = a;
    return result;

}



    public long power(int a, int b) {
        if(b == 1){
            return a;
        }
        if(b == 0){
            return 1;
        }
        if(b < 0) {
            a = 1/a;
            b = Math.abs(b);
        }
        long half = power(a,b/2);
        if(b%2 == 0){
            return half*half;
        }
        else {
            return a*half*half;
        }
    }

    a =2 ; b = 10  4 * 4 * 2 * 4 * 4 * 2

  2^ 5 = 2^2 * 2^2 * 2
  2 ^ 7 = 2^3 * 2^3 * 2


  ((2^3)^3)^1

  half = power(2,7) 2*2*2 * 2*2*2 * 2
  half = power(2,3) 2*2*2
  half = power(2,1) 2


    half = power(2,5) 4 * 4 * 2
    half = power(2,2) -> 2 * 2
    half = power(2,1) -> 2


    a^b = a^2 * a^b/2


    T(n) = T(n/2) + 1 a = 1 b = 2 d = 0
                  a = b^d => O(lgb)


    T(n) = aT(n/b) + f(n) n^d

     T(b) = T(b/2) + 1
     a = 1; b = 2; d = 0
     a = b^d => O(b^dlogb) = O(logb)
}

squrt
