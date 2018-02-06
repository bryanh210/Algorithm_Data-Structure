// use an inverted pre-prder traversal:
// read this for more info: https://stackoverflow.com/questions/9456937/when-to-use-preorder-postorder-and-inorder-binary-search-tree-traversal-strate

function invertBinaryTree(tree){
	let result = [];
	function traverse(node){
		if(!node) return;
		result.push(node.value);
		let left = traverse(node.left);
		let right = traverse(node.right);
		// if I don't do node.left and node.right here, I'm merely changing the value of the variables left and right
		[node.left,node.right] = [node.right, node.left]
	}

	traverse(tree);
	return result;
}
