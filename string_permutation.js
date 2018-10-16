




# input: "abc"
# output: ["abc", "acb", "bca", "bac", "cab", "cba"]




# "abc" --> ["a", "b", "c"]

# result = ["abc", "acb", "bac", "bca", "cba", "cab"]


#               "abc", l = 0
#            / i=1 |    \  i = 2
#        "abc"   "bac"    "cba" i = 1
#  l=1    /  \     / \       /  \
# i2 "abc" "acb""bac""bca" "cba" "cab"
              #l=1/ \      #l = 1  /
  #         #i=2"bac"      /     # l = 2
                       # l = 2
                       # return




def permutations(input):
  result = []
  chars = list(input)

  def generate_perms(index, list):

    if index == len(input):
      result.append(to_string(list))
      return

    for i in range(index, len(list)):
      list[i], list[index] = list[index], list[i]
      generate_perms(index + 1, list)
      list[i], list[index] = list[index], list[i]


  def to_string(list):
    return ''.join(list)


  generate_perms(0, chars)
  return result


print(permutations("  "))


# capital permutations
