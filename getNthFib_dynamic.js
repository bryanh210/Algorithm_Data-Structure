function getNthFib(n) {
  const lastTwo = [0, 1];
  let counter = 2;
  while (counter <= n) {
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = lastTwo[0] + lastTwo[1];
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}

getNthFib(2)
