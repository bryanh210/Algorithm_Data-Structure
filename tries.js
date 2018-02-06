// suffix tree vs prefix tree?

This chunk of code:
if(!(letter in node)){
  // put the letter as a key into the node
  // the value of that key is a hash table
  // now if we have had that letter before: second 'b' in babc
  // we are updating the node to the value of the node, which is either an empty hash (if not yet)
  // or an existing hash:
  // so this way, instead of multiple loops, I can put letters into letters
  // etc: "a":{"b":{"c"}}
  node[letter] = {};}

  node = node[letter]
}
// put the endSymbol in the map, give it value of "true"
node[this.endSymbol] = true;


// understand the constains method tmr

contains(string){
  let node = this.root;
  for(const letter of string){
    if(!(letter in node)){
      return false;}
      // keep traversing through
      node = node[letter];
  }

  // IN means that if it's in an object/ array, return true;
  return this.endSymbol in node;
}


// insert method:
//
// constructor{
//   function trieNode(val){
//     isEnd = false;
//     children = new HashMap();
//   }
// }
//
// function Trie{
//   TrieNode.root = new trieNode();
// }
//
// function insert(word){
//   TrieNode.current = root;
//   for(let i = 0; i < word.length; i++){
//     // charAt return the word at the index of string
//     let character = word.charAt(i);
//
// // if c isn't
//     if(!current.children.contains(character)){
//       current.childrenput(c, newTrieNode)
//     }
//   }
// }
