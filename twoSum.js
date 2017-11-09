function twoSum(arr, target){
    let result = [];
    let checkMap = {};

    if(arr.length <2){
        return [-1,-1];
    }

    for(let i = 0; i < arr.length; i++){

        let diff = target - arr[i];

        // why doesn't this work?
//          if(checkMap[arr[i]]){
//             result.push(checkMap[arr[i]],i);
//         }


        if(checkMap.hasOwnProperty(arr[i])){
            result.push(checkMap[arr[i]],i);
        }

        if(!checkMap[diff]){
            checkMap[diff] = i
        }



}

    if(result.length < 1){
            return [-1,-1]
        }

    return result;
}

// need to practice better pseudo code + walk through better
