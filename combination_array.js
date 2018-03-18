# combinations

MULTIPLE RECURSION


# 1, 2, 3, 4, 5

# choose 2

# input: 5, 2

# [[1, 2], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5], [3, 4], [3, 5], [4, 5]]


# result = [[1, 2], [1, 3], [1, 4]]


#                        1, []
#                         /  \
#                    2, [1]  2, []
#                     /  \
#              3, [1, 2] 3,[1]
#               return    / \
#                    4,[1,3] 4, [1]
#                     return   / \
#                        5,[1, 4]  5, [1]
#                          return



#              1, []
#               /   \
#           2, [1]    2, []
#            /     \
#         3, [1, 2] 3,[1]
#           return    /  \
#                 4,[1, 3] 4, [1]
#                  return    /  \
#                        5,[1,4] 5, [1,]
#                         return   /   \
#                              6,[1, 5] 6, [1]
#                               return    return



def combinations(n, c):

  result = []

  def combos_helper(start, combos):
    if len(combos) == c:
      result.append(combos)
      return
// if i recurse to a greater length than input (like n = 5 but it goes to 6)
    if start > n:
      return

    combos_helper(start + 1, combos + [start])
    combos_helper(start + 1, combos)



  combos_helper(1, [])
  return result



print(combinations(5, 2))


// Another way:
//  (You only make copy of array when I make the combiantion
//  Mutate original array, but make sure to copy it and push to result)


def combinations(n, c):

  result = []

  def combos_helper(start, combos):
    if len(combos) == c:
      result.append(combos[:])
      return

      // this is to check if n = 5 and you're at 4, you don't have enough numbers, so you return
      // to avoid going to the loop
      if len(combos) + (n - start + 1) < c:
        return

    combos.append(start)
    combos_helper(start + 1, combos)
    combos.pop()
    combos_helper(start + 1, combos)


  combos_helper(1, [])
  return result



print(combinations(5, 2))
