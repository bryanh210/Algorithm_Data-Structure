/*

http://programmingkoala.com/index.php/company-specific-questions/coderpad-interview-question/

Suppose you are creating an internal networking site for your company. You have two data sets to work with. The first data set is the employees at your company, and the second is all the pairs of employees who are virtually friends so far. It does not matter which employee's ID is in which column, the friendships are bidirectional.

You want to know who’s friends with whom. You need to implement a function that, given the employees and friendships as parameters, returns this data in the form of an adjacency list representation. This should associate each employee ID to his/her friends on the site.


              1 - 6
             / \
            2   3
          /
         4

    9


    var friendships_input = [
  "1,2",
  "1,3",
  "1,6",
  "2,4"
];

{
  1: 2,3,6;
  2: 4,1,
  3:1,
  4:2,
  6: 1,


}


 split string = ["1","Richard", "Engineering"]

 {1
 2,
 3,
 4,
 6,
 9}


 //convert friendships_inputs into number
 ParseInt();

 { 1: [2,3,4],

SO SPLIT THE FRIENDSHIP ARRAY INTO 2: A AND B
WITH A, PUSH B IN
IF OBJECT[B] IS EMPTY, PUSH A IN
*/

function findNetWork(employees, friendships){
  let result = {};

  // console.log(employees);

  employees.forEach((employee) =>{
    let employeeArray = employee.split(",");
    let employeeId = parseInt(employeeArray[0]);
    result[employeeId] = [];
  })

  // console.log(result);
   // result: [1: []; 2: []]

  friendships.forEach((friendship) =>{
    let friendshipArray = friendship.split(",");
    let friendshipId = parseInt(friendshipArray[0]);
    // let friendshipIdValue = parseInt(friendshipArray[1]);
    let friendshipValueinFriendship = parseInt(friendshipArray[1]);
    let friendshipIdValue = result[friendshipId];

    if(!result.hasOwnProperty(friendshipId)){
      result[friendshipId]= friendshipArray[1];
    }else{
      friendshipIdValue.push(friendshipArray[1]);
    }
  });
  // result: { 1: [2,3,4]; 2:[1]...}

  return result;
}




var employees_input = [
  "1,Richard,Engineering",
  "2,Erlich,HR",
  "3,Monica,Business",
  "4,Dinesh,Engineering",
  "6,Carla,Engineering",
  "9,Laurie,Directors"
];

var friendships_input = [
  "1,2",
  "1,3",
  "1,6",
  "2,4"
];


console.log(findNetWork(employees_input, friendships_input))

// {
//   1: [2, 3, 6],
//   2: [1, 4],
//   3: [1],
//   4: [2],
//   6: [1],
//   9: []
// }
