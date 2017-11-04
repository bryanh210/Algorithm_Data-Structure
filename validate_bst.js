// https://leetcode.com/problems/validate-binary-search-tree/

// Validate a binary search tree
// Assume a BST is defined as follows:
//
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

Now: Write and test myself

// Traverse in-order
// base case: if current is null
//push them to an array
// check if they're in order
// if not, return false to break the loop

class node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let two = new node(2);
let one = new node(1);
let three = new node(3);
let five = new node(5);
let zero = new node(0);

two.left = one;
two.right = three;
three.right = five;
five.left = zero;

/*

//        2
//      /   \
//     1     3
//            \
//             5
//            /
//           0
// */


function validBst(root){
  let checkArray = [];

  function treeTraversal(current){

    if(!current){ return;}
    else{
      // go all the way left, when hits null, return back up (2->1)
    treeTraversal(current.left);
    // here push the current in (1)
    checkArray.push(current.value);
    // check right, null again, come back up to 1, come back up to 2
    treeTraversal(current.right);

    //at 2 now push 2 in, then go to all the way to right, null , push left (0)
    }

  }


treeTraversal(root);

console.log(checkArray);


}


validBst(two);

// result is [ 1, 2, 3, 0, 5 ]

// why stackoverflow?
// how to solve that?
