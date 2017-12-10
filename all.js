// Given an expression string exp , write a program to examine whether the pairs
// and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
// For example, the program should print true for exp = “[()]{}{[()()]()}”
// and false for exp = “[(])”


var isValid = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++){
        //if opening bracket
        if(s[i] === "(" || s[i] === "{" || s[i] === "["){
            stack.push(s[i]);
        }
        else if (s[i] === ')'){
            if(stack.pop() !== '('){
               return false;
            }
        }
        else if (s[i] === ']'){
            if(stack.pop() !== '['){
               return false;
            }
        }
        else if (s[i] === '}'){
            if(stack.pop() !== '{'){
               return false;
            }
        }
    }
    return !stack.length;
}
Binary Heap

                6
              /   \
            5      2
        /     \   /  \
      3         2 1   0
    /  \
  0     1



[6,5,2,3,2,1,0,0,1]
PARENT JUST HAS TO BE LARGER THAN BOTH CHILDREN

INSERT METHOD:
  insert(value): Time is O(n), insertion is O(1)
-> append value storage
-> buble up (last index)
return

BUBBLE UP METHOD(last index): time complexity is (log n)-- proportional to height of the tree
-> child: last index
-> use formula to find parents

while(parent > 0)
If child's index  is odd (closer to parent), then parent = (child-1)/2. If child's index is
even parent= (child-2)/2
Compare parent & child. If heap property is violated (if parent is smaller or bigger than child,
depending on whether it's min or max)
+) taking in parents and child reassign child to parent and recalculate parents' index


With all heaps you insert at the end


INSERT & REMOVE AT THE BEGINNING

*REMOVING AT THE BEGINNING

REMOVE METHOD: swap with whatever child is bigger, and put the biggest values on top, and recurisvely do console.log(require('util').inspect(
  , { depth: null }));


* REMOVING IN THE MIDDLE:
Switch the item and the last one in ther array
Pop that item of
Then check whether the item that we just swap with (not the deleted one) is in the right position
If not, then either do bubble up or bubble down
/*pseudocode:
have variable midpoint
min = 0; max = arr.length -1

condition is min >= max
+) if midpoint = target, return the index (guess)
=) if midpoint < target, search the right of midpoint by increasing the min to be search +1,
=) if midpoint < target, search the right of midpoint by increasing the min to be search +1,

return -1 if not found


*/

function binarySearch(arr,target){
  let guess, min = 0, max = arr.length-1;

  if(arr.length === 0) { return -1};

  while(min <= max){
    guess = Math.floor((min+max)/2);
    if(target === arr[guess]){
      return guess;
    } else if(target < arr[guess]){
      max = guess -1;

    } else if(target > arr[guess]) {
      min = guess + 1;
    } else{
      return -1;
    }
  }


}


console.log(binarySearch([], 4))

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 4))
//Bucket sort:


100 elements [ 0.52, 0.93, 0.01, 0.33] 00, 10

0, 0.1, 0.2, 0.3 .... 0.9, 1
Ex:Climb stairs
You can move up 1,2 or 3 stairs at a time
6 steps
Can climb up 1, 2 or 3 stairs
So how many unique way can we get to top of flight?

      6
    / |  \
  5   4   3
/ | \
4 3 2  1 2 1

base case: return number of ways
if(n === 0) return 1 // if it's 0 its considered 1 way, just in that case
if(n ===1), return 1
if( n ===2)  return 2

Recursive solution:
function climbStairs(input){

    function countWays(n){
        if (n === 0){
            return 1;
        } else if (n === 1){
            return 1;
        } else if (n === 2){
            return 2;
        }

        return countWays(n-1) + countWays(n-2) + countWays(n-3);
    }
    return countWays(input);
}


console.log(climbStairs(6));

Memoized solution:

function climbStairsMemo(input){
    let cache = {};

    function countWays(n){
      // if cache[n]
        if (cache[n] !== undefined){
            return cache[n];
        } else if (n === 0){
            return 1;
        } else if (n === 1){
            return 1;
        } else if (n === 2){
            return 2;
        }

        cache[n] = countWays(n-1) + countWays(n-2) + countWays(n-3);
        return cache[n];
    }
    return countWays(input);
}

console.time('MEMOIZATION: ');
console.log(climbStairsMemo(20));
console.timeEnd('MEMOIZATION: ');


if you have to jump up to steps, at odd number stairs (1,3,5), there are 0 steps to reach it


TABULATION: bottom up

function climbStairsTab(n, jumps){
    let result = new Array(n+1);
    result.fill(0);

    result[0] = 1;

    for (let i = 0; i < jumps.length; i++){
        for (let j = jumps[i]; j < result.length; j++){
            let sum = 0;
            for (let k = 0; k <= i; k++){
                sum += result[j - jumps[k]]
            }
            result[j] = sum;
        }
    }

    return result[n];
}

console.time('TABULATION: ');
console.log(climbStairsTab(20, [1,2,3]));
console.timeEnd('TABULATION: ');
 Approximately the same time as memoization

// Time for tabulation here is O(n * m) m is size of the jumps array
Dynamic programming

max_cons_sum

ex:
[-6,-5,3,7,9,-12]

Break down to smaller problem:
[-6,-5]
Current Maximum: -5
Maximum Sum: 11
	Current> Sum ,update max to be === sum


input: [6,5,3,7,9,-12,40]
output: 19

current_sum = arr[0];
max_sum = -00
for loop iterate through array
current_sum = max(current_sum + current element + current element)
max_sum = max(current_sum, max_sum)

return max_sum
// Solving fibonacci with tabulation


function fib(number){
    // initialize 2 base values in arr
    let initial =[0,1]

    for(let i = 2; i < number+1; i++){
        initial.push(initial[i-1] + initial[i-2]);
    }

    return initial[number];

}

console.log(fib(6))


Memoization:

//        fib(6)
//          (8)
//      /     \
//  fib(5)   fib(4)
//    (5)      (3)
//   /  \ 
//fib(4)fib(3)
//  (3)  (2)
// / \
//f(3)f(2)
//(2)   // 1
// / \
//f(2)f(1)
// 1    1


// cache = {2: 1, 3: 2, 4: 3}

// Memoization: breaking down big problem into smaller problems, store
// small problems in cache. make use of overlapping problems

// tabulation: use array or matrix

// indices: index of fib sequence
// at 0 index: return 0, at 1 index: return 1, then add 2 previous numbers
// together (smaller sub problems), then keep adding it

// [0, 1, 1, 2]
function findClosingParen(sentence, position){
  let track = 0;

  for(let i = position +1; i < sentence.length -1; i++){
    if(sentence[i] === '('){
      track ++;
    }
    else if( sentence[i] === ')'){
      if(track === 0){
        return i;
      } else{
        track --
      }
    }
  }

  throw "No closing parenthesis"
}


console.log(findClosingParen("()fuck", 0));
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
// binary tree


function maxDepth(node){
  if(!node) { return 0}
  else{
    //1 for the empty tree, or if the children are null then parents should be 0+0+1
    return Math.max(maxDepth(node.left),(node.right)) + 1;
  }
}



/*
recursion problem:
need base case: if(!node), return 0;
find maximum of things traversed on the left, and on the right.


*/
//Flatten nested object
// using helper recusrion

// Pseudo:
// function flattenObject(obj){
//   //result = {}
//
//
// //substring at the beginning is ''
// // then afterward it's each of the inner objects
// // substring is what's gonna build out the string:
// {.a.b etc}
//   funct helper(substring, obj){
//     if(obj[key] is number){
//       result[substring + '.' + key] = Obj[key];
//       return
//     } else{
//       helper(substring + key, O[key])
//     }
//   }
// }


function flattenObj(obj) {
    let result = {};

    function recurse(substr, o) {

        for(let key in o) {
            let newKey;
            if(substr.length === 0) {
                newKey = key;
            } else {
                newKey = substr + '.' + key;
            }
            if(typeof o[key] === "number") {
                result[newKey] = o[key]
            } else {
                recurse(newKey, o[key])
            }
        }

    }

    recurse('', obj);

    return result;
}

let test = {
    a: { b : 1,
         c : 2},
    d: { x : {
            y: 5,
            z: 6
        },
        w: 7
       },
    e: 8,
    o: 9

}

console.log(flattenObj(test))
function getDifferentNumber(arr){
  debugger;
  let compare = new Set();

  for(let i = 0; i< arr.length -1; i++){
    compare.add([arr[i]])
  }

  for(let i = 0; i< arr.length -1 ; i++){
    if(compare.has(i) === false){
      return i;
    }
  }

  return n;
}

console.log(getDifferentNumber([0,1,2,3]))
Getting a Different Number

Given an array arr of unique nonnegative integers, implement a function getDifferentNumber that finds the smallest nonnegative integer that is NOT in the array.

Even if your programming language of choice doesn’t have that restriction (like Python), assume that the maximum value an integer can have is MAX_INT = 2^31-1. So, for instance, the operation MAX_INT + 1 would be undefined in our case.

Your algorithm should be efficient, both from a time and a space complexity perspectives.

Solve first for the case when you’re NOT allowed to modify the input arr. If successful and still have time, see if you can come up with an algorithm with an improved space complexity when modifying arr is allowed. Do so without trading off the time complexity.

Analyze the time and space complexities of your algorithm.

Example:

input:  arr = [0, 1, 2, 3]

output: 4
Constraints:

[time limit] 5000ms

[input] array.integer arr

1 ≤ arr.length ≤ MAX_INT
0 ≤ arr[i] ≤ MAX_INT for every i, 0 ≤ i < MAX_INT
[output] integer


Strategy:
Find smallest possible number that is not continuous and plus 1

Find the smallest number possible that is not continuous
Push that into a smallest
Loop through the array, push 1 for every number, push them into smallest

compare set and arr, return the missing number

edge case: arr.length <2 && arr[0] !== 0, return 0
Traverse through a graph and return the new value at each node as a result of a callback function

Input(Vertex, cb)
Output: Graph

  Ex:
  1
  \  \   \
  2-  3 - 4


  Function graphMap(vertex, cb){
   // get a Seen set
   // if item is in the Seen, don't need to reperform the operation


  traverseGraph(vertex){
    if(! vertex.edge) { return}
    vertex.value = cb(vertex.value);

    // loop through a vertex.edges
      traverseGraph(vertex.edges)
  }
  }

  Edges hash:
  {1: vertex 2
  3: vertex 4}
//Building out a heap

class Minheap{
  constructor(){
    this.storage = [];

  }
}
//lol

peak(){
  return this.storage[0];
}
size(){
  return this.storage.length;
}
swap(i1,i2){
  [this.storage[i1], this.storage[i2]= [this.storage[i2], this.storage[i1]];
}

insert(val){
  // push it to the array for breadth-first most position
  this.storage.push(val);
  this.bubbleUp(this.size() -1)
}


getParent(child){
  if(child % 2 === 0){
    return (child -2) /2;
  } else{
      return (child -1) /2;
  }
}


// we both bubble up and down like in the array, and swap along the way to meet the condition
bubbleUp(){
  let parent = this.getParent(child);

// condition is parent < child
  while( child > 0 && this.storage[child] < this.storage[parent]){
    this.swap(child, parent);
    child = parent;
    parent = this.getParent(child)
  }
}

removePeak(){
  this.swap(0, this.size() -1);
  let result = this.array.pop();
  this.bubbleDown(0);
  return result;
}

getChild(parent){
  // choose the smaller of the 2 children to swap with
  let child1 = 2 * parent +1;
  let child2 = 2 * parent +2;


// if child1 is out of bound
  if(child1 >= this.size()){
    // return child1 here then error handling later in bubbledown because I cannot just
    // return out of the function. Other bubbledown has to happen too
    return child1;
  } else (child2 >= this.size){
    return child1
  } else if(this.storage[child1] < this.storage[child2]){
    return child1;
  } else{
    return child2;
  }
}

bubbleDown(parent){
  let child = this.getChild(parent);
  // if child is less than size of the array
  while(child < this.size() && this.storage[parent] > this.storage[child]){
    this.swap(child, parent);
    parent = child;
    child = this.getChild(parent);
  }
}





let test = new Minheap();

test.storage = [5,6,7,8,9]

console.log(test);
test.swap(0,3);
console.log(test)



//Ron's answer:
class Minheap{
    constructor(){
        this.storage = [];
    }

    peak(){
        return this.storage[0];
    }

    size(){
        return this.storage.length;
    }

    swap(i1, i2){
        [this.storage[i1], this.storage[i2]] = [this.storage[i2], this.storage[i1]];
    }

    insert(val){
        this.storage.push(val);
        this.bubbleUp(this.size() - 1);
    }

    getParent(child){
        if (child % 2 === 0){
            return (child - 2) / 2;
        } else {
            return (child - 1) / 2;
        }
    }

    bubbleUp(child){
        let parent = this.getParent(child);

        while (child > 0 && this.storage[child] < this.storage[parent]){
            this.swap(child, parent);
            child = parent
            parent = this.getParent(child);
        }
    }

    removePeak(){
        this.swap(0, this.size() - 1);
        let result = this.storage.pop();
        this.bubbleDown(0);
        return result;
    }

    getChild(parent){
        let child1 = 2 * parent + 1;
        let child2 = 2 * parent + 2;

        if (child1 >= this.size()){
            return child1;
        } else if (child2 >= this.size()){
            return child1;
        } else if (this.storage[child1] < this.storage[child2]){
            return child1;
        } else {
            return child2;
        }
    }

    bubbleDown(parent){
        let child = this.getChild(parent);

        while (child < this.size() && this.storage[parent] > this.storage[child]){
            this.swap(child, parent);
            parent = child
            child = this.getChild(parent);
        }
    }

    remove(){

    }

}


let test = new Minheap();

// test.storage = [5,6,7,8,9]

test.insert(5);
test.insert(8);
test.insert(1);
test.insert(10);
test.insert(7);
test.insert(12);
test.insert(9);
test.insert(2);

console.log(test);
console.log(test.removePeak());
console.log(test);
console.log(test.removePeak());
console.log(test);
console.log(test.removePeak());
console.log(test);
console.log(test.removePeak());
console.log(test);
console.log(test.removePeak());
console.log(test);
console.log(test.removePeak());
console.log(test);
console.log(test.removePeak());
console.log(test);
console.log(test.removePeak());
console.log(test);
# heap sort
# want to sort the array.

// heap sort: time: nlogn. Space: O(n)
// heap: as long as children < parent, it's good. no need to compare each child

function heapSort(arr){
 heap.length = 1;
 // length is to keep track of the length when we add an item in
 // if heap has at least 1 item, it's valid

  // child = index of child
      getparent(child){
          return Math.floor((child - 1) / 2);
      }

  [1,3,6]

      getChild(parent){
         let left = parent * 2 + 1;
         let right = parent * 2 + 2;
         //if max heap
         if(left >= heap.length-1 || arr[left] >= arr[right]){
           return left;
         } else {
           return right;
         }
      }

      bubbleUp(){

      }


// whatever you insert in the arrayy's gonna start at the bottomost position.
// swap with the parent, then recursively swap it with the parent till getting to the top
// when insert: have to increase heap length by 1 cuz I have an extra item
// but why do we care about the heap length at all?
// heap.length increases by 1. heap length is where the bubbled down item is at
      insertion(){

      }

// for remove, swap what at the beginning and what's at the end, then decrement length of heap,
// then bubble down for every single item of the array to sort them in the right order again
// so put that in a while loop

}


# input:  [1, 16, 5, 30, 27, 17, 20, 2, 57, 3, 90]

# output: [1, 2, 3, 5, 16, 17, 20, 27, 30, 57, 90]


# Converting unsorted array into max heap
# Removing peek of max heap and adding to array
# return sorted array



#  1
# 3

# array = [1, 3, 5]
#         heap arr
# heap length = 2







# heap sort
# want to sort the array.


# input:  [1, 16, 5, 30, 27, 17, 20, 2, 57, 3, 90]

# output: [1, 2, 3, 5, 16, 17, 20, 27, 30, 57, 90]


# Converting unsorted array into max heap
# Removing peek of max heap and adding to array
# return sorted array



#  1
# 3

# array = [1, 3, 5]
#         heap arr
# heap length = 2



# input = [5, 3, 1]
#                h  a

#   5
#  3 1




def heap_sort(arr):


    heap_length = 1


    def get_parent(child):
        if child % 2 != 0:
            return (child - 1) // 2
        else:
            return (child - 2) // 2


    def get_child(parent):
        left = 2 * parent + 1
        right = 2 * parent + 2
        if left >= heap_length - 1 or arr[left] > arr[right]:
            return left
        else:
            return right

    def swap(a, b):
        arr[a], arr[b] = arr[b], arr[a]


    def bubble_up():
        child = heap_length - 1
        parent = get_parent(child)
        while child > 0 and arr[parent] < arr[child]:
            swap(parent, child)
            child = parent
            parent = get_parent(child)



    def bubble_down():
        parent = 0
        child = get_child(parent)
        while child < heap_length and arr[parent] < arr[child]:
            swap(parent, child)
            parent = child
            child = get_child(parent)



    def insert():
        # increment the heap length
        nonlocal heap_length
        heap_length += 1
        bubble_up()


    def remove():
        nonlocal heap_length
        arr[0], arr[heap_length - 1] = arr[heap_length - 1], arr[0]
        heap_length -= 1
        bubble_down()
        pass

    while heap_length < len(arr):
        insert()

    while heap_length > 1:
        remove()

    return arr


# Test on function at the bottom.

print(heap_sort([1, 16, 5, 30, 27, 17, 20, 2, 57, 3, 90]))
// Insertion sort:
//
// Insertion: First element is considered sorted. Other elements just needed to be put in place
// Good for arrays with less than 10 items


function insertionSort(input) {
  for (let i = 0; i < input.length; i++) {
    let temp = input[i];
    let pointer = i;
    while (pointer > 0 && temp < input[pointer - 1]) {
      input[pointer] = input[pointer - 1];
      pointer--;
    }
    input[pointer] = temp;
  }
  return input;
}
// check if the string is in the set
// Given a set of strings, e.g. {“one”, “two”, “four”}, and a target string, e.g. “fouroneone”, return true if the target string is composed of elements from the set.



function isStringInSet(set,target){
  let result = true;

  let keepTrack = '';

  if (target.length === 0 || set.length === 0){ return false;}

  for(let i = 0; i< target.length; i++){
     keepTrack = keepTrack + target[i];
    if(!set.has(keepTrack)){
        result = false

        console.log(keepTrack);
    } else{
      // this is in the case that the set hand
      // {"four", "one", "on", "two"}
      // 'one' will be counted as 'on' and return false
      result = isStringInSet(set, target.substring(i, target.length));

      keepTrack = '';
      console.log(keepTrack);
    }
  }


  return result;
}
//  var mySet = new Set();

// mySet.add(1); // Set { 1 }
// mySet.add(5); // Set { 1, 5 }
// mySet.add(5); // Set { 1, 5 }

{"one", "on", "two", "four"}

let exampleSet = new Set();
exampleSet.add("one");
exampleSet.add("on");
exampleSet.add("two");
exampleSet.add("four");

// 'o' -> 'on' -> 'one'


let exampleTarget = "fourone";

let exampleTarget1 = "fouroneon";

console.log(isStringInSet(exampleSet, exampleTarget))
console.log(isStringInSet(exampleSet, exampleTarget1))



// handling edge case: ('on', "one") -> double counted
var wordBreak = function(s, wordDict) {
    if(wordDict === null || wordDict.size === 0) {
        return false;
    }

    var possible = [];
    possible[0] = true;

    for(var i = 0; i < s.length; i++) {
        if(possible[i]) {
            for(var j = i + 1; j <= s.length; j++) {
                var str = s.substring(i, j);
                if(wordDict.has(str)) {
                    possible[j] = true;
                }
            }
        }
    }

    return possible[s.length] === true;
};
// http://www.geeksforgeeks.org/kth-largest-element-in-bst-when-modification-to-bst-is-not-allowed/

// pseudo:
// result = 0;
//traversing in reverse in-order
// push to an array
// look up k by index
// return result at the end

function kthLargest(node){
  let result = 0;
  
}
function largestPath(root){
  let result = 0;


//traversing
  dfs(current, depth){
    if(depth > result) { result = depth;}
    if(!current){ return ;}
    dfs(current.left, depth+1);
    dfs(current.right,depth+1)
  }

  dfs(root,1);

  return result;
}
// Lattice path helper: how many possible path to go from the start to the end ( from top left to bottom right)
//
// traverse from top left to bottom right of a matrix
can only go up or down, no zig zagging

* Starting from the beginning:

function lattice_path(input){
  count = 0

  lattice_path)helper(x,y){
  if x = n and y = n;
  count +=1;
  return


  if x > n or y > n
  return (will return out of the first   lattice_path_helper(x+1, y) statement, then go to the second one latice_path_helper(x, y +1)})


  lattice_path_helper(x+1, y)
  latice_path_helper(x, y +1)}

  lattice_path_helper(0,0)

  return count;
}
}


*Starting from the end:
can't use count. Why? cuz in a pure recursion, you can't use count

function lattice_paths(x,y){
  if(x ==0 and y ==0){ return 1}
  // 0 meaning no path added
  if (x < 0 or y <0){ return 0}

  return lattice_paths(x-1, y) + lattice_paths(x, y -1)
}



// would be O(n) when I use memoization
// 2^n otherwise
//Lattice path:
go from bottom right to top left bc we know the end point (0,0)

(0,0)


          (n,n)


Moemoizatio n reduces time complexity from O(2^n) to O(n)


lattice_paths(x,y,cache:None)
if cache is None, initialize it {0,0): 1}

if x < 0 or y < 0,

// if we go out of bound we have to bring it back to get to 0 (the end)
  return 0

  if(x,y)  in cache
  return cache[(x,y)]
  cache[x,y] = lattice_paths(x-1, y) + lattice_path(x, y-1)


return cache([x,y]), cache
// Reverse a linked list
// Singly and Doubly Linked list reversal



//
//
//  a --> b --> c   Null

p (null) c (head) null


// a | a.next b| b.next c|c.next
//  a.next |a b.next |b c.next |c
// prev current
// prev| prev.next current |current.next
// prev.next |prev current.next    |current
// current.next|current prev.next     | prev

// not every linked list has the tail

// null.next would error



Representation of the code:
      a -> b -> c
prev  a -> b -> c
prev  a prev b -> c
a    a  prev b -> c
a    <- prev b -> c



function reverseLinkedList(sll){
    const prev = null;
    const current = sll.head;

    while(current){
        // order matters here
        current.next = prev;
        prev = current;
        current = current.next;

    }
    // set our prev to head cuz when current hits null, the previous
    // node is the head
    prev = sll.head;


return sll; 
}


    if c === null => prev is head
                    p        c
       p <--c.next
        p
    c.next
    p  c
//     a --> b --> c --> Null


    // doublyy linked list: can traverse both ways



         p   c

    //     a --> b --> c --> Null
// Lowest Common Ancestor
// Given the root node of a binary tree and two distinct values, find the lowest common ancestor.
//
// Input:     Root Node, Two Integer Values
// Output:  Integer Value of Lowest Common Ancestor
// Example
// Input: root, 4, 9      	=>	Output: 7
//
// Constraints
// Time Complexity: O(N)
// Auxiliary Space Complexity: O(N)
//
// Integer values of nodes are all distinct.

// this example is reverse in order, but what if it's just random?
// best way?


// not treeNode()!
class treeNode{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const five = new treeNode(5);
const two = new treeNode(2);
const seven = new treeNode(7);
const four = new treeNode(4);
const eight = new treeNode(8);
const nine = new treeNode(9);


five.left = two;
five.right = seven;
seven.left = four;

seven.right = eight;
eight.right = nine;



class treeNode{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const five = new treeNode(5);
const two = new treeNode(2);
const seven = new treeNode(7);
const four = new treeNode(4);
const eight = new treeNode(8);
const nine = new treeNode(9);


five.left = two;
five.right = seven;
seven.left = four;

seven.right = eight;
eight.right = nine;



function lca(root,num1, num2){
  let result = 0;
  const compareArr = [];


  function treeTraversal(current, target){

    if(current.value === target){
        compareArr.push(current.value);
        return;
    }


      //if number exists in current array,
      // return it

//       treeTraversal(current.value);
      compareArr.push(current.value);
      treeTraversal(current.left);
      treeTraversal(current.right);

  }


   treeTraversal(root,num1);

   treeTraversal(root,num2);


    console.log(compareArr);




}


console.log(lca(five,4,9))
// have to pass in a node, not a number
//Search a matrix to find a target value

//Brute force:
let matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]

***Matrix.length here is 3!

//brute force

function traverseMatrix(matrix, target){
  // matrix.length is to loop through the row (x)
  //length -1
  for(let i = 0; i < matrix.length -1 ; i++){
    // matrix[i].length is to loop through each column (y)

    for(let j = 0; j <matrix[i].length; j++){
      if(matrix[i][j] === target){
        return true;
      }
    }
  }
  return false;
}

console.log(traverseMatrix(matrix,5))



Best way: runtime is O(n+m)

var searchMatrix = function(matrix, target) {
    // initialize to the first row: row = matrix.length-1
    let row = 0;
    // initialize to the first column: matrix[row].length-1
    let column = matrix[row].length -1;

    if(matrix.length === 0 || matrix[0].length ===0) { return false;}

  // while loop; column >=0 just to serve as condition
    while(row < matrix.length && column >= 0){
        if(target === matrix[row][column]) {return true;}
        else if(target > matrix[row][column]){ row++}
        else{
            column --;
        }

    }
    return false;

};


//next time: solve it in log(n) times
Matrix Problem: recode it

traverse function is helper
2 loops

Input:
[[1,1,0,0,1]]
  [0,1,0,0,1]
  [1,1,0,0,0]
  [0,0,1,0,0]
  [0,0,0,1,1]]

// count island

output: 4

// matrix: [0][1] : that's the second item in the first array

function countIsland(matrix){
  traverse(x,y){
    if(x> matrix[0].length || x > = matrix.length || x<0 || y< 0){
      return;
    } else if(matrix[y][x] ===0){
      return;
    } else if(visited.get(x+'_'+y){
      return;
    })
  }

  for(let y = 0; y < matrix.length; y++){
    for(let x = 0; x <matrix[0].length; x++){
      visited.add(x+'_'+y)
    }
  }
  if(x===1){ call traverse}

  return count;

}
// divide into 2 half
//merge

// return divide


function mergeSort(input){
  function merge(array1, array2){
    let result = [];
    const i;
    const j;
    const length = array1.length + array2.length;

    while(i + j < length){
      if(j > array2.length || (i < array1.length && array1[i] < array2[j])){
        result.push(array1[i]);
        i++;
      } else{
        result.push(array2[j])
        j++
      }
    }
    return result;
  }


  function divide(array){
    // base case: when there's only 1 item in the array
    if(array.length < 2){ return; }
    const mid = Math.floor(array.length /2);

    merge(array.slice(0, mid), array.slice(mid, array.length-1));
  }

// go here first
// return -> excute the function divide
// from divide, go into merge
// actually return "result"
  return divide(input);
}
for minimum number of steps: we only need to return the cache. Why? ( go thru the example: n = 6)

Why plus 1?-- ask


function minSteps(n){

//     let cache = {};

    function traverse(n){
//         if(cache[n] !== undefined) {
//             return cache[n];
//         }

        if (n === 1){
            return 0;
        }

        let steps = traverse(n - 1);

        if (n % 2 === 0){
            let stepsTwo = traverse(n / 2);
            steps = Math.min(steps, stepsTwo);
        }

        if (n % 3 === 0){
            let stepsThree = traverse(n / 3);
            steps = Math.min(steps, stepsThree);
        }
//         cache[n] = steps + 1;
//         return cache[n];
        return steps + 1;
    }

    return traverse(n);
}

console.time('memo')
console.log(minSteps(200))
console.timeEnd('memo')
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
/*
Implement the power function of the base a and the expo b

pow(2,3) -> 8

x^-1 = 1/x^1
x^-2 = 1/x^2
int res = a^b Integer.MAX_VALUE

int in java is 32-bit
4 bytes
  01111111 11111111 11111111 11111111
                                    1

                                  2^31 -1

 a^b = (a^2)^(b/2)

*/

//pow(2,3): 2 * 2 *2

/* Pseudo code
 declare function(a,b)
  set result = 1;

  if(

  if(b === 0){
  return 1}

  if (b === 1){
  return a}



  b = 100
  b = 99

  a = a * a;
  b = b/2;
 loop through 2 to b:

  a = a* a;


  outside of loop, set result equal to a
  return result


  +23 2 + 3
  +*123 2*3 + 1
  int, double


  ----- example-----

 2^100 = 2^5 * 2 ^5 * 2^4
      = 32 * 32 * 16
      = 1024 *  16 = 16384


   a = a * a; (4)
  b = b/2; (50)

  50 -> 25 -> 12 or 13
            50
            |
            25
            /  \
          12   13
          /
          6
          /
          3
        /   \
        1    2
              \
              1


  recursive helper: b/ 2
  base case: b = 1;
  recursive case (if b isn't 1){
  if(b is odd)



 loop from 2 to 50:

  a = a* a;

  // 4^50 = result;

2^99 = (16384)/ 2 = 8192
  a = a * a; (4)
  b = b/2; (50)
 loop through 2 to b:

  a = a* a;


  a^b = (a^2)^(b/2)

time: log b
*/


function power(a,b){
  if(b === 0){
    return 1}
  else if (b === 1){
      return a}
  else{
    a = a *a;

    function dividedb(b){
      if(b =1){ return;}
      while(b > 1){
      if(b % 2 ===1){ b = Max.floor(b)}
      else{ b = b/2 }
      }

    }
    dividedb(b);

  for(let i = 2; i < b+1; i++){
    a = a*a;
  }

    result = a;
    return result;

}



    public long power(int a, int b) {
        if(b == 1){
            return a;
        }
        if(b == 0){
            return 1;
        }
        if(b < 0) {
            a = 1/a;
            b = Math.abs(b);
        }
        long half = power(a,b/2);
        if(b%2 == 0){
            return half*half;
        }
        else {
            return a*half*half;
        }
    }

    a =2 ; b = 10  4 * 4 * 2 * 4 * 4 * 2

  2^ 5 = 2^2 * 2^2 * 2
  2 ^ 7 = 2^3 * 2^3 * 2


  ((2^3)^3)^1

  half = power(2,7) 2*2*2 * 2*2*2 * 2
  half = power(2,3) 2*2*2
  half = power(2,1) 2


    half = power(2,5) 4 * 4 * 2
    half = power(2,2) -> 2 * 2
    half = power(2,1) -> 2


    a^b = a^2 * a^b/2


    T(n) = T(n/2) + 1 a = 1 b = 2 d = 0
                  a = b^d => O(lgb)


    T(n) = aT(n/b) + f(n) n^d

     T(b) = T(b/2) + 1
     a = 1; b = 2; d = 0
     a = b^d => O(b^dlogb) = O(logb)
}

squrt

// in place
function quickSort(input){
  function divide(start,end){
    let wall = start;
    let pivot = end;

    for(const i = start; i < end; i++){
      // smaller number goes to left before the wall
      if(arr[pivot] > arr[i]){
        [arr[i], arr[wall]] = [arr[wall], arr[i]];
        // increase wall. porque?
        // to keep the right track of the pivot when we swap wall and pivot
        wall ++;
      }
    }
    // at the end switching pivot and wall
    [arr[wall], arr[pivot]] = [arr[pivot], arr[wall]];
    divide(0, wall-1);
    // we don't want the wall, append it at the end
    divide(wall+1, end)
  }

  //first call
  recurseSort(0, arr.length-1);

  return input;

}
function rockPaperScissors(num) {

    //declare result array
    //array containing "r", "p", "s"
    let result = [];


//depth is the level, sub is the substring, which starts out at ''
    function recurse(depth, sub){

        if(depth === num) {
            result.push(sub);
            return;
        }

// the function calls itself: depth +1: it's like a tree
//sub adds something to itself
        recurse(depth+1, sub + 'r');
        recurse(depth+1, sub + 's');
        recurse(depth+1, sub + 'p');
    }

    recurse(0,'')


    return result;


}


console.log(rockPaperScissors(3))
// Find shortest route in undirected graph
// Have to use BFS because if I use dfs, the last item is gonna be O(n) even if it's directly
// linked to the first vertex

Graph: picture https://www.hackerrank.com/challenges/bfsshortreach

Queue:
Push in all neighbors of A (B,C,D)
[B,C,D]

Then as I pop off B, I add neighbor of B, which is E...

Graph : [A,B,C,E,G,F,D]
Queue: [A]
Set

function bfs(vertex){
  let result = []
}
// Subarray Sort
// Given an unsorted array, find the start and end index of a
// subarray where sorting this subarray would make the whole input array sorted.
//
// Input: Array of Integers
// Output: Two Integer Array
// Example
// Input: [3, 4, 8, 7, 10, 6, 17]   =>	Output: [2, 5]
// Input: [3, 4, 8, 7, 20, 6, 17]	=>	Output: [2, 6]
// Constraints
// Time Complexity: O(N)
// Auxiliary Space Complexity: O(1)


// basically traverse through the array from 0, find "start" where arr[i + 1] < arr[i] (bc value's supposed
// to increase), then traverse from array.end where arr[j +1] < arr [j] "end"
//
// ex:
// [10,12,20,30,25,40,32,31,35,50,60]
//  0,1,2,3,4,5,6,7,8
//  start: 30 as 30 > 25
//  end: 35 as 35 > 31
//
//  // the result is [start,end]
// 
//  So 2 loops (not nested), push to array
                        ''
                      /    \
                  c         b
                /
              a
            /
          r
      -> check if each leaf is a word

  Method check if is word:
  Method trie.isword(word)

  class TrieNode{
    isWord: t/f,
    character: letter,
    children: { letter: TrieNode} // other TrideNode. children is a hash table
  }

Ex:
Insertion "car" in:
C first, then a then r
TrieNodeL
  isWord: f,
  character: letter "c"
  children: {"a": TrieNode, "r": TrieNode} (trienode is like leaf node in binary tree)
  // at last node, isWord is true

Maximum first level: 26
Maximum second level: 26^2

Insertion of a word: O(n): n = input size of string
function twoSum(arr, target){
    let result = [];
    let checkMap = {};

    if(arr.length <2){
        return [-1,-1];
    }

    for(let i = 0; i < arr.length; i++){

        let diff = target - arr[i];

        // why doesn't this work?
//          if(checkMap[arr[i]]){
//             result.push(checkMap[arr[i]],i);
//         }


        if(checkMap.hasOwnProperty(arr[i])){
            result.push(checkMap[arr[i]],i);
        }

        if(!checkMap[diff]){
            checkMap[diff] = i
        }



}

    if(result.length < 1){
            return [-1,-1]
        }

    return result;
}

// need to practice better pseudo code + walk through better
// https://leetcode.com/problems/validate-binary-search-tree/

// Validate a binary search tree
// Assume a BST is defined as follows:
//
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

Now: Write and test myself

// Traverse in-order
// base case: if current is null
//push them to an array
// check if they're in order
// if not, return false to break the loop

class node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let two = new node(2);
let one = new node(1);
let three = new node(3);
let five = new node(5);
let zero = new node(0);

two.left = one;
two.right = three;
three.right = five;
five.left = zero;

/*

//        2
//      /   \
//     1     3
//            \
//             5
//            /
//           0
// */


function validBst(root){
  let checkArray = [];

  function treeTraversal(current){

    if(!current){ return;}
    else{
      // go all the way left, when hits null, return back up (2->1)
    treeTraversal(current.left);
    // here push the current in (1)
    checkArray.push(current.value);
    // check right, null again, come back up to 1, come back up to 2
    treeTraversal(current.right);

    //at 2 now push 2 in, then go to all the way to right, null , push left (0)
    }

  }


treeTraversal(root);

console.log(checkArray);


}


validBst(two);

// result is [ 1, 2, 3, 0, 5 ]

// why stackoverflow?
// how to solve that?
