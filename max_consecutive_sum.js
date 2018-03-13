initialize the current_sum variable to array[0]
Max_sum variable to -Infinity
Loop through array with pointer i

then current_sum = Math.max(arr[i], current_sum);
then max_sum = Math.max(current_sum, max_sum)

Return max_sum outside of loop

ex:
  i
[-6, 7, 8, 3, -8, 4, -2, 5]


// from math import inf
//
// def max_consecutive_sum(arr):
//   current_sum = 0
//   max_sum = -inf
//
//   for num in arr:
//     current_sum = max(current_sum + num, num)
//     max_sum = max(max_sum, current_sum)
//
//   return max_sum
//
//
// print(max_consecutive_sum([-6, -7, 8, 3, -8, 4, -2, 5, -12]))
