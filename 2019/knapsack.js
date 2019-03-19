// /*
// 0-1 Knapsack Problem | DP-10
// Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack. In other words, given two integer arrays val[0..n-1] and wt[0..n-1] which represent values and weights associated with n items respectively. Also given an integer W which represents knapsack capacity, find out the maximum value subset of val[] such that sum of the weights of this subset is smaller than or equal to W. You cannot break an item, either pick the complete item, or don’t pick it (0-1 property).
// */
// /*
//  * Input : arrays (Weights) (values)
//  *        : capacity
//  * Output : maximum value
//  * Example :
//  *
//  *  *  int val[] = new int[]{60, 100, 120};
//        int wt[] = new int[]{10, 20, 30};
//        int  W = 50;
//  * /


function knapSack(weight, values, capacity){

    function traverse(i, capacity, weight, values) {
      if(capacity === 0 || i === 0){
          return 0;
        }
      if(weight[i] > capacity  ){
        return traverse(i-1, capacity);
      }
      let noTake = traverse(i-1, capacity,weight,values);
      let take = values[i] + traverse(i-1,capacity - weight[i],weight,values);
      return Math.max(noTake, take);
    }

   return traverse(weight.length-1, capacity, weight, values)
}


console.log(knapSack([10,20,30], [60,100,120], 50));




ANOTHER ONE:

// # 321 - Knapsack Problem 0/1

// Given a set of items where each item has a weight and a value. And given a knapsack with max weight capacity,
// determine the maximum value that can be placed into the knapsack without going over the capacity.
// ```
// Input: An integer array of weights
//            An integer array of values
//            The ith item is weights[i] and values[i].
// Output: Integer of maximum total value
// ```
// # Example
// ```
// Input:
//   weights = [10, 20, 30]
//   values =  [60, 100, 120]
//   capacity = 50

// Output: 220
// ```

// ![Knapsack](http://res.cloudinary.com/outco-io/image/upload/v1521248027/Knapsack.png)

// # Constraints
// ```
//                       Intermediate    Advanced
// Time Complexity:         O(2^N)        O(KN)
// Aux Space Complexity:    O(N)          O(K)
// ```

// `K` is the capacity of the knapsack, `N` is the number of items

// Once you add an item to the knapsack, you can't add it again (no replacement)
//values =[9,10]

/*
  weights = [1,2,5,3]

  capacity: 3
  Solution : [1,2] [3]

  Base case: if we're out of bound
  => return 0
  if the capacity is reached

*/


function knapSack(weight,values,capacity){
  if(capacity <= 0 || !weight.length || !values.length) return 0;

  function traverse(index1, index2 , capacity){
    let maxVal = 0;
    if(index1 > weight.length) return 0;
    if(capacity === 0) {
      maxVal = capacity - netWeight;
      return maxVal;
    }
    if(capacity < 0){
        return;
    }
    traverse(index1, index2 + 1, values[index]+values[index+1], capacity + weight[index]);
    traverse(index1 + 1, index1 + 1, )

  }
}
