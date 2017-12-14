// DO NOT EDIT
// Vertex class
class Vertex{
  constructor(id){
    this.id = id !== undefined? id : null;
    this.edges = [];
  }
}

// DO NOT EDIT
// generate graph from int and array of arrays
function deserialize(n, edges){
  let vertices = {};
  while (n--){
    vertices[n] = new Vertex(n);
  }
  let v1;
  let v2;
  edges.forEach(edge => {
    v1 = edge[0];
    v2 = edge[1];
    vertices[v1].edges.push(vertices[v2]);
    vertices[v2].edges.push(vertices[v1]);
  });

  return vertices[0];
}

// DO NOT EDIT
// sampleGraph is the vertex with id 0
const sampleGraph = deserialize(8, [[0, 1], [1, 2], [2, 4], [3, 5], [4, 5],
                                    [1, 7], [4, 6], [4, 7], [5, 6]]);

/*
 *     Example Graph:
 *
 *              2
 *            /   \
 *    0 ~~~ 1       4  ~~~ 5 ~~~ 3
 *            \   /   \   /
 *              7       6
 */



console.log(sampleGraph);

function dfs(vertex) {
  // create a set. if that set has the node => true

  let result = [];
  let stack = [vertex];
  let visited = new Set();
  let current;

  visited.add(stack[0])

  while(stack.length > 0){
    current = stack.pop();

   current.edges.forEach((node)=>{
     // each edge contains array of nodes
     // node is a an item on the array
     if(!visited.has(node)){
      visited.add(node);
     stack.push(node);
     }


   })

    result.push(current.id);
  }
  return result;
}

console.log(dfs(sampleGraph))




/*
function DAGCycle(vertex){
  let stack = [vertex];
  let visited = new Set();
  let current;


  // put the current node into graph
  visited.get(vertex[0]);
  while(stack.length > 0){
    // after look left and right, add to the stack
    // it comes up and pop => start all over again
    current = stack.pop();

    if(current.left){
      // should current now = current.left?
      stack.push(current.left);
      if(visited.has(current.left)){
        // if current.left already exists in the set,
        // that means cycle exists
        return true;
      } else{
        visited.get(current.left)
      }
    }

    if(current.right){
      stack.push(current.right);
      if(visited.has(current.right)){
        // if current.left already exists in the set,
        // that means cycle exists
        return true;
      } else{
        visited.get(current.right)
      }
    }

//within the loop, check if it's true
// if there's no evidence it's a loop, return false
    return false;
  }
}
*/
