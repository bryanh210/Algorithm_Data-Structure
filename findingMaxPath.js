// binary tree


function maxDepth(node){
  if(!node) { return 0}
  else{
    //1 for the empty tree, or if the children are null then parents should be 0+0+1
    return Math.max(maxDepth(node.left),(node.right)) + 1;
  }
}



/*
recursion problem:
need base case: if(!node), return 0;
find maximum of things traversed on the left, and on the right.


*/
