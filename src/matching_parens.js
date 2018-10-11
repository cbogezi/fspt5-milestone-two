/*------------------
Matching Parentheses

You are given a string that contains the
characters "(", ")", "{", "}", "[" and "]".

Write a function that returns true or false
if the input string is valid.

An input string is valid if:
- Open brackets are closed by the same type of brackets.
- Open brackets are closed in the correct order.

Hint: You'll want to draw this out!
Use the array methods you would use for a
stack data structure to solve this problem. 
As you loop through the string, add and remove items
from the stack. Good luck!
------------------*/

function validParens(str) {
  const parenPairs = {
    "[": "]",
    "(": ")",
    "{": "}"
  }

}

module.exports = validParens;

