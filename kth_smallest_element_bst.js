

const kthSmallest = (root,k)=>{
  let res = []

  const dfs= (node,k) => {
    if(!node) return;
    dfs(node.left)
    res.push(node.val)
    dfs(node.right)
  }

  dfs(root,k);
  return res[k-1]
}
