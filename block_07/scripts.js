/*
1. Pseudocode
Goal to display these three numbers:
10 - 40 - 39
Twist: must use three variables with differing operators to produce 
the numbers
Display as alert.

Pseudocode Likely look like

declare variableTEN = a + b
declare variableFOURTY = c - d
declare variableTHIRTYNINE = e * f

output ($variableTEN + " - " + $variableFOURTY + " - " + $variableTHIRTYNINE)

*/
//2
//Creating a string to store text that will be used later
const userPrompt =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

//3
//Declaring const variables based on different operator operations to later be used in output
//lock combination number of the left
const lockCombinationLeft = 2 + 8;

//lock combination number of the middle
const lockCombinationMiddle = 50 - 10;

//lock combination number of the right
const lockCombinationRight = 13 * 3;

//5
//Generate a concatenated output so that the users can see the code's results
alert(
  `${userPrompt} ${lockCombinationLeft} - ${lockCombinationMiddle} - ${lockCombinationRight}`
);

const outputMessage = `${userPrompt} ${lockCombinationLeft} - ${lockCombinationMiddle} - ${lockCombinationRight}`;

document.getElementById("output").innerHTML = outputMessage;
