var mergeOrderArr = function (arr1,arr2){
    var result = [],
     i = 0,
     j = 0;

    while( i < arr1.length  && j < arr2.length ){

      if(arr1[i] <= arr2[j]){

        result.push(arr1[i++]);


      } else{

        result.push(arr2[j++]);

      }

    }
    console.log(result)
  return result.concat(arr1.slice(i)).concat(arr2.slice(j))

}



console.log(mergeOrderArr([1,100], [3,4,6,8]))
