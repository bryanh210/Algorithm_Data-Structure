function largestPath(root){
  let result = 0;


//traversing
  dfs(current, depth){
    if(depth > result) { result = depth;}
    if(!current){ return ;}
    dfs(current.left, depth+1);
    dfs(current.right,depth+1)
  }

  dfs(root,1);

  return result;
}
