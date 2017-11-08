Matrix Problem: recode it

traverse function is helper
2 loops

Input:
[[1,1,0,0,1]]
  [0,1,0,0,1]
  [1,1,0,0,0]
  [0,0,1,0,0]
  [0,0,0,1,1]]

// count island

output: 4

// matrix: [0][1] : that's the second item in the first array

function countIsland(matrix){
  traverse(x,y){
    if(x> matrix[0].length || x > = matrix.length || x<0 || y< 0){
      return;
    } else if(matrix[y][x] ===0){
      return;
    } else if(visited.get(x+'_'+y){
      return;
    })
  }

  for(let y = 0; y < matrix.length; y++){
    for(let x = 0; x <matrix[0].length; x++){
      visited.add(x+'_'+y)
    }
  }
  if(x===1){ call traverse}

  return count;

}
