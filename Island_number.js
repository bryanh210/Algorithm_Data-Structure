/*
General logic: Loop through y (matrix.length) and x (matrix[0].length)
If both of them === '1' => call the function. Every time it does, count goes up by 1

Function is basically dfs that checks if there are other 1s next to them.
Why use dfs? Because there's no actual "level" to be checked here. Just adjacent cells

At the end of all that, get the number of count and return it


*/


function numOfIsland(grid){

  for(let i = 0; i <grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
      if(grid[i][j] === '1'){
        traverseIsland(i,j,grid)
        count++
      }
    }
  }
  return count;
}


function traverseIsland(row, col, grid){
  let stack = [[row,col]];

  while(stack.length > 0){
    let current = stack.pop();
    let i = current[0];
    let j = current[1];

    if(i >=0 && i < grid.length && j >=0 && j<grid[0].length && grid[i][j]=== '1'){
      //change grid[i][j] to something else to be pop off
      grid[i][j] = '2';
      stack.push(grid[i+1,j]);
      stack.push(grid[i-1,j]);
      stack.push(grid[i,j+1]);
      stack.push(grid[i,j-1]);
    }
  }
}
