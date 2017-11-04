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
