Elevator system:

What things do (composition) Blue print
What they are (inheritance) inherit directly


Does:
_Goes up and down
_Priority floor
_Know which floor to stop at
_Open and close door
_Load people in elevator


Known:
_Capacity
_Direction
_Default floor
_Math/ min floor


Single elevaotr:
_2 floors, 1 person

1) Person presses button
2) Gets in Elevator
3) Presses floor 2 button
4) Ride elevator target floor
5) Get out


=> Choose the right feature

Press the button--> is elevator on floor? Yes -> Load passenger -> press destination
                                          no -> Travel to that floor -> load passenger ->///

2 elevators:
+) A goes up, B goes down
+) A goes up, B goes up

_ Drop A off and Drop B off



IMPLEMENTATION:
Figure out the big ambiguous what data we need first before implementing
USe a Set to check for which floor has been to so you won't circle back to the floor that you've been
Use a Set and a down Set

A  queue used to figure out which requests would come first
If there's a person on floor 4 and want to go down
