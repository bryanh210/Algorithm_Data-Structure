function numOfPathsToDest(n) {

  if(!n || n<0){ return 0};

     if(n === 0){
        return 0;
    }


// starting value
    var dp = [[1]];


    for(var i = 1; i < n; i++){
        dp[0][i] = 1;
    }

  console.log(dp)

    for(var j = 1; j < n; j++){
      // this is important
        dp.push([]);
        dp[j][0] = 1;
    }

    for(i = 1; i < n; i++){
        for(j = 1; j < n; j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }

//     console.log(dp);

    return dp[n-1][n-1];


}

console.log(numOfPathsToDest(4))
