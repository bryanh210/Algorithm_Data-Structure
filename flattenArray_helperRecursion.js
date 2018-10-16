function flattenArray(arr){
  const result = [];
  function dfs(entry) {
    if(typeof entry === 'number'){
      result.push(entry);
      // return out of the call stack to go to else
      return;
    }else{
      for(let i = 0; i < entry.length; i++){
        dfs(entry[i]);
      }
    }
  }
  dfs(arr);
  return result;
}

console.log(flattenArray([1,2,[3,4], [[5,6]]]));
