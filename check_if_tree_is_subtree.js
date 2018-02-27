// check if tree t is a subset of tree s
const isSubtree = (s,t) =>{
  if(!s) return false

  if(isIdentical(s,t)) return true
  //else
  return isSubtree(s.left, t)|| isSubtree(s.right,t)
}

const isIdentical = (s,t) =>{
  // if I jsut write !s without && t, it will return false instead of true
  // when there's a case like  line 14
  if(!s && t) return false;
  if(!t && s) return false;
  if(!s && !t) return true

  if(s.val === t.val){
    return isIdentical(s.left,t.left) && isIdentical(s.right, t.right)
  }
  //else return false
  return false
}


// So the way it works is:
// First, check if s is null. If it is, return false. If I don't check if
// it's null here, it won't be able to move to s.left
// Second, check if inputs are identical. if they are, return true.
// But if they are not, move to s.left and s.right to check
