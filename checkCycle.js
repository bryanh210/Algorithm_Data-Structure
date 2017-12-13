// check if a directed graph has cycle:



function DAGCycle(vertex){
  let stack = [vertex];
  let visited = new Set();
  let current;


  // put the current node into graph
  visited.get(vertex[0]);
  while(stack.length > 0){
    // after look left and right, add to the stack
    // it comes up and pop => start all over again
    current = stack.pop();

    if(current.left){
      // should current now = current.left?
      stack.push(current.left);
      if(visited.has(current.left)){
        // if current.left already exists in the set,
        // that means cycle exists
        return true;
      } else{
        visited.get(current.left)
      }
    }

    if(current.right){
      stack.push(current.right);
      if(visited.has(current.right)){
        // if current.left already exists in the set,
        // that means cycle exists
        return true;
      } else{
        visited.get(current.right)
      }
    }

//within the loop, check if it's true
// if there's no evidence it's a loop, return false
    return false;
  }
}
