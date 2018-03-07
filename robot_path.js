when I go down, y increases, not decreases
=> y first, then x cuz y is inner array


class MyCode {
  public static void main (String[] args) {
    int[][] matrix = new int[200][1];
    System.out.println(RobotPaths.compute(matrix));
    System.out.println(RobotPaths.compute(matrix));
  }
}


/*

[[1,1,1] ,
 [0,0,0]]



*/

class RobotPaths {

  public static Integer count = 0;
  public static int[][] matrix;

  public static Integer compute(int[][] inpMatrix) {
    matrix = inpMatrix;
    traverse(0, 0);
    return count;
  }

  public static void traverse(int x, int y) {
    if (x < 0 || y < 0 || x >= matrix[0].length || y >= matrix.length) {
      return;
    } else if (matrix[y][x] == 1) {
      return;
    } else if (y == matrix.length - 1 && x == matrix[0].length - 1) {
      count++;
      return;
    }

    // we turn it to 1 so that we know not to step thru that path again
      //[y][x] cell is 1
    matrix[y][x] = 1;

    traverse(x+1, y);
    // with the example above, if it's out of bound for x
    // it will return back to the third (1) on line 1
    // then it will decrease to x-1 and see that we have been there (1)
    traverse(x-1, y);
    // so we return back to the first function. we see a 1
    // so we're gonna go down to y+1 (positive = increase for y)
    // here we hit the third base case, then we increase count
    // then now, we're going up from the beginning
    traverse(x, y+1);
    traverse(x, y-1);

    // turn it back to 0 so we can start fresh finding another path
    matrix[y][x] = 0;
  }


}
