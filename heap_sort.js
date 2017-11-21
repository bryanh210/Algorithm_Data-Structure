# heap sort
# want to sort the array.

// heap sort: time: nlogn. Space: O(n)
// heap: as long as children < parent, it's good. no need to compare each child

function heapSort(arr){
 heap.length = 1;
 // length is to keep track of the length when we add an item in
 // if heap has at least 1 item, it's valid

  // child = index of child
      getparent(child){
          return Math.floor((child - 1) / 2);
      }

  [1,3,6]

      getChild(parent){
         let left = parent * 2 + 1;
         let right = parent * 2 + 2;
         //if max heap
         if(left >= heap.length-1 || arr[left] >= arr[right]){
           return left;
         } else {
           return right;
         }
      }

      bubbleUp(){

      }


// whatever you insert in the arrayy's gonna start at the bottomost position.
// swap with the parent, then recursively swap it with the parent till getting to the top
// when insert: have to increase heap length by 1 cuz I have an extra item
// but why do we care about the heap length at all?
// heap.length increases by 1. heap length is where the bubbled down item is at
      insertion(){

      }

// for remove, swap what at the beginning and what's at the end, then decrement length of heap,
// then bubble down for every single item of the array to sort them in the right order again
// so put that in a while loop

}


# input:  [1, 16, 5, 30, 27, 17, 20, 2, 57, 3, 90]

# output: [1, 2, 3, 5, 16, 17, 20, 27, 30, 57, 90]


# Converting unsorted array into max heap
# Removing peek of max heap and adding to array
# return sorted array



#  1
# 3

# array = [1, 3, 5]
#         heap arr
# heap length = 2







# heap sort
# want to sort the array.


# input:  [1, 16, 5, 30, 27, 17, 20, 2, 57, 3, 90]

# output: [1, 2, 3, 5, 16, 17, 20, 27, 30, 57, 90]


# Converting unsorted array into max heap
# Removing peek of max heap and adding to array
# return sorted array



#  1
# 3

# array = [1, 3, 5]
#         heap arr
# heap length = 2



# input = [5, 3, 1]
#                h  a

#   5
#  3 1




def heap_sort(arr):


    heap_length = 1


    def get_parent(child):
        if child % 2 != 0:
            return (child - 1) // 2
        else:
            return (child - 2) // 2


    def get_child(parent):
        left = 2 * parent + 1
        right = 2 * parent + 2
        if left >= heap_length - 1 or arr[left] > arr[right]:
            return left
        else:
            return right

    def swap(a, b):
        arr[a], arr[b] = arr[b], arr[a]


    def bubble_up():
        child = heap_length - 1
        parent = get_parent(child)
        while child > 0 and arr[parent] < arr[child]:
            swap(parent, child)
            child = parent
            parent = get_parent(child)



    def bubble_down():
        parent = 0
        child = get_child(parent)
        while child < heap_length and arr[parent] < arr[child]:
            swap(parent, child)
            parent = child
            child = get_child(parent)



    def insert():
        # increment the heap length
        nonlocal heap_length
        heap_length += 1
        bubble_up()


    def remove():
        nonlocal heap_length
        arr[0], arr[heap_length - 1] = arr[heap_length - 1], arr[0]
        heap_length -= 1
        bubble_down()
        pass

    while heap_length < len(arr):
        insert()

    while heap_length > 1:
        remove()

    return arr


# Test on function at the bottom.

print(heap_sort([1, 16, 5, 30, 27, 17, 20, 2, 57, 3, 90]))
