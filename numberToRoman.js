// this is wrong. Why? Because key is store in object as string
function numberToRoman(num){
  let roman = '';
  let numberToRoman = {
    1000:"M",
    900:"CM",
    500:"D",
    400:"CD",
    100:"C",
    90:"XL",
    50:"L",
    40:"XL",
    10:"X",
    9:"IX",
    5:"V",
    4:"IV",
    1:"I",
  }

  for(let key in numberToRoman){
    while(num >= key){
      roman += numberToRoman[key]
      num = num -key;
    }
  }

  return roman
}

console.log(numberToRoman(1666))


function numberToRoman(num){
  let roman = '';
  let numberToRoman = {
  VMMMM:9000,
  VMMM: 8000,
  VMM:7000,
  VM: 6000,
  V: 5000,
  MMMM: 4000,
  MMM:3000,
  MM: 2000,
  M:1000,
  CM:900,
  D:500,
  CD:400,
  C:100,
  XC:90,
  L:50,
  XL:40,
  X:10,
  IX:9,
  V:5,
  IV:4,
  I:1
  }

  for(let key in numberToRoman){
    while(num >= numberToRoman[key]){
      roman += key;
      num = num -numberToRoman[key] ;
    }
  }

  return roman
}

console.log(numberToRoman(1666))


//With MAP:
function numberToRoman(num){
  let roman = '';
  let numberToRoman = {
  M:1000,
  CM:900,
  D:500,
  CD:400,
  C:100,
  XC:90,
  L:50,
  XL:40,
  X:10,
  IX:9,
  V:5,
  IV:4,
  I:1
  }

  for(let key in numberToRoman){
    while(num >= numberToRoman[key]){
      roman += key;
      num = num -numberToRoman[key] ;
    }
  }

  return roman
}

console.log(numberToRoman(1666))




Insight: If I write out the example with a small number, like 2 or 3, then I might be able to figure this out.
while(num >= numberToRoman[key]){
  roman += key;
  num = num -numberToRoman[key] ;
}
