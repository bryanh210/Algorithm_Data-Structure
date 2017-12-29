/*

copy meetings
sort by startTime

then compare that to the current. Now since I've sorted by startTime, I need to look at
endTime. if endTime of current startTime is smaller than the last time in result => take the
maximum of end time and give it to the one in the result
if not, it means nothing overlaps, push in result


*/
  function mergeRanges(meetings) {


    const copyMeeting = JSON.parse(JSON.stringify(meetings));
    const sortMeeting = copyMeeting.sort((a,b) =>{
      return a.startTime > b.startTime? 1: -1
    })
    let result = [sortMeeting[0]];

    for(let i = 0; i< sortMeeting.length; i++){
      let current = sortMeeting[i];
      let lastMergeTime = result[result.length-1];

      if(current.startTime <= lastMergeTime.endTime){
        lastMergeTime.endTime = Math.max(lastMergeTime.endTime, current.endTime)
      }else{
        result.push(current)
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
