// Given an expression string exp , write a program to examine whether the pairs
// and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
// For example, the program should print true for exp = “[()]{}{[()()]()}”
// and false for exp = “[(])”


var isValid = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++){
        //if opening bracket
        if(s[i] === "(" || s[i] === "{" || s[i] === "["){
            stack.push(s[i]);
        }
        else if (s[i] === ')'){
            if(stack.pop() !== '('){
               return false;
            }
        }
        else if (s[i] === ']'){
            if(stack.pop() !== '['){
               return false;
            }
        }
        else if (s[i] === '}'){
            if(stack.pop() !== '{'){
               return false;
            }
        }
    }
    return !stack.length;
}
