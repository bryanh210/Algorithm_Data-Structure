// https://leetcode.com/problems/validate-binary-search-tree/

// Validate a binary search tree
// Assume a BST is defined as follows:
//
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


//pseudo: return boolean
// go to left, check if left < current, and current < right
// if any of that is false, return check = false;

function validBst(root){
let check = false;

  function traverse(current){
    if(! current.left || !current.right){
      return;
    }
    if(current.left < current || current.left < current.right || current < current.right){
      check;
    } else {
      check = true;
    }
  }

  traverse(root);

  return check;
}
