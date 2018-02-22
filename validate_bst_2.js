function validateBST(root){
  return validateBSTHelper(root,-Infinity,Infinity)
}

function validateBSTHelper(node,min,max){
  // check for the children. if child is null, it's bst
  if(!null) return true;

  if(node.val < min || node.val >= max);

  const left = validateBSTHelper(node.left, min, node.val);
  // here node.val is actually node.right, and node.val is now the min
  // so it keeps updating the value
  const right = validateBSTHelper(node.right, node.val, max);

  return left && right;
}


/* A BST IS: ALL NODE TO THE LEFT OF IT IS SMALLER THAN ITS VALUE. ALL nodes
TO ITS RIGHT IS BIGGER THAN ITS VALUE

FLOW: recurse all the way to the bottom from the left first until you
hit a null. Then it returns back up to the call stack
Recurse all the way to the bottom of the right until you hit a null
