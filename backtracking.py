# N - Queens



# start at the leftmost column
# base case: if all queens are placed, return true
# try all rows in the current column
# can the queen be placed safetly in this row, col position?
#          a) check columns to the left
#          b) check upper left
#          c) check bottom left
# if yes, mark the coordinate as a 1
# check recursively if placing the queen there would lead to solution


  board = [[0, 0, 0, 0],
           [1, 0, 0, 0],
           [0, 0, 0, 0],
           [0, 0, 0, 0]]




# A utility function to check if a queen can be placed
# on board [row][col]. Note that this function is called when "col"
# queens are already placed in columns from 0 to col - 1. So we
# only need to check the left side for attacking queens

def is_safe(board, row, col):

  for c in range(col):
    if board[row][col] == 1:
      return False
  for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
    if board[i][j] == 1:
      return False



def solve_NQ_util(board, col):
  return False


# This function solves the N Queen problem using
# Backtracking. It mainly uses solveNQUtil() to
# solve the problem. It returns false if queens
# cannot be placed, otherwise return true and
# placement of queens in the form of 1s.
# note that there may be more than one
# solutions, this function prints one  of the
# feasible solutions.
def solve_NQ():

  board = [[0, 0, 0, 0],
           [0, 0, 0, 0],
           [0, 0, 0, 0],
           [0, 0, 0, 0]]

  if solve_NQ_util is False:
    return False

  for row in range(len(board)):
    print(board[row])

  return True




# driver program to test function above. Takes in N,
# which is the dimension of the board.
solve_NQ()





# Credit given to Divyanshu Mehta from GeekforGeeks
