// BFS: first you have a queue. The first node (vertex) is in the queue. Marked it as visited
// Once you pop it off, you check if it has children, push the children into the queue.
// Marked the children as visited


function bfs(vertex){
  let result = [];
  let queue = [vertex];
  let visited = new Set();
  let current;



  visited.add(queue[0]);

  while(queue.length > 0){
    // shift that node out
    current = queue.shift();

    if(current.left){
      queue.push(current.left);
      visited.add(current.left);
    }

    if(current.right){
      queue.push(current.right);
      visited.add(current.right;)
    }



      result.push(current)
  }
  return result;
}



function dfs(vertex){
  let result = [];
  let stack = [vertex];
  let visited = new Set();
  let current;


  while(stack.length > 0){
    current = stack.pop();

    if(current)
  }
}
