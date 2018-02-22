

function calculateProcessingSeconds(arr){
  let lastSeen = new Set();

  let totalSec =0;

  for(let i = 0; i< arr.length; i++){
    let number = arr[i]
    if(lastSeen.has(number)){
//       let indexDiff = i - lastSeen[number];
//       totalSec += 1+ (number[i] - indexDiff)
      let waitTime = number;
      totalSec += waitTime + number;
    }else{
      totalSec++
    }
    lastSeen.add(number)
  }
  return totalSec;
}

console.log(calculateProcessingSeconds([3, 2, 3, 2]))
console.log(calculateProcessingSeconds([1, 2, 1, 2]))
