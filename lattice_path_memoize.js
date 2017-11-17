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
