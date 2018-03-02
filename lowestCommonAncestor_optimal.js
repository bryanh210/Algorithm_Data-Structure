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


// console.log(five)




var lowestCommonAncestor = function(root, node1, node2) {

  if(root === null){ return null};

  if(root === node1 || root === node2){ return root}

  let left = lowestCommonAncestor(root.left, node1, node2);
  let right = lowestCommonAncestor(root.right, node1, node2);

// all the way to the left and all the way to the right we found nodes p and q
  if(left && right ){
     // p and q are on two different side of root node.
     return root
   };

   // if we cannot find the nodes on the left or right
  if(!left && !right) { return null};

  //else p or q is on the the same side
  // the result of left and right will be the "root" of left or right
  return left ? left : right

};

console.log(lowestCommonAncestor(five,four, nine))
console.log(lowestCommonAncestor(five,four))



/*

TRICK: WRITE OUT THE CALL STACKS
THE SECOND TIER OF THE CALL STACK IS LCA(5,6,5)
IT WILL ALSO GO TO THE LEFT FIRST AFTER IT GOES TO THE RIGHT ONCE BECAUSE THE RIGHT() GOES THROUGH FROM TOP DOWN OF THE FUNCTION
AGAIN, AND HIT LEFT FIRST

Strategy: if you found both p or q, that means left and right
aren't null, you return the node immediately before that (which
has become root now)

if left and right are both null, that means you cant find
either node, so you return null

If both failed, it means that you might have just entered in
1 item or the other item doesn't exist, so that item is itself's common ancestor

*NEW:
IF BOTH LEFT AND RIGHT RETURN UP, THAT'S THE ROOT



*/
