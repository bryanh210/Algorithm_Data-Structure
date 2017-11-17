Binary Heap

                6
              /   \
            5      2
        /     \   /  \
      3         2 1   0
    /  \
  0     1



[6,5,2,3,2,1,0,0,1]
PARENT JUST HAS TO BE LARGER THAN BOTH CHILDREN

INSERT METHOD:
  insert(value): Time is O(n), insertion is O(1)
-> append value storage
-> buble up (last index)
return

BUBBLE UP METHOD(last index): time complexity is (log n)-- proportional to height of the tree
-> child: last index
-> use formula to find parents

while(parent > 0)
If child's index  is odd (closer to parent), then parent = (child-1)/2. If child's index is
even parent= (child-2)/2
Compare parent & child. If heap property is violated (if parent is smaller or bigger than child,
depending on whether it's min or max)
+) taking in parents and child reassign child to parent and recalculate parents' index


With all heaps you insert at the end


INSERT & REMOVE AT THE BEGINNING

*REMOVING AT THE BEGINNING

REMOVE METHOD: swap with whatever child is bigger, and put the biggest values on top, and recurisvely do console.log(require('util').inspect(
  , { depth: null }));


* REMOVING IN THE MIDDLE:
Switch the item and the last one in ther array
Pop that item of
Then check whether the item that we just swap with (not the deleted one) is in the right position
If not, then either do bubble up or bubble down
