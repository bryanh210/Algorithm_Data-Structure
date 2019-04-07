
// 1. define result array, number of buckets, calculate bucketRange
// 2. create array with number of buckets.
// 2. loop through each item in array
//    for each item
//      calculate the bucketIndex for the item
//      place item within the appropriate bucket
// 3. loop through each bucket, recursively perform bucket sort on each bucket until size < 50.
// 4. Aggregate items from each bucket in order and place in result array
// 5. return result array


function bucketSort(dataSet, min, max) {
  let size = dataSet.length;
  if (size < 50) {
    return dataSet.sort((a, b) => { return a - b; });
  }
  let result = [],
      buckets = [],
      numOfBuckets = Math.ceil(Math.sqrt(size))
      bucketRange = (max - min)/(numOfBuckets);

  for (let i = 0; i < numOfBuckets; i ++) {
    buckets.push([]);
  }

  for (let i = 0; i < dataSet.length; i ++) {
    let number = dataSet[i],
        bucketIndex = Math.floor((number - min)/bucketRange);
    buckets[bucketIndex].push(number);
  }

  for (let i = 0; i < buckets.length; i ++) {
    let bucket = buckets[i];
    result.push(bucketSort(bucket, i * bucketRange, i * bucketRange + bucketRange))
  }

  return result;
}

console.log(bucketSort([0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434], 0.0, 1.0))

//
