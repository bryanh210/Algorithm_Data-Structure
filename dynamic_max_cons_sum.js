Dynamic programming

max_cons_sum

ex:
[-6,-5,3,7,9,-12]

Break down to smaller problem:
[-6,-5]
Current Maximum: -5
Maximum Sum: 11
	Current> Sum ,update max to be === sum


input: [6,5,3,7,9,-12,40]
output: 19

current_sum = arr[0];
max_sum = -00
for loop iterate through array
current_sum = max(current_sum + current element + current element)
max_sum = max(current_sum, max_sum)

return max_sum
