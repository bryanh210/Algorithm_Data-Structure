                        ''
                      /    \
                  c         b
                /
              a
            /
          r
      -> check if each leaf is a word

  Method check if is word:
  Method trie.isword(word)

  class TrieNode{
    isWord: t/f,
    character: letter,
    children: { letter: TrieNode} // other TrideNode. children is a hash table
  }

Ex:
Insertion "car" in:
C first, then a then r
TrieNodeL
  isWord: f,
  character: letter "c"
  children: {"a": TrieNode, "r": TrieNode} (trienode is like leaf node in binary tree)
  // at last node, isWord is true

Maximum first level: 26
Maximum second level: 26^2

Insertion of a word: O(n): n = input size of string
