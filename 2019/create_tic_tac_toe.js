class TicTacToe {

  constructor(player) {
    this.board = new Board();
    this.player = player;
  }

  runGame() {
    //YOUR WORK HERE

    /* Start a New Game.
      Display the Empty Board.
      Announce current player is X.
      Prompt user to place a piece.
      Display the board after piece is placed.
      Announce current player is O.
    */
    this.board.printBoard();
    this.printCurrentPlayersTurn();
  }

  playRound(row, col) {
    //YOUR WORK HERE
  }

  printCurrentPlayersTurn() {
    console.log("Player turn " + this.player);
    console.log("Prompt user to place a piece.");

  }

  decrementRounds() {
    //YOUR WORK HERE
  }

  declareWinner(player) {
    if(this.board.checkWinCondtion(player)){
      console.log(`${player} is the winner`);
    }
  }

  declareTie() {
    //YOUR WORK HERE
  }

  printInvalidMove() {
    //YOUR WORK HERE
  }

  printCurrentMove(row, col) {
    //YOUR WORK HERE
    this.board.placePiece(row, col,this.player);
  }

  switchPlayer() {
    //YOUR WORK HERE
    if (this.player == 'X') { this.player ='O'}
    else { this.player = 'X' }
    this.printCurrentPlayersTurn(this.player)
  }

}

class Board {
  constructor() {
    //YOUR WORK HERE
    this.board = []
    for (let i = 0; i < 3; i++) {
      this.board.push(new Array(3).fill(' '))
    }
  }

  printBoard() {
    for (let row = 0; row < 3; row++) {
      console.log(this.board[row]);
    }
  }

  canPlacePiece(row, col) {

    if (this.board[row][col] === 'X' || this.board[row][col] === 'O') {
      return false;
    }
    return true
  }

  placePiece(row, col, player) {
    //YOUR WORK HERE

    /* if canplacepiece function is returning true,otherwise prompt player to try again */
    if (this.canPlacePiece(row, col)) {
      this.board[row][col] = (player === 'X') ? 'X':'O';
    }else{
      console.log("Please select another move");
    }

  }


  checkWinCondtion(player) {
    //YOUR WORK HERE
    //call checkDiagonals, checkRows, checkColumns

    if (this.checkDiagonals(player) || this.checkRows(player) || this.checkColumns(player)) {
      return true
    }

    return false
  }

  checkDiagonals(player) {
    //YOUR WORK HERE
    /*
     check if ([0][0] && [1][1] && [2][2] === player) return true
     check if ([0][2] or[1][1] or[2][0] === player) return true
     */
    if (this.board[0][0] === player && this.board[1][1] === player && this.board[2][2] === player) return true;
    if (this.board[0][2] === player && this.board[1][1] === player && this.board[2][0] === player) return true;

    return false
  }

  checkRows(player) {
    //YOUR WORK HERE
    if (this.board[0][0] === player && this.board[0][1] === player && this.board[0][2] === player) return true;

    if (this.board[1][0] === player && this.board[1][1] === player && this.board[1][2] === player) return true;

    if (this.board[2][0] === player && this.board[2][1] === player && this.board[2][2] === player) return true;

    return false
  }


  /*


  [ 'x', 'x', ' ' ]
  [ 'x, 'x', ' ' ]
  [ 'x', 'x', ' ' ]

  [0][0] == player
  [1][0] == player
  [2][0] == player

  [0][1] == player
  [1][1] == player
  [2][1] == player

  [0][2] == player
  [1][2] == player
  [2][2] == player



      check if ([0][0] && [1][0] && [2][0] === player) return true
      check if ([0][1] or [1][1] or [2][1] === player) return true
      check if ([0][2] or [1][2] && [2][2] === player) return true


  */
  checkColumns(player) {
    //player

   /*  Check all column in that row */
    if (
      (this.board[0][0] === player && this.board[1][0] === player && this.board[2][0] === player) ||

      (this.board[0][1] === player && this.board[1][1] === player && this.board[2][1] === player) ||
      (this.board[0][2] === player && this.board[1][2] === player && this.board[2][2] === player)
    ) {
      return true;
    }
    return false;
  }
}
// console.log(this.Board.checkColumns('X'));




// order
// 1. canPlacePiece
// 2. placePiece
// 3. checkDiagonals
// 3. checkRows
// 3. checkColumns

// Uncomment to run game:

// let game = new TicTacToe();
// game.runGame();

// let board = new Board();
// board.printBoard();
// console.log('------------------------')
// // board.placePiece(0, 0, 'X');
// // board.placePiece(0, 1, 'X');
// // board.placePiece(0, 2, 'X');
// board.placePiece(2, 2, 'X');
// board.printBoard();
// console.log(board.checkWinCondtion('X'));
//board.placePiece(0, 0, 'X');

let ticTacToe = new TicTacToe('X');
ticTacToe.runGame();
ticTacToe.printCurrentMove(0, 0);
