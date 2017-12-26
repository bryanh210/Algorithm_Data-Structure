TRIE NODE:

*Check if it's a word

letter = p
#                    current = root
#            None    root.next = {'p': <p>}
#           /        current = <p>
#          p         index = 1
#                    letter = o
#                     <p>.next = {'i': <i>, }
#                     # current = <o>
#         / \         index = 2
#        i   o        letter = k
#       / \   \       <o>.next = {'k': <k>}
#      e   n   k      # current = <k>
#    /    / \   \     # index = 3
#  s     t   e   e .  # letter = e
#       /     \       # <k>.next = {'e': <e>}
#      s       s      # current = <e>



*INSERT A WORD:
# create a new node w/character s as value
# <e>.next = {'s': <s> }
# <s>.is_word = True
}
