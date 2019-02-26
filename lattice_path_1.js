function latticePaths(m, n) {
  if(m === 0 && n === 0) {
    return 1;
  }
  if(m < 0 || n < 0) {
    return 0;
  }

  return latticePaths(m, n - 1) + latticePaths(m - 1, n);
}

latticePaths(1, 1)
