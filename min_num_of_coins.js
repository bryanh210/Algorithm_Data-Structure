/*
Strategy:
Traverse thru the amount array and get the min between the current value and the amount - denom value +1
because 1 is the smallest possible min


In General: Solutions might not be obvious until I do some Math


*/

function minCoinChange(n,denoms){
  // n+1 places because we start from 0
  let numOfCoins = (new Array(n+1)).fill(Infinity);

  numOfCoins[0] = 0;
  for(const denom of denoms){
    for(let amount = 0; amount < numOfCoins.length; amount++){
      if(denom <= amount){
        // amount -denom: the number of coins to make 7 from 5
        // so 1+1 is 2 cuz we need 1 coin regardless
        numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount-denom] +1)
      }
    }
  }

  //numOfCoins[n], not n+1 because when we start from 0, index n is actually the end of the array

// if cant make combination with amount, then gives -1
  return numOfCoins[n] === Infinity? -1 : numOfCoins[n]

}

console.log(minCoinChange(7,[1,5,10]))
