/* Check if a tree is also a binary search three
Use DFS > BFS: why? Because DFS only has 1 level to travel at a time to find out there are more nodes nearby. BFS has to travel up and down the three
all the way to the top.
=> DFS is more space efficient
*/

function dfs(root){
  let result = [];

  function traverse(current){
    if(!current){return;}
    traverse(current.left);
    result.push(current);
    traverse(current.right);
  }
  traverse(root);
  return result;
}

function validateBST(root){

    if(!root){return;}
    let left = traverse(current.left);
    let right = traverse(current.right);

    return (left < current && right > current)
}









function dfs(root){
  let result = [];

  function traverse(current){
    if(current === null){ return}
    traverse(current.left);
    result.push(current);
    traverse(current.right)
  }
  traverse(node);
  return result;
}

//wrong
function checkBst(root){
  let stack = [];

  function checkAndTraverse(current){
    if(current === null){ return true}
    let left = checkAndTraverse(current.left);
    stack.push(current)
    let right = checkAndTraverse(current.right);

    if(left >= current || right <= current){
      return false;
    }
  }
  checkAndTraverse(root);
  return true;
}
