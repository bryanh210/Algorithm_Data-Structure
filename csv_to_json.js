function csvToJSON(str){

  let lines = str.split("\n");
  //because it's 1 big chunk. lines[0] is just that
  let spaces = lines[0].split(",");

  let result = [];
//   let hold = {};

//+=2 not =+2
//hold has to be inside the loop bc JS COMPLEX DATA STRUCTURE STORES REFERENCES, NOT THE ACTUAL
// ELEMENT, SO IT OVERWRITES THE OBJECT REFERENCE EVERY TIME THE LOOP RESETS
  for(let i=2; i < spaces.length -1; i+=2){
    let hold = {};
    hold[spaces[0]] = spaces[i];
    hold[spaces[1]] = spaces[i+1]


  }

  return JSON.stringify(result);

}

var str = "word, definition, \
smart, having or showing a quick –witted intelligence, \
gullible, easily persuaded to believe something, \
meticulous, showing great attention to detail";


console.log(csvToJSON(str))
