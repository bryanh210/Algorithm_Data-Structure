/*
input: number
      3

output: matrix filled out as a spiral
      [
        [1,2,3],
        [8,9,4],
        [7,6,5]
      ]

time: N^2
space: N^2


matrix[0][0]

DIAGRAM:
   ----->
  [1,2,3],
  [0,0,0],
  [0,0,0]

we need to not touch matrix[0] after filling it out

  [1,2,3],   |
  [0,0,4],   |
  [0,0,5]   \|/

we need to touch matrix[variable][n - 1] == last column

  [1,2,3],
  [0,0,4],
  [7,6,5]
  <-------

we need to not touch the last row again

^
| [1,2,3],
| [8,0,4],
| [7,6,5]

we need to not touch the first column again


  [1,2,3],
  [8,9,4], ---->
  [7,6,5]



PSEUDO:

rowMin = 0
rowMax = n - 1
colMin = 0
colMax = n - 1
counter = 1
matrix = []

create the matrix:
loop from 0 to n - 1
  array
  loop from 0 to n-1
    push 0 into array

while rowMin <= rowMax and colMin <= colMax
  loop on rowMin from colMin to colMax.  col
    matrix[rowMin][col] becomes counter++
  rowMin++
  loop on colMax and from rowMin to rowMax.  row
    matrix[row][colMax] becomes counter++
  colMax--
  loop on rowMax from colMax to colMin.  col
    matrix[rowMax][col] becomes counter++
  rowMax--
  loop on colMin from rowMax to rowMin.  row
    matrix[row][colMin] becomes counter++
  colMin++

return matrix

*/

const spiralMatrix = (n) => {
  const matrix = [];
  let rowMin = 0,
    rowMax = n - 1,
    colMin = 0,
    colMax = n - 1,
    counter = 1;

  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill(0));
  }

  while (rowMin <= rowMax && colMin <= colMax) {
    for (let col = colMin; col <= colMax; col++) {
      matrix[rowMin][col] = counter++;
    }
    rowMin++;
    for (let row = rowMin; row <= rowMax; row++) {
      matrix[row][colMax] = counter++;
    }
    colMax--;
    for (let col = colMax; col >= colMin; col--) {
      matrix[rowMax][col] = counter++;
    }
    rowMax--;
    for (let row = rowMax; row >= rowMin; row--) {
      matrix[row][colMin] = counter++;
    }
    colMin++;
  }

  return matrix;
}

console.log(spiralMatrix(10));
