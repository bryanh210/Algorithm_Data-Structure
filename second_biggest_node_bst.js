// Reverse In order:
// get the item at k-1
function find2ndlargest(root){
  let result =[];
  let count = 0;
  function traverseBST(node){
    if(!node) return;
    traverseBST(node.right);
    result.push(node)
    traverseBST(node.left);
  }
  return result[k-1]
}
