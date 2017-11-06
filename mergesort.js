// divide into 2 half
//merge

// return divide


function mergeSort(input){
  function merge(array1, array2){
    let result = [];
    const i;
    const j;
    const length = array1.length + array2.length;

    while(i + j < length){
      if(j > array2.length || (i < array1.length && array1[i] < array2[j])){
        result.push(array1[i]);
        i++;
      } else{
        result.push(array2[j])
        j++
      }
    }
    return result;
  }


  function divide(array){
    // base case: when there's only 1 item in the array
    if(array.length < 2){ return; }
    const mid = Math.floor(array.length /2);

    merge(array.slice(0, mid), array.slice(mid, array.length-1));
  }

// go here first
// return -> excute the function divide
// from divide, go into merge
// actually return "result"
  return divide(input);
}
