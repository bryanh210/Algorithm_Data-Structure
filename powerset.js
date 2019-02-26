function powerSet(arr){
  const subsets = [[]];
  for(const ele of arr){
    const length = subsets.length;
    console.log(length, 'subsets.length');
    for(let i = 0; i< length; i++){
      const currentSubset = subsets[i];
      console.log(currentSubset, 'currentSubset');
      subsets.push(currentSubset.concat(ele));
      console.log(subsets, 'subsets');
    }
  }
  return subsets
}

console.log(powerSet([1,2,3]))

// When you concat an empty array, it will assume that nothing really exists yet
