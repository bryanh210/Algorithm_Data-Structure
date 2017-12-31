// Lowest Common Ancestor
// Given the root node of a binary tree and two distinct values, find the lowest common ancestor.
//
// Input:     Root Node, Two Integer Values
// Output:  Integer Value of Lowest Common Ancestor
// Example
// Input: root, 4, 9      	=>	Output: 7
//
// Constraints
// Time Complexity: O(N)
// Auxiliary Space Complexity: O(N)
//
// Integer values of nodes are all distinct.

// this example is reverse in order, but what if it's just random?
// best way?


// not treeNode()!



class treeNode{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const five = new treeNode(5);
const two = new treeNode(2);
const seven = new treeNode(7);
const four = new treeNode(4);
const eight = new treeNode(8);
const nine = new treeNode(9);


five.left = two;
five.right = seven;
seven.left = four;

seven.right = eight;
eight.right = nine;



function lca(root,num1, num2){
  let result = 0;
  const compareArr = [];


  function treeTraversal(current, target){

    if(current.value === target){
        compareArr.push(current.value);
        return;
    }


      //if number exists in current array,
      // return it

//       treeTraversal(current.value);
      compareArr.push(current.value);
      treeTraversal(current.left);
      treeTraversal(current.right);

  }


   treeTraversal(root,num1);

   treeTraversal(root,num2);


    console.log(compareArr);




}


console.log(lca(five,4,9))
// have to pass in a node, not a number
