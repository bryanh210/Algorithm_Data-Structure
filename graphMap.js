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
