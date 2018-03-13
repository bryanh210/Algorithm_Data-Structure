function searchTree(element, matchingTitle){
     if(element.title == matchingTitle){
          return element;
     }else if (element.children != null){
          var i;
          var result = null;
          for(i=0; result == null && i < element.children.length; i++){
               result = searchTree(element.children[i], matchingTitle);
          }
          return result;
     }
     return null;
}



function exists(root, value){
  if(root.value === value || root.left === value || root.right === value){
    return true
  }
  return false
}

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


function printEvenNumbers(max){

  for(let i = 0; i< max+1; i++){
    if(i% 2 === 0){
      console.log(i)
    }
  }
}


typeOf to check for the type of the data, return a String
ex:
Object, boolean, function, string, undefined


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
constructor()
componentWillMount()
render()
componentDidMount()

+) Does similar thing like a constructor. Constructo sets this.state, but componentWillMount
can only setState:

componentWillMount() {
    setState({ isLoaded: false });
}

constructor(props) {
    super(props);
    this.state = { isLoaded: false };
}
