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
