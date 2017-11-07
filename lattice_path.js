// Lattice path helper: how many possible path to go from the start to the end ( from top left to bottom right)
//
// traverse from top left to bottom right of a matrix
can only go up or down, no zig zagging

* Starting from the beginning:

function lattice_path(input){
  count = 0

  lattice_path)helper(x,y){
  if x = n and y = n;
  count +=1;
  return


  if x > n or y > n
  return (will return out of the first   lattice_path_helper(x+1, y) statement, then go to the second one latice_path_helper(x, y +1)})


  lattice_path_helper(x+1, y)
  latice_path_helper(x, y +1)}

  lattice_path_helper(0,0)

  return count;
}
}


*Starting from the end:
can't use count. Why? cuz in a pure recursion, you can't use count

function lattice_paths(x,y){
  if(x ==0 and y ==0){ return 1}
  // 0 meaning no path added
  if (x < 0 or y <0){ return 0}

  return lattice_paths(x-1, y) + lattice_paths(x, y -1)
}



// would be O(n) when I use memoization
// 2^n otherwise
