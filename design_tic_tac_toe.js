/*
Tic Tac Toe

Each player places an 'x' or 'o' in a 3x3 board until the
board is full or one player connects 3 of their pieces


1) Create a new board

2) Xs place their piece

  a) Check if the cell is valid first

3) Check for win condition

  a) Check current row
  b) Check current column
  c) if on either diagonal, check diagonal

4) Print Board

5) Os place thier piece

  a) Check if the cell is valid first

6) Check for win condition

7) Print Board

8) Repeat until win or all 9 slots filled



*/


let board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]


function choosePlayer(piece) {
  return function(x, y) {
    board[x][y] = piece;
  }
}

let placeX = choosePlayer("X") //(0,0let placeO = choosePlayer("O") //(1, 1)
let placeQ = choosePlayer("Q")


placeX(0,0)

placeO(1, 1)



console.log(board)
