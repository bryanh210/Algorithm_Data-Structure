5[1,2,3]
Return an array with all unique combinations:

def coin_change(amt, coins):
  result = [];
  def combinations(amt, i, combo)
      if amt === 0
        result.append(combo)
        return
      if i<0
        return
      combinations(amt-coins[i], i, combo+coins[i])
      combinations(amt, i-1, combo])
    combinations(amt_len(combo)-1,[])
    return result
