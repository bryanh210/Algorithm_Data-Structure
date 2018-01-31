Bucket sort:
We have a list, a min and a max
Number of bucket: square root of the list length

Used when you know the minimum and maximum

Let's say:
List: 100
Min: 0.0
Max: 1.0

List of arrays:
List: [ 0.54, 0.68, 0.27, 0.39, 0.35, 0.4]

Bucket range: (max-min)/ #buckets = 0.1

For i in list -> bucket_index= Floor((List[i]- min))/ bucket range

Bucket[bucket_index].push(list[i])


Q: When to use this?
A: When you have a min and max, and you want to sort the numbers

Time complexity: nlogn
Space: o(n^2)
