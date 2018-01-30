/*Logic:
https://www.youtube.com/watch?v=TzeBrDU-JaY

1) break array down to individual element (division)
2) Then merge them together, whatever is smaller comes first
ex:
2 vs 4
left[0] < right[0]
result.push(left[0]), which is 2
then while(right.length) in this case, it pushes 4 in

Then it merge with the same logic up

Don't really need a divide array in reality
But it requires division so might just make it
*/


function mergeSort(arr){

  if(arr.length < 2) return arr;
  let mid = Math.floor(arr.length /2);
  let left = arr.slice(0,mid);
  let right = arr.slice(mid);

    return merge(mergeSort(arr.slice(0,mid)), mergeSort(arr.slice(mid)))

  function merge(left,right){
    let result = [];
    while(left.length && right.length){
      if(left[0] < right[0]){
        result.push(left.shift());
      } else{
        result.push(right.shift());
      }
    }

// this corresponds to  the second step above
    while(left.length){
      result.push(left.shift());
    }

    while(right.length){
      result.push(right.shift());
    }
    return result;
  }

}

console.log(mergeSort([1,4,2,7,-2]))


// Another form:

function mergeSort(input){

function divide(arr){
  if(arr.length < 2) return arr;
  let mid = Math.floor(arr.length /2);
  let left = arr.slice(0,mid);
  let right = arr.slice(mid);

    return merge(mergeSort(arr.slice(0,mid)), mergeSort(arr.slice(mid)))
}


  function merge(left,right){
    let result = [];
    while(left.length && right.length){
      if(left[0] < right[0]){
        result.push(left.shift());
      } else{
        result.push(right.shift());
      }
    }

// this corresponds to  the second step above
    while(left.length){
      result.push(left.shift());
    }

    while(right.length){
      result.push(right.shift());
    }
    return result;
  }

// have to write "return" here because the function mergeSort needs to return something
return divide(input);
}

console.log(mergeSort([1,4,2,7,-2]))
