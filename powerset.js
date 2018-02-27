function powerSet(arr){
  debugger;
  const subsets = [[]];
  for(const ele of arr){
    const length = subsets.length;
    for(let i = 0; i< length; i++){
      const currentSubset = subsets[i];
      subsets.push(currentSubset.concat(ele))
    }
  }
  return subsets
}

console.log(powerSet([1,2,3]))

// When you concat an empty array, it will assume that nothing really exists yet
