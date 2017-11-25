//Search a matrix to find a target value

//Brute force:
let matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]

//brute force

function traverseMatrix(matrix, target){
  // matrix.length is to loop through the row (x)
  for(let i = 0; i < matrix.length ; i++){
    // matrix[i].length is to loop through each item of
    //row (y)
    for(let j = 0; j <matrix[i].length; j++){
      if(matrix[i][j] === target){
        return true;
      }
    }
  }
  return false;
}

console.log(traverseMatrix(matrix,5))
