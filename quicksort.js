// compare pivot with a[i]. if a[i] is smaller, then put it to left of wall
// at the end, switch wall and pivot
// in place
function quickSort(input){
  function divide(start,end){
    let wall = start;
    let pivot = end;

    for(const i = start; i < end; i++){
      // smaller number goes to left before the wall
      if(arr[pivot] > arr[i]){
        [arr[i], arr[wall]] = [arr[wall], arr[i]];
        // increase wall. porque?
        // to keep the right track of the pivot when we swap wall and pivot
        wall ++;
      }
    }
    // at the end switching pivot and wall
    [arr[wall], arr[pivot]] = [arr[pivot], arr[wall]];

    // after switching wall and pivot, repeat the process for both left and right half
    divide(0, wall-1);
    // we don't want the wall, append it at the end
    divide(wall+1, end)
  }

  //first call
  divide(0, input.length-1);

  return input;

}
