Explanation:


// [[1, 1, 0],
//  [0, 1, 0]]


// Base Case:
// 1. Is current coordinate out of  bounds? return 0
// 2. Reaches the end of the matrix? return 1
// 3. Seen that coordinate before? return 0

// Pre-Order Action:
// Update the coord with 1
// Intialize a variable called sum to 0

// Changing directions requires us to return from the previous
// recursive call
// Recursive Calls
// 1. left ==> 0
// 2. right ==> 1
// 3. up ==>
// 4. down ==>

// Post-Order Action
// Add the sum from going left, right, up and down to sum
// Backtrack - revert the 1 on that coordinate to 0
// Return the sum

// Recursion Tree (visualization purposes)
//       (0, 0)
//      /   |
// (0, -1) (0, 1) sum = 1
//          | R
//         (0, 2)
//          return 1


// When recursion starts, it triggers adding the function call to the call stack.
// Call Stack = [r(0, 0), r(0, 1), r(1, 1), r(0, 1)]










/*
robot paths
input:
[
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
]
output: 38


base cases:
  if out of bounce return
  if we reach the end we return
  if we reach a 1 we return



[
  [1,1,1,1],
  [0,0,0,1],
  [0,0,0,1],
]

[
  [1,1,1,1],
  [0,0,1,1],
  [0,0,1,1],
]

   0 1
[
  [1,1,1,0],    row 0
  [0,0,1,0],
  [0,0,1,1],
]

[
  [1,1,1,0],    row 0
  [1,0,1,0],
  [1,1,1,1],
]


[
  [1,1,0,0],
  [0,0,0,0],
  [0,0,0,0],
]
['0.0',[0,1],[0,2]] this is a path.  we do not want to do this



[
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
]



counter = 0
helper(row, col)
  if row == matrix.length or row < 0 or col == matrix[0].length or col < 0
    return
  if we reach a 1
    return
  if we reach: row == matrix.length - 1 and col matrix[0].length - 1
    incriment counter
    return

  matrix[row][col] = 1;

  helper(row + 1, col)  up
  helper(row - 1, col) down
  helper(row, col + 1) right
  helper(row, col - 1) left
  matrix[row][col] = 0;

return counter


*/

const robotPaths = (matrix) => {
  let counter = 0;

  const robotMover = (row, col) => {
    if (row == matrix.length || row < 0 || col == matrix[0].length || col < 0) {
      return;
    }
    if (matrix[row][col] == 1) {
      return;
    }
    if (row == matrix.length - 1 && col == matrix[0].length - 1) {
      counter++;
      return;
    }

    matrix[row][col] = 1;

    robotMover(row + 1, col);
    robotMover(row - 1, col);
    robotMover(row, col + 1);
    robotMover(row, col - 1);
    matrix[row][col] = 0;
  };
  robotMover(0,0);

  return counter;
}


// console.log(robotPaths([[0,0,0,0],[0,0,0,0],[0,0,0,0]]));



/*
Spiral_Matrix

input: matrix
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

output: array
  [1,2,3,6,9,8,7,4,5]

    ------>
    [1,2,3]
    [-,-,-]
    [-,-,-]

we never touch the top again


    [-,-,-]   |
    [-,-,6]   |
    [-,-,9]  \|/

we never touch the right side again

    [-,-,-]
    [-,-,-]
    [7,8,-]
    <----
we never touch the bottom again


  ^ [-,-,-]
  | [4,-,-]
  | [-,-,-]

we never touch the left again


rowMin = 0
rowMax = matrix.length - 1
colMin = 0
colMax = matrix[0].length - 1

loop on rowMin from colMin to colMax.   col
  output.push(matrix[rowMin][col])
rowMin++

*/


Python:

#
# Target Practice 12 - Matrices
#
#
# Problem 1:  Robot Paths
#
# Prompt:   Given a matrix of zeroes, determine how many unique paths exist
#           from the top left corner to the bottom right corner
#
# Input:    An Array of Array of Integers (matrix)
# Output:   Integer
#
# Example:  matrix = [[0,0,0,0],
#                     [0,0,0,0],
#                     [0,0,0,0]]
#
#           robotPaths(matrix) = 38
#
#
#           matrix = [[0,0,0],
#                     [0,0,0]]
#
#           robotPaths(matrix) = 4

# Note:     From any point, you can travel in the four cardinal directions
#           (north, south, east, west). A path is valid as long as it travels
#           from the top left corner to the bottom right corner, does not go
#           off of the matrix, and does not travel back on itself

def robot_paths(matrix):
  num_of_rows = len(matrix)
  num_of_cols = len(matrix[0])

  def traverse(row, col):
    nonlocal num_of_rows
    nonlocal num_of_cols
    # is row and col in bounds?
    if row < 0 or row >= num_of_rows or col < 0 or col >= num_of_cols:
      return 0

    # has row, col already been visited?
    if matrix[row][col] == 1:
      return 0

    # is row, col the destination?
    if row == num_of_rows - 1 and col == num_of_cols - 1:
      return 1

    # mark coordinate as visited
    matrix[row][col] = 1

    # initialize sum of total unique paths to end from that coordinate
    s  = traverse(row, col + 1) + traverse(row + 1, col) + traverse(row - 1, col) + traverse(row, col - 1)

    # backtrack; mark coordinate as unvisited so it can be
    # used in another path
    matrix[row][col] = 0

    return s

  return traverse(0, 0)


# Problem # 2: Matrix spiral
#
# Given an (MxN) matrix of integers, return an array in spiral order.
#
# Input:  matrix {Integer[][]}
# Output: {Integer}
#
#
# Example:
# Input:  [[ 1, 2, 3],
#          [ 4, 5, 6],
#          [ 7, 8, 9]]
# Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
#
#

# Time Complexity:
# Auxiliary Space Complexity:

def matrix_spiral(input):
    pass

#############################################
########  DO NOT TOUCH TEST BELOW!!!  #######
#############################################

def expect(count, name, test):
    if (count == None or not isinstance(count, list) or len(count) != 2):
        count = [0, 0]
    else:
        count[1] += 1

    result = 'false'
    errMsg = None
    try:
        if test():
            result = ' true'
            count[0] += 1
    except Exception as err:
        errMsg = str(err)

    print('  ' + (str(count[1]) + ')   ') + result + ' : ' + name)
    if errMsg != None:
        print('       ' + errMsg + '\n')

def lists_equal(lst1, lst2):
    if len(lst1) != len(lst2):
        return False
    for i in range(0, len(lst1)):
        if lst1[i] != lst2[i]:
            return False
    return True

print('Robot Paths Tests')
test_count = [0, 0]


def test():
    matrix = [[0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0]]
    example = robot_paths(matrix)
    return example == 38


expect(test_count, 'should work on first example input', test)


def test():
    matrix = [[0, 0, 0],
              [0, 0, 0]]
    example = robot_paths(matrix)
    return example == 4


expect(test_count, 'should work on second example input', test)


def test():
    matrix = [[0]]
    example = robot_paths(matrix)
    return example == 1


expect(test_count, 'should work on single-element input', test)


def test():
    matrix = [[0, 0, 0, 0, 0, 0]]
    example = robot_paths(matrix)
    return example == 1


expect(test_count, 'should work on single-row input', test)


def test():
    matrix = [[0],
              [0],
              [0],
              [0],
              [0]]
    example = robot_paths(matrix)
    return example == 1


expect(test_count, 'should work on a 5 x 8 matrix input', test)


def test():
    matrix = [[0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0]]
    print("  Please be patient, test 6 may take longer to run")
    example = robot_paths(matrix)
    return example == 7110272


print('PASSED: ' + str(test_count[0]) + ' / ' + str(test_count[1]) + '\n\n')

print("\nMatrix Spiral")
test_count = [0, 0]


def test():
    matrix = [[]]
    example = matrix_spiral(matrix)
    return example == []


expect(test_count, 'should work on empty matrix input', test)


def test():
    matrix = [[1]]
    example = matrix_spiral(matrix)
    return example == [1]


expect(test_count, "should work on single element matrix input", test)


def test():
    matrix = [[1],
              [2],
              [3],
              [4],
              [5]]
    example = matrix_spiral(matrix)
    return example == [1, 2, 3, 4, 5]


expect(test_count, "should work on single column matrix input", test)


def test():
    matrix = [[1, 2],
              [4, 3]]
    example = matrix_spiral(matrix)
    return example == [1, 2, 3, 4]


expect(test_count, "should work on square matrix input", test)


def test():
    matrix = [[1, 2, 3, 4]]
    example = matrix_spiral(matrix)
    return example == [1, 2, 3, 4]


expect(test_count, "should work on single row matrix input", test)


def test():
    matrix = [[ 1,  2,  3],
              [ 4,  5,  6],
              [ 7,  8,  9],
              [10, 11, 12],
              [13, 14, 15]]
    example = matrix_spiral(matrix)
    return example == [1, 2, 3, 6, 9, 12, 15, 14, 13, 10, 7, 4, 5, 8, 11]


expect(test_count, "should work on 3 x 5 matrix input", test)


def test():
    matrix = [[  1,  2,  3,  4, 5],
              [ 12, 13, 14, 15, 6],
              [ 11, 10,  9,  8, 7]]
    example = matrix_spiral(matrix)
    return example == [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


expect(test_count, "should work on 5 x 3 matrix input", test)

print('PASSED: ' + str(test_count[0]) + ' / ' + str(test_count[1]) + '\n\n')
