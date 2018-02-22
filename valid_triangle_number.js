/*
Given an array of positive integers, return the number of triangles that can be formed
with three different array elements as three sides of triangles.
For example, if the input array is {4, 6, 3, 7}, the output should be 3.
There are three triangles possible {3, 4, 6}, {4, 6, 7} and {3, 6, 7}.
Note that {3, 4, 7} is not a possible triangle.

sum of any two sides > third side




Example:
[4,6,3,7]

result set: [3,4,6], [3,6,7], [3,7,6]
=>[3,4,6,7]
Loop thru the array: 2 loops





[3,4,6,7]

Given a collection of objects (comparable). You need to support the following operations:
1. Lookup, add, delete objects
2. Min, max objects
3. Objects should be unique (no duplicates)

Select the most appropriate data structure.


*/




function numOfTriangles(arr){
    if(arr.length === 0){ return []};
    let possibleTriangle = new Set();
    let count = 0;

    //sort the arr
    let orderedArray = arr.sort();

    // check for all the numbers after

    for(let i = 0; i< orderedArray.length; i++){
        for(let j = i+1; j < orderedArray.length; j++){
            for(let z = j+1; z < orderedArray,length; z++){
                let sum = arr[i] + arr[j];
                if(sum > arr[z]){
                    if (!possibleTriangle.has([arr[i], arr[j], arr[z]]){
                        count++;
                        possibleTriangle.add([arr[i], arr[j], arr[z]])
                    }

                }
            }
        }
    }

  return count;
}

function numOfTriangles(arr){
    if(arr.length === 0){ return []};
    let possibleTriangle = new Set();
    let count = 0;

    //sort the arr
    let orderedArray = arr.sort();

    // check for all the numbers after
     // z - j -1
    for(let i = 0; i< orderedArray.length; i++){
        for(let j = i+1; j < orderedArray.length; j++){
            let difference = sum - arr[i]- arr[j]
            if(binarySearch(orderedArray, difference) !== 1){
              possibleTraingle.add(arr[i], arr[j], difference);
              count++
            }
   }

  return count;
}


function binarySearch(arr, target){
    let mid, start = 0, end = arr.length -1;

    while(start < end){
        mid = Math.floor((start+end))/2;
        if(target === arr[mid]){
            return mid;
        }else if(target < arr[mid]){
            end--
        }else{
            start++
        }
    }

    return -1;
}

console.log(numOfTriangles([4, 6, 3, 7]))
