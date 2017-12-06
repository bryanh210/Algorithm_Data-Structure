// binary tree

var minDepth = function(root) {
    if(root === null) {
        return 0;
    } else if(root.left === null && root.right === null) {
        return 1;
    }
        // if one child is null, don't even calculate it. calculate the other side and plus 1 to the end cuz empty tree has level of 1
        else if(root.left === null) {
        return minDepth(root.right) + 1;
    } else if(root.right === null) {
        return minDepth(root.left) + 1;
    } else {
        return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    }
};
