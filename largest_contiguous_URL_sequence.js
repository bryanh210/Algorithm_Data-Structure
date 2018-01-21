// Write a function that takes two user’s browsing histories as input and returns the longest contiguous sequence of URLs that appears in both.
// Sample output:
// (user0, user2):
//    /four.html
//    /six.html
//    /seven.html
// (user1, user2):
//    /two.html
//    /three.html
//    /four.html
//    /six.html
// (user0, user3):
//    None
// (user1, user3):
//    /three.html
// var user0 = [ "/nine.html", "/four.html", "/six.html", "/seven.html", "/one.html" ];
// var user1 = [ "/one.html", "/two.html", "/three.html", "/four.html", "/six.html" ];
// var user2 = [ "/nine.html", "/two.html", "/three.html", "/four.html", "/six.html", "/seven.html"];
// var user3 = [ "/three.html", "/eight.html" ];
//Input: arrays of strings - browsing history
//Output: array of strings - URLs both visited, consecutive
//user0 = [ "/nine.html", "/four.html", "/six.html", "/seven.html", "/one.html" ];
//user2 = [ "/nine.html", "/two.html", "/three.html", "/four.html", "/six.html", "/seven.html"];
//Output = [ ]
//pointer to second array that starts at the index where it exists
//Iterate through first array
//Check if second array has current value
//Put it in possible output


function binarySearch(arr,target){
  let start = arr[0];
  let end = arr[arr[length-1];
  let mid;

  while(start < end){
    mid = (start+ end) /2;

    if(target === arr[mid]){
      return mid;
    } else if(target < arr[mid]){
      end = mid -1;
    }else{
      start = mid +1
    }
  }
return -1;
}

Logic:
Iterate through first array, find item.
Perform binary search on the other array. If it exists, push in result
