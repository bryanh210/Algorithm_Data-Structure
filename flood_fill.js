FLOODFILL ALGORITHM:
SOLUTION HERE:
https://codeinterview.io/GXUUPFJOME


What if it connects dialoginally?
(x+1, y+1) etc.

If the starting coordinate is the new color, then we can just skip it


/*

input:
[[1,1,1],
 [1,1,0],
 [1,0,1]]

 x = 1
 y = 1
 new_color = 2


output:
[[2,2,2],
 [2,2,0],
 [2,0,1]]

Constraints: none

start_color = 1

[[2,2,2],
 [2,2,0],
 [2,0,1]]




Pseudocode

- Record start color (based off of initial x and y coordinates)
- Call recursive traversal starting from x_y coordinate
  - Base Cases: Off the matrix; at color that doesn't match start_color
  - As we encounter colors matching start_color, convert to new_color
  - Travel in all four directions and run recursive traversal function


*/


function fill_color(matrix, x_start, y_start, new_color) {
  let start_color = matrix[y_start][x_start];

  console.log(start_color);
  if (start_color === new_color) {
    return matrix;
  }

  function traverse(x, y) {
    if (x < 0 || y < 0 || x >= matrix[0].length || y >= matrix.length) {
      return;
    }
    if (matrix[y][x] !== start_color) {
      return;
    }

    matrix[y][x] = new_color;

    traverse(x, y - 1);
    traverse(x, y + 1);
    traverse(x + 1, y);
    traverse(x - 1, y);

    traverse(x - 1, y - 1);
    traverse(x + 1, y + 1);
    traverse(x + 1, y - 1);
    traverse(x - 1, y + 1);

  }
  traverse(x_start, y_start);

  return matrix;
}


//          x -->
let test = [[1, 1, 1, 1],
            [1, 1, 0, 1],
            [1, 0, 1, 1],
            [0, 0, 0, 0],
            [0, 1, 1, 1]]


console.log(test[3][0]);

let transformed_matrix = fill_color(test, 1, 1, 9);

console.log(transformed_matrix);

// console.log(fill_color(transformed_matrix, 1, 1, 3));
