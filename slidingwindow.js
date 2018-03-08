1 /**
2  * @param {number[]} nums
3  * @param {number} k
4  * @return {number[]}
5  */
6 var maxSlidingWindow = function(nums, k) {
7     var window = [], index = -1, result = [];

if(k>nums.length || k === 0){
  return result
}

8     for(var i = 0; i < nums.length; i++){
  //remove anything less than the current value
  //the window array will maintain all values bigger than the current one
  //window[0] < i - k + 1). the first value at windows
9         while(window.length !== 0 && window[0] < i - k + 1){
10             window.shift();
11         }
// however if all elements in the window are greater than the current one
// shift out the current value
12         while(window.length !== 0 && nums[window[window.length - 1]] < nums[i]){
13             window.pop();
14         }
15         window.push(i);

//at every time the sliding window moves, we record the highest value in it
// we use k-1 to limit the position to be less than k (since k is equal to the length)
16         if(i >= k - 1){
17             result.push(nums[window[0]]);
18         }
19     }
20     return result;
21 };
