/*

first in
first out


 dequeue    -----------------------      enqueue
             (4) (5)
  <---      ----------------------       <---

(3)
         idx:   0 1 2
               [4,5]

value

[
  [0,0,0],
  [0,0,0],
  [0,0,0]
]

spiral matrix

input: 3

[
  [1,2,3],
  [8,9,4],
  [7,6,5]
]

   ----->
  [1,2,3],
  [0,0,0],
  [0,0,0]
do not touch the top row again


  [-,-,-],   |
  [-,-,4],   |
  [-,-,5]   \|/
do not touch the far right column again


  [0,0,0],
  [0,0,0],
  [7,6,0]
  <-----
do not touch the bottom row again


^  [-,-,-],
|  [8,-,-],
|  [-,-,-]
do not touch the left colunn again


   ----->
[
  [-,-,-],
  [-,9,-],
  [-,-,-]
]


rowMin = 0
rowMax = n - 1
colMin = 0
colMax = n - 1
create an N by N 0 filled matrix
counter = 1
while(rowMin <= rowMax && colmin <= colMax)
  on rowMin loop from colMin to colMax. col
    matrix[rowMin][col] = counter++
  rowMin++
  on colMax loop from rowMin to rowMax.  row
    matrix[row][colMax] = counter++
  colMax--
  on rowMax loop from colMax to colMin.  col
    matrix[rowMax][col] = counter++
  rowMax--
  on colMin loop from rowMax to rowMin.  row
    matrix[row][colMin] = counter++
  colMin++
return matrix

*/
