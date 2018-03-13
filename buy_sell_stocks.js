
def max_profit(prices):
  min_price = inf
  max_prof = 0

  for price in prices:
    min_price = min(min_price, price)
    max_prof = max(max_prof, price - min_price)

  return max_prof


print(max_profit([3, 1, 2, 9, 10, 3, 8]))
  
