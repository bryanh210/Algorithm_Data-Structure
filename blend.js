// You are a restaurant owner and you have list of times representing start/end times of employee shifts. All times are positive 64-bit integer timestamps, and the ranges are inclusive on left and exclusive on right.
//
// The goal is to generate a time series (list of time and count, sorted by time) of the number of active employees over time.
//
// For example, given:
//
// start | end
//
// 3 | 7
// 5 | 7
// 7 | 15
// 8 | 12
// 8 | 20
// 14 | 20
//
// the output is:
//
// time | count
//
// 3 | 1
// 5 | 2
// 7 | 1
// 8 | 3
// 12 | 2
// 14 | 3
// 15 | 2
// 20 | 0
//
// Note that in the example the numbers are very small, but your solution should support very large ranges like {start: 1, end: 1000000000000}.
//
//

/*
Solution:
Make copy of the original object
Sort it by end time
Right now, I have
3: 7
5: 7
8:12
7:15
8:20
14:20
Then compare current end Time with previous Start Time and current End Time with previous End Time
If current End Time > previous Start Time, add one to the value
If current End Time <= previous Start Time, don't do anything
If current End Time >= previous End Time, add 1 to current Start Time
Then return as an object

*/
