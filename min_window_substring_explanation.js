/*
Have a hash to store all the char of String T and frequency is 0
We want to keep track of: min_length, current_length (when the set is complete),
and Missing character

start and end start out at 0
Loop thru the loop: If it's a complete set, we increment the start pointer
till there's a missing character
If there's a missing character, increment end

Every time we have a complete set, we store the current length and compare it
to min length to see which one is smaller

Once we get to end of string, if it's a complete set, increment the start
If it's not the complete set and we at end of string, we return the min_length
from when it was last the complete set


1 SENTENCE: Increment the end if it's a non-complete set. Increment the start
if it is a complete set. Repeat until we hit the end of the string and
return the minimum length when it was a complete set





*/
