function findArrayQuadruplet(arr, s) {
  let low = 0;
  let high = arr.length -1;


  if(arr.length < 4){
    return [];
  }

  arr.sort();

  for(let i = 0; i < arr.length -1; i++){
    for(let j = i+1; j < arr.length -1; j++){
      low = j+1;
      let difference = s- (arr[i] + arr[j]);

      while(low < high){
        if(arr[low] + arr[high] < difference){
          low++
        } else if(arr[low] + arr[high] > difference){
          high --
        } else{
          return [arr[i], arr[j], arr[low], arr[high]]
        }
      }

    }

  }
  return [];
}
