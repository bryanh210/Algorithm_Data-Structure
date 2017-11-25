//Search a matrix to find a target value

//Brute force:
let matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]

***Matrix.length here is 3!

//brute force

function traverseMatrix(matrix, target){
  // matrix.length is to loop through the row (x)
  //length -1
  for(let i = 0; i < matrix.length -1 ; i++){
    // matrix[i].length is to loop through each column (y)

    for(let j = 0; j <matrix[i].length; j++){
      if(matrix[i][j] === target){
        return true;
      }
    }
  }
  return false;
}

console.log(traverseMatrix(matrix,5))



Best way: runtime is O(n+m)

var searchMatrix = function(matrix, target) {
    // initialize to the first row: row = matrix.length-1
    let row = 0;
    // initialize to the first column: matrix[row].length-1
    let column = matrix[row].length -1;

    if(matrix.length === 0 || matrix[0].length ===0) { return false;}

  // while loop; column >=0 just to serve as condition
    while(row < matrix.length && column >= 0){
        if(target === matrix[row][column]) {return true;}
        else if(target > matrix[row][column]){ row++}
        else{
            column --;
        }

    }
    return false;

};


//next time: solve it in log(n) times
