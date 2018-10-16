//
/*
Why do we need the host file? (how does computer know to convert example123.com -> 127.0.0.1)
What's the difference between designing  a website on mobile vs desktop?
What is the biggest difficulty of designing a website across different browsers?/ designing
a website with html, css


*/

// // Test#1
// // Why do we need "typeof"
// // Why do we need == and === ? And what is the difference between them
// // React.js: 1. When do we need componentWillMount?
// //
//
// <Component wide color={"red"} />
// wide === true
//
// // In the following example what is the value of this.props.wide and this.props.color ?
// // Why do we need this.props ?
// // What is this.state and setState method
this.state defines the initial this.state
SetState: merge the object I pass into setState into the current state of the component.
This will kick off a process call reconcilliation which is the most efficient way possible to update the UI based
on this new state
React will construct a new tree of React elements and diff this new tree against the previous element tree
so it knows the exact changes which corrued, allowing us to update only pieces of the UI we want to update
//
//
// // Test#2
// // Function should print (e.g. console.log) all even numbers from 0 to max number (including max number if even)
// // For example printEvenNumbers ( 5 ) => 0 2 4
// // printEvenNumbers ( 10 ) => 0 2 4 6 8 10
// function printEvenNumbers ( max ){
//     // please implement the function
// }
//
//
// // Test#3
// var example = {
//     value: 10,
//
//     left: {
//         value: 1,
//         left: {
//             value: 14,
//             left: null,
//             right: nul
//         }
//     },
//
//     right: {
//         value: -10,
//         left: null,
//         right: null
//     }
// };
//
//
// /**
// * returns bool true if value is present in the provided tree and false if not
// */
// function exists (root , value) {
//     // please implement the function
// }
//
// </script>
//






// function searchTree(element, matchingTitle){
//      if(element.title == matchingTitle){
//           return element;
//      }else if (element.children != null){
//           var i;
//           var result = null;
//           for(i=0; result == null && i < element.children.length; i++){
//                result = searchTree(element.children[i], matchingTitle);
//           }
//           return result;
//      }
//      return null;
// }


//
// function exists(root, value){
//   if(root.value === value || root.left === value || root.right === value){
//     return true
//   }
//   return false
// }

function exists(root,value){
  let result = false;

  function traverse(current, value){
    if(!current) return;
    if(current.value === value){
      return true;
    }
    traverse(current.left, value);
    traverse(current.right, value)
  }

  traverse(root, value);

  return result;
}

=> O(n^2)

function printEvenNumbers(max){

  for(let i = 0; i< max+1; i++){
    if(i% 2 === 0){
      console.log(i)
    }
  }
}


typeOf to check for the type of the data, return a String
ex:
Object (array), boolean, function, string, undefined


This.props.wide is undefined
this.porpps.color: red

this.state: to set the initial state, and to store the state
This: setState: to set the state every time you change it


== vs ===
type coercion: "1" is converted to 1
strict coercion: 1 === 1


ComponentWillMount: is done before the INITIAL render of a component,
and is used to assess props and do any extra logic based upon them
+) Comes before render method
constructor():  creating and initializing an object created within a class.
componentWillMount()
render()
componentDidMount()

+) Does similar thing like a constructor. Constructor sets this.state, but componentWillMount
can only setState:

componentWillMount() {
    setState({ isLoaded: false });
}

constructor(props) {
    super(props);
    this.state = { isLoaded: false };
}


function printPrime(limit){
  const prime = [2];
  // starts at 3
  for(let i = 3; i< limit; i+=2){
    if(checkPrime(i)){
      prime.push(i);
    }
  }
  console.log(prime)
}

function checkPrime(num){
  for(let i = 2; i< num; i++){
    if(num % i === 0){
      return false
    }
  }
  return true;
}

console.log(printPrime(100))


<style>
.a .b { color: "red"; }
.a { color: "yellow"; }
.b { color: "green"; }
</style>

<div class="a">
    <div class="b">
        text
    </div>
</div>

What color will be "text" ? Red --> most specific

https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
