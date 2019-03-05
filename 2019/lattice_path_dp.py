  #RECURSION SOLUTION:

  def lattice_paths(m, n):

#1,1: moving right and down
  def lattice_rec(m_rec, n_rec):
      # if we're out of bound, larger than m or n
    if m_rec > m or n_rec > n:
      return 0
      # when we hit the bottom right coordinate
    if m_rec == m and n_rec == n:
      return 1

    return lattice_rec(m_rec+1, n_rec) + lattice_rec(m_rec, n_rec+1)
   
  
  print (mem)
  print (lattice_rec(0, 0))
  return lattice_rec(0, 0)



# DP solutiion:

def lattice_paths(m, n):

  mem = {}
#1,1: moving right and down
  def lattice_rec(m_rec, n_rec):
      # if we're out of bound, larger than m or n
    if m_rec > m or n_rec > n:
      return 0
      # when we hit the bottom right coordinate
    if m_rec == m and n_rec == n:
      return 1

    key = str(m_rec) + str(n_rec)
    #{11: 2}
    if key in mem:
      return mem[key]

    current = lattice_rec(m_rec+1, n_rec) + lattice_rec(m_rec, n_rec+1)
    mem[key] = current
    return mem[key]
  
  print (mem)
  print (lattice_rec(0, 0))
  return lattice_rec(0, 0)


