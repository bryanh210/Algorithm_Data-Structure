/*
has a pivot, wall, current
if pivot > current => put to the left of wall, meaning switch it with wall .
if pivot < current => leave it there
move the wall up, so that you wouldn't just switch back and forth
at the end, outside the loop, swap between pivot and wall
that's 1 pass.
then call it recursively  on 2 halves, call it on (start, wall -1), and (wall+1, end).
keep wall the same

divide (0, length -1)
return input


*/


function quickSort(arr){
  function divide(start, end){
    // base case:
    if(start >=end) return;
    let wall = start;
    let pivot = end;

    for(let i = start; i< arr.length-1; i++){
      if(arr[pivot] > arr[i]){
        [arr[i], arr[wall]] = [arr[wall], arr[i]];
        wall++;
      }
    }
    [arr[pivot], arr[wall]] = [arr[wall], arr[pivot]];
    divide(start, wall -1);
    divide(wall+1, end)
  }

  divide(0, arr.length-1)
  return arr;
}


quickSort([5,1,2,10])


function quickSort(arr){
  //will have a recursion
  // a wall, pivot, and current
  // loop starts at start
  // not at 0 because wall +1 will become the start
  // if arr[pivot] > current, swap current with the wall
  // then outside of the loop, swtich between pivot and the wall
  // call divide on itself (start, wall-1) and (wall+1, end). leave wall
  // then outside of them all, give start and end at (0 and arra.end)

  function divide(start,end){
    let wall = start;
    let pivot = end;

    for(let i = start; i< arr.length-1; i++){
      if(arr[pivot] > arr[i]){
        [arr[wall], arr[i]] = [arr[i], arr[wall]];
        wall++
      }
    }
      [arr[pivot], arr[wall]] = [arr[wall], arr[pivot]];
      divide(start, wall-1);
      divide(wall+1, end)
  }
  divide(0, arr.length-1)
  return arr

}
