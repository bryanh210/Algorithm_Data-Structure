Find search and rotated and sorted array

3/4/19 Whiteboarding.  Search in a rotated and sorted array

LOGIC:
We have to find which part of the array is sorted, and which is not, and whether the target is in the sorted portion or not
Ex:  [6,8,11,15,17,4,5], 4
     min     mid     max
If arr[min] < arr[mid] -> this part of array is sorted. Used binarySearch to find target if target is within range
Then we know arr[mid] to arr[max] is not sorted.



[15,17,3,5,8,11], 15
L        M        H



[15,17,3,5,8,11] 15
L        m         H
	

[6,8,11,15,17,3,5], 3

L           M         H
             L   M    H
                  L  M  H
low = 0
high = len - 1

calculate M

if mid === target return mid

if mid < high && high <= target
	Binary search

if low < mid && low <= target
	Binary search

else 
	low = mid
	

set low and high pointers
low pointer starts at 0
high pointer starts at the last index of the array

while low pointer is less than high pointer:
	find mid index = (low + high) / 2
	
	if element at mid index is equal to target
		return mid index
	else if element at mid index > element at low index:
		If 
		low = mid
	else element at mid index is larger than element at 
		If 
		high = mid


0 1  2   3    4  5 6
[6,8,11,15,17,3,5], 3
Low = 0 (6)
High = 6 (5)
Mid = 3 (15)


def find_rotated(arr):
	Low = 0
	High = len(arr) -1
	rotated_helper(arr, low, high)

	Def rotated_helper(arr, low, high):
		Mid = low + ((high - low) // 2)

		
		If arr[low] < target and arr[mid] > target:
			binary_search(arr, low, mid)
		elif arr[mid] < target and arr[high] > target: 
			binary_search(arr, mid, high)
		
		elif arr[low] < arr[mid]:
			rotated_helper(arr, mid, high)
		else:
			rotated_helper(arr, low, mid)


