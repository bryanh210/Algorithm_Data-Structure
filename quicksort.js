
// in place
function quickSort(input){
  function divide(start,end){
    let wall = start;
    let pivot = end;

    for(const i = start; i < end; i++){
      // smaller number goes to left before the wall
      if(arr[pivot] > arr[i]){
        [arr[i], arr[wall]] = [arr[wall], arr[i]];
        // increase wall
        wall ++;
      }
    }
    // at the end switching pivot and wall
    [arr[wall], arr[pivot]] = [arr[pivot], arr[wall]];
    divide(0, wall-1);
    // we don't want the wall, append it at the end
    divide(wall+1, end)
  }

  //first call
  recurseSort(0, arr.length-1);
  
  return input;

}
