var mergeOrderArr = function (arr1,arr2){
    var result = [],
     i = 0,
     j = 0;

    while( i < arr1.length  && j < arr2.length ){

      if(arr1[i] <= arr2[j]){
//even if you push it in, the original array would not change
        result.push(arr1[i++]);
        // equivalent to pushing i in then increase after
        // if I want to push in i+1, I have to use ++1


      } else{

        result.push(arr2[j++]);

      }

    }
    console.log(j)
  return result.concat(arr1.slice(i)).concat(arr2.slice(j))

}



console.log(mergeOrderArr([1,100], [3,4,6,8]))



var mergeOrderArr = function (arr1,arr2){
    var result = [],
     i = 0,
     j = 0;

    while( i < arr1.length  && j < arr2.length ){

      if(arr1[i] <= arr2[j]){
//even if you push it in, the original array would not change
        result.push(arr1[i++]);
        // equivalent to pushing i in then increase after
        // if I want to push in i+1, I have to use ++1


      } else{

        result.push(arr2[j++]);

      }

    }
  // must have this line because if i and j of arr1[i] and arr[2] hit length in the loop, the loop will break
  return result.push(arr1.splice(i)).concat(arr2.splice(j))

}



console.log(mergeOrderArr([1], [0,2]))
