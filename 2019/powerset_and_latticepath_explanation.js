
/*

  input: 'abc'
  output: ['', 'a', 'b','c','ab','ac','bc','abc']


          a               b          c
      ab    ac        bc
    abc

    '', 0
    'a', 1
    'ab', 2
    'abc', 3
    'ab', 2
    'ab', 3
    'a', 1

1 is the index level. at each level decide whether to include a letter or not
When I return, I go back to the previous value stored in memory
                           input: 'abc'
                               '',0
                  'a',1                             '', 1
        'ab',2        'a',2                  'b',2        '',2
'abc',3  'ab',3   'ac',3    'a',3     'bc', 3  'b',3    'c',3  '',3


*/

 'use strict';

/*
 *  Problem:  Powerset
 *
 *  Prompt:   Given a set S, return the powerset P(S), which is
 *            a set of all subsets of S.
 *
 *  Input:    A String
 *  Output:   An Array of Strings representing the power set of the input
 *
 *  Example:  S = "abc", P(S) = ['', 'a', 'b','c','ab','ac','bc','abc']
 *
 *  Note:     The input string will not contain duplicate characters
 *            The letters in the subset string must be in the same order
 *            as the original input.
 */



 function powerset(str) {
   const result = [];
   function traverse(build, index) {
     if(index === str.length){
       result.push(build);
       return;
     }
     traverse(build, index+1);
     // look at diagram. Example is "" + str[index]
     traverse(build + str[index], index+1);
   }

   traverse("", 0)
   return result;
 }

 powerset('abc');

def powerset(input):
  result = []
  temporary_string = []
  def create_substring(index):
    if index == len(input):
      result.append("".join(temporary_string))
      return
    temporary_string.append(input[index])
    create_substring(index + 1)
    temporary_string.pop()
    // it looks the same below but no, because we pop things out
    // and work with it
    create_substring(index + 1)

  create_substring(0)
  return result



/*
 *  Problem: Lattice Paths
 *
 *  Prompt:  Count the number of unique paths to travel from the top left
 *           corder to the bottom right corner of a lattice of M x N squares.
 *
 *           When moving through the lattice, one can only travel to the adjacent
 *           corner on the right or down.
 *
 *  Input:   m {Integer} - rows of squares
 *  Input:   n {Integer} - column of squares
 *  Output:  {Integer}
 *
 *  Example: input: (2, 3)
 *
 *           (2 x 3 lattice of squares)
 *            __ __ __
 *           |__|__|__|
 *           |__|__|__|
 *
 *           output: 10 (number of unique paths from top left corner to bottom right)
 *
 *  Resource: https://projecteuler.net/problem=15
 *
 *
 *  _
 * |_|
 *  // we always start at 0,0 first
 *               0,0
 *          1,0           0,1
 *       2,0   1,1      1,1    0,2
 *          2,1  1,2  2,1 1,2  1,2  0,3
 *
 *  return 0 if out of bound, return 1 when I reach the end.
 * Add them up when I return them up to the previous call to be the count and update the count
 * In the code I don't even need to add it, when it return up, it'll save in the memory
 *
 *
 *
*/
 // Time Complexity:
 // Auxiliary Space Complexity:

 def lattice_paths(m, n):


  if (m < 0) or (n < 0): return 0
  if (m == 0) and (n == 0): return 1
  // goes from the bottom right, move to left and move up
  return lattice_paths(m - 1, n) + lattice_paths(m, n - 1)

// if we move right and down we need to use helper recursion cuz we don't have if (m == 0) and (n == 0): return 1

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
