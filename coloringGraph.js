/*
First, check if any node's neighbor points to itself => throw error
(because you don't want to update the color of a node)

have an illegal Color set,
if there exists a color at node.neighbor, add that to the illegalColor set
then assign it the next available color in the colors array


*/


function coloringGraph(graph,colors){
  let illegalColor = new Set();


// use forEach to loop thru set
  graph.forEach((node) =>{


    // prevent self looping
    if(node.neighbors.has(node)){
      throw new Error("illegal Coloring")
    }

    node.neighbors.forEach((node) =>{
      if(node.color){
        illegalColor.add(node.color)
      }
    })

    for(let i = 0; i< colors.length; i++){
      let color = colors[i];

      if(!illegalColor.has(color)){
        node.color = color;
        // break because I don't wanna keep assigning colors to the same node
        break;
      }
    }


  })




}
