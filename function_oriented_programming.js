GOOD WAY TO ABSTRACT WRITING CODE. ELIMINATE WET CODE.
WHEN YOU REFACTOR CODE, YOU DON'T HAVE TO CHANGE THE FUNCTIONS. IT SAVES TIME


function forEach(collection, callback) {
  if(collection.length === undefined) {
    for(let key in collection) {
      callback(collection[key], key, collection);
    }
  }

  return;

  for(let i  = 0; i < collection.length; i++) {
    callback(collection[i], i, collection);
  }
}

let arr = [1, 2, 3, 4, 5]

function cubePrint(element){
  console.log(element * element)
}

let arr = [1,2,3,4]

forEach(arr, cubePrint)

// It's FOP because you take in a call back function after the first arg: array

Can also take in objects:


let obj = {"a": 7, "b" : 19, "c": 1000}

// forEach(arr, function(element) {
//   console.log(element * element)
// })


// forEach(arr, cubePrint)

forEach(obj, function(key, value) {
  console.log("this is the key: " + key)
  console.log("this is the value: " + value)
})



function map(collection, callback) {
  let result = []

  for(let i  = 0; i < collection.length; i++) {
    result.push(callback(collection[i], i, collection));
  }
  return result
}

// map returns a new array
let result = map(arr, function(item) {
              return item % 2;})

HOW IT APPLIES TO TREES:

function TreeEach(node, callback) {
  if(node === null) {
    return;
  }
  callback(node);
  TreeEach(node.left, callback);
  TreeEach(node.right, callback);
}



function reverse(node) {
  [node.left, node.right] = [node.right, node.left]
}

console.log("before")
console.log(node4);

THIS LINE BELOW:
TreeEach(node4, reverse);



console.log("after")
console.log(node4);


function print(node) {
  console.log(node.val)
}


TreeEach(node4, print)


REST OF THE EXAMPLE:
function forEach(collection, callback) {
  if(collection.length === undefined) {
    for(let key in collection) {
      callback(collection[key], key, collection);
    }
  }

  return;

  for(let i  = 0; i < collection.length; i++) {
    callback(collection[i], i, collection);
  }
}

let arr = [1, 2, 3, 4, 5]

let obj = {"a": 7, "b" : 19, "c": 1000}

// forEach(arr, function(element) {
//   console.log(element * element)
// })


function cubePrint(element) {
  console.log(element * element * element)
}

// forEach(arr, cubePrint)

// forEach(obj, function(key, value) {
//   console.log("this is the key: " + key)
//   console.log("this is the value: " + value)
// })



function map(collection, callback) {
  let result = []

  for(let i  = 0; i < collection.length; i++) {
    result.push(callback(collection[i], i, collection));
  }
  return result
}


let result = map(arr, function(item) {
              return item % 2;})

console.log(result)

console.log(arr)



class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

let node1 = new TreeNode(1)
let node2 = new TreeNode(2)
let node3 = new TreeNode(3)
let node4 = new TreeNode(4)
let node5 = new TreeNode(5)
let node6 = new TreeNode(6)
let node7 = new TreeNode(7)

node4.left = node2
node2.left = node1
node2.right = node3
node4.right = node6
node6.left = node5
node6.right = node7


console.log(node4)



function TreeEach(node, callback) {
  if(node === null) {
    return;
  }
  callback(node);
  TreeEach(node.left, callback);
  TreeEach(node.right, callback);
}



function reverse(node) {
  [node.left, node.right] = [node.right, node.left]
}

console.log("before")
console.log(node4);
TreeEach(node4, reverse);
console.log("after")
console.log(node4);


function print(node) {
  console.log(node.val)
}


TreeEach(node4, print)
