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

Another one:
var isValid = function(s) {
    var stack = [];

    for(var i = 0; i < s.length; i++) {
        var chr = s[i];

        if(chr === '(' || chr === '{' || chr === '[') {
            stack.push(chr);
        } else if(chr === ')' || chr === '}' || chr === ']') {
            var top = stack.pop();
            if(!top || (top === '(' && chr !== ')') || (top === '{' && chr !== '}') || (top === '[' && chr !== ']')) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
