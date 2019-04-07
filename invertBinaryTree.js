// use an inverted pre-prder traversal:

Visualize call stack here: https://www.youtube.com/watch?v=FtdyIHBaKjc
// read this for more info: https://stackoverflow.com/questions/9456937/when-to-use-preorder-postorder-and-inorder-binary-search-tree-traversal-strate
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values, i = 0) {
    if (i >= values.length) return;
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }

  invertedInsert(values, i = 0) {
    if (i >= values.length) return;
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left)
    }
    this.invertedInsert(values, i + 1);
    return this;
  }
}


function invertBinaryTree(tree){
	let result = [];
	function traverse(node){
		if(!node) return;
		result.push(node.value);
		console.log(result, 'result');
		let left = traverse(node.left);
		console.log(left, 'left');
		let right = traverse(node.right);
		console.log(right, 'right');
		// if I don't do node.left and node.right here, I'm merely changing the value of the variables left and right
		[node.left,node.right] = [node.right, node.left]
	}

	traverse(tree);
	return result;
}

const invertedTest = new BinaryTree(1).invertedInsert([2, 3, 4, 5, 6, 7]);

invertBinaryTree(invertedTest)
