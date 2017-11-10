function rockPaperScissors(num) {

    //declare result array
    //array containing "r", "p", "s"
    let result = [];


//depth is the level, sub is the substring, which starts out at ''
    function recurse(depth, sub){

        if(depth === num) {
            result.push(sub);
            return;
        }

// the function calls itself: depth +1: it's like a tree
//sub adds something to itself
        recurse(depth+1, sub + 'r');
        recurse(depth+1, sub + 's');
        recurse(depth+1, sub + 'p');
    }

    recurse(0,'')


    return result;


}


console.log(rockPaperScissors(3))
