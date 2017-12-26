
  function mergeRanges(meetings) {
    //sort the meetings array
    let copyMeeting = JSON.parse(JSON.stringify(meetings));

    //sort the copyMeeting array

    // here's how you sort a function in ascending order
    let sortMeeting = copyMeeting.slice().sort(function(a,b){
      // sort function
      return a.startTime > b.startTime? 1: -1

    })

    //array
    let result = [sortMeeting[0]];


    //start at 1
    for(let i =1; i< sortMeeting.length -1; i++){
      let currentMeeting = sortMeeting[i];
      let lastMergeTime = result[result.length -1];

      if(currentMeeting.startTime <= lastMergeTime.endTime){
        lastMergeTime.endTime = Math.max(currentMeeting.endTime,lastMergeTime.endTime)

      }else{
        result.push(currentMeeting)
      }
    }

    return result;

}

console.log(mergeRanges([
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]
))
