// Reverse a linked list
// Singly and Doubly Linked list reversal



//
//
//  a --> b --> c   Null

p (null) c (head) null


// a | a.next b| b.next c|c.next
//  a.next |a b.next |b c.next |c
// prev current
// prev| prev.next current |current.next
// prev.next |prev current.next    |current
// current.next|current prev.next     | prev

// not every linked list has the tail

// null.next would error



Representation of the code:
      a -> b -> c
prev  a -> b -> c
prev  a prev b -> c
a    a  prev b -> c
a    <- prev b -> c



function reverseLinkedList(sll){
    const prev = null;
    const current = sll.head;

    while(current){
        // order matters here
        current.next = prev;
        prev = current;
        current = current.next;

    }
    // set our prev to head cuz when current hits null, the previous
    // node is the head
    prev = sll.head;


return sll; 
}


    if c === null => prev is head
                    p        c
       p <--c.next
        p
    c.next
    p  c
//     a --> b --> c --> Null


    // doublyy linked list: can traverse both ways



         p   c

    //     a --> b --> c --> Null
