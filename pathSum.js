/*
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

Caution: Even if there is a path where target matches the sum (26 = 10 +6), it still doesn't return true.
Why? Because it has to satisfy conditions that: 1) it's a leaf node (not in the case of 6), and 2) sum has to match

Target: 26
10
/ \
6   5
/   / \
-3  6  11

*/

function hasPathSum(root, sum){
  // since it's a recursion call, root will actually be root.left or root.right except the first time
  if(root === null){return false;}

  // check if it's a leaf node (meaning both left and right roots are null)
  if(root.left === null && root.right === null){
    // only if it's a leaf node, then check if this new root value is equal to sum or not
    // if(root.val === sum) return true. else return false
    return root.val === sum
  }

  // root.val here changes every time
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
}
