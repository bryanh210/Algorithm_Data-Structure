1) The following code has a big problem:
We want to convert a csv to a json. Something like this:
"word, definition, \
smart, having or showing a quick –witted intelligence, \
gullible, easily persuaded to believe something, \
meticulous, showing great attention to detail";

->
[{"word":" smart"," definition":" having or showing a quick –witted intelligence"},
{"word":" gullible"," definition":" easily persuaded to believe something"},
{"word":" meticulous"," definition":" showing great attention to detail"}]

WHAT IS WRONG WITH THE FOLLOWING CODE? WHY DOES IT KEEP PRINTING OUT
[{"word":" meticulous"," definition":" showing great attention to detail"},
{"word":" meticulous"," definition":" showing great attention to detail"}
{"word":" meticulous"," definition":" showing great attention to detail"}]

WRONG CODE:
function test(str){
  debugger;
  let lines = str.split("\n");
  let spaces = lines[0].split(",");
  let result = [];
  let hold = {};
  for(let i=2; i < spaces.length -1; i+=2){
    hold[spaces[0]] = spaces[i];
    hold[spaces[1]] = spaces[i+1]
    result.push(hold)

  }

  return JSON.stringify(result);

}


-> answer is on line 24. JS stores a reference to the object, thats why every time
I push the object in, only a copy of the object reference is pushed in. So essentially
I modified the object every time I go through the loop

-> Correct code would be putting the 'hold' object inside the loop so a new object being
generated again every time the loop restarted, like below.
-> Also on line 25, its "+=2" not "=+2"

CORRECT CODE:

function test(str){
  debugger;
  let lines = str.split("\n");
  let spaces = lines[0].split(",");

  let result = [];
//   let hold = {};


  for(let i=2; i < spaces.length -1; i+=2){
    let hold = {};
    hold[spaces[0]] = spaces[i];



    hold[spaces[1]] = spaces[i+1]



    result.push(hold)

  }

  return JSON.stringify(result);

}

var str = "word, definition, \
smart, having or showing a quick –witted intelligence, \
gullible, easily persuaded to believe something, \
meticulous, showing great attention to detail";


console.log(test(str))



2) Why is lookup time in Hash table and Set O(1)?
Because of the hash function. When you hash, you put each item into
a bucket and there's only 1 way to do so going through that hash function.
So when you want to look up the item, it'll take the item and return the
index.
(Ascii number % length of array)


3) When to use bfs vs dfs?
Bfs: to find the shortest path cuz all the nodes that have distance X
to the source node are processed before all the nodes that have distance X+1


DFS: to check existence for a path
