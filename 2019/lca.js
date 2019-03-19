function LowestCommonAncestor (root, num1, num2) {
  let result = -1;

  let arr1 = [];
  let arr2 = [];

  let path = [];

  function ancestorPath (node) {
    if(node === null) {
      return;
    }
    path.push(node.value);
    // these are the base cases
    if(node.value === num1) {
      // make a copy of the path to save Space
      // so i don't have to make another arr
      // every time we find the target
      // as opposed to recurse(path + [node.val]): new copy
      // which takes up more space
      arr1 = path.slice();
    }

    if(node.value === num2) {
      arr2 = path.slice();
    }

    ancestorPath(node.left);
    ancestorPath(node.right);
    path.pop();
  }

  ancestorPath(root);


  let i = 0;

  while(arr1[i] === arr2[i]) {
    result = arr1[i];
    i++;
  }

  return result;
}
