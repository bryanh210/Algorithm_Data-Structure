// //


// // max = 3

// // length = 3

// // length = 1

// // length = 2


// class TreeNode {
//   constructor(value){
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// //     1
// //   /    \
// //  2      3
// //        / \
// //       4   5
// //      /    /
// //     8     6
// //    /
// //   9
// //

// // output: 3


// let nine = new TreeNode(9);
// let eight = new TreeNode(8);
// let six = new TreeNode(6);
// let five = new TreeNode(5);
// let four = new TreeNode(4);
// let three = new TreeNode(3);
// let two = new TreeNode(2);
// let one = new TreeNode(1);

// one.left = two;
// one.right = three;
// three.left = four;
// three.right = five;
// four.left = eight;
// eight.left = nine;
// five.left = six;






// function largestPath(root){
//   let result = 0;

//   function dfs(current, depth){
//     if(current === null){ return ;}
//     if(depth > result) { result = depth;}
//       console.log("depth: ", depth);


//     dfs(current.left, depth+1);
//     dfs(current.right,depth+1);
//   }

//   dfs(root,1);

//   return result;
// }


// console.log(largestPath(one))





// //     5
// //   /    \
// //  3      9
// //        / \
// //       8   12
// //      /
// //     6
// //
// //
// //

// base case: if node is None: return




// pre_order = [1, 2, 3, 4, 8, 9, 5, 6] // root, left, right (parent comes first before child)
// post-order traversal = [2, 9, 8, 4, 6, 5, 3, 1]  // left, right, root (parents come first)
// lowest common ancestor problem -> post. if I find my children -> i'll return myself
// inorder traversal = [3, 5, 6, 8, 9, 12]
// in order: left child comes first (left, parent, right)
// on bst tree, in order -> always sorted
// bfs: level: left -> right [5,3,9,8,12,6]


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
    // if(! current) {return ;}
    // traverse(root.left)
    // result.append(root.value)
    // traverse(root.right)



  traverse(root);

  return check;
}
