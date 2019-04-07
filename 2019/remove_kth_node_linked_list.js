function removeKthNodeFromEnd(head, k) {
  /*
	Create counter = 1, first, second
	second goes first until counter hits k
	Then it stops,
	If second points to null, it means that we're removing the first item.
	Why? because the distance from first to second = k = length
	of linked list since counter traverses thru linked list and equls k.
	So just shift the value and pointer of head.
	If second.next points to null, second is the last item of list.
	And because the distance from first -> second = k, it's first.
	next = the node we want to remove. So just route it to the next
	node.
	Else, we continue traversing through the list: first = first.next,
	second = second.next

	=> Opportunity to refactor using while loop instead of if else here
	*/

	let counter = 1, first = head , second = head;

	// increase second first to distance k
	while(counter <= k){
		second = second.next;
		counter++;
	}

	//check if second is out of range of the linked list
	// if yes, then since distance from first to second is longer than
	// length (cuz we start at 1, not 0), the head is our target
	if(second === null){
		head.value = head.next.value;
		head.next = head.next.next;
		// stop the loop
		return;
	}
	
	//1->2->3->null, k = 2
	// if second.next points to null, we're at end of list
	// keep looping otherwise, until we hits end of list. It has
	// to hit end of list
	while(second.next){
		second = second.next;
		first = first.next;
	}
	//reroute
	first.next = first.next.next;


}

// Do not edit the line below.
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
