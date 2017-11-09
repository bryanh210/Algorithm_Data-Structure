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
