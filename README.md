# Type Error in TypeScript

This repository demonstrates a common type error in TypeScript that occurs when a function expects a specific data type (in this case, a string) but receives a different type (an array of strings). The error message is shown in the console, and the solution is to modify the function to handle the array of strings correctly. 

## Bug
The `greeter` function expects a single string but receives an array. 

## Solution
The solution file (`bugSolution.ts`) shows how to fix this error.  The corrected code iterates through the array and applies the greeting to each string individually.