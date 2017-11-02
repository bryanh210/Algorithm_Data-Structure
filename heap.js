//Building out a heap

class Minheap{
  constructor(){
    this.storage = [];

  }
}
//lol

peak(){
  return this.storage[0];
}
size(){
  return this.storage.length;
}
swap(i1,i2){
  [this.storage[i1], this.storage[i2]= [this.storage[i2], this.storage[i1]];
}

insert(val){
  // push it to the array for breadth-first most position
  this.storage.push(val);
  this.bubbleUp(this.size() -1)
}


getParent(child){
  if(child % 2 === 0){
    return (child -2) /2;
  } else{
      return (child -1) /2;
  }
}


// we both bubble up and down like in the array, and swap along the way to meet the condition
bubbleUp(){
  let parent = this.getParent(child);

// condition is parent < child
  while( child > 0 && this.storage[child] < this.storage[parent]){
    this.swap(child, parent);
    child = parent;
    parent = this.getParent(child)
  }
}

removePeak(){
  this.swap(0, this.size() -1);
  let result = this.array.pop();
  this.bubbleDown(0);
  return result;
}

getChild(parent){
  // choose the smaller of the 2 children to swap with
  let child1 = 2 * parent +1;
  let child2 = 2 * parent +2;


// if child1 is out of bound
  if(child1 >= this.size()){
    // return child1 here then error handling later in bubbledown because I cannot just
    // return out of the function. Other bubbledown has to happen too
    return child1;
  } else (child2 >= this.size){
    return child1
  } else if(this.storage[child1] < this.storage[child2]){
    return child1;
  } else{
    return child2;
  }
}

bubbleDown(parent){
  let child = this.getChild(parent);
  // if child is less than size of the array
  while(child < this.size() && this.storage[parent] > this.storage[child]){
    this.swap(child, parent);
    parent = child;
    child = this.getChild(parent);
  }
}





let test = new Minheap();

test.storage = [5,6,7,8,9]

console.log(test);
test.swap(0,3);
console.log(test)



//Ron's answer:
class Minheap{
    constructor(){
        this.storage = [];
    }

    peak(){
        return this.storage[0];
    }

    size(){
        return this.storage.length;
    }

    swap(i1, i2){
        [this.storage[i1], this.storage[i2]] = [this.storage[i2], this.storage[i1]];
    }

    insert(val){
        this.storage.push(val);
        this.bubbleUp(this.size() - 1);
    }

    getParent(child){
        if (child % 2 === 0){
            return (child - 2) / 2;
        } else {
            return (child - 1) / 2;
        }
    }

    bubbleUp(child){
        let parent = this.getParent(child);

        while (child > 0 && this.storage[child] < this.storage[parent]){
            this.swap(child, parent);
            child = parent
            parent = this.getParent(child);
        }
    }

    removePeak(){
        this.swap(0, this.size() - 1);
        let result = this.storage.pop();
        this.bubbleDown(0);
        return result;
    }

    getChild(parent){
        let child1 = 2 * parent + 1;
        let child2 = 2 * parent + 2;

        if (child1 >= this.size()){
            return child1;
        } else if (child2 >= this.size()){
            return child1;
        } else if (this.storage[child1] < this.storage[child2]){
            return child1;
        } else {
            return child2;
        }
    }

    bubbleDown(parent){
        let child = this.getChild(parent);

        while (child < this.size() && this.storage[parent] > this.storage[child]){
            this.swap(child, parent);
            parent = child
            child = this.getChild(parent);
        }
    }

    remove(){

    }

}


let test = new Minheap();

// test.storage = [5,6,7,8,9]

test.insert(5);
test.insert(8);
test.insert(1);
test.insert(10);
test.insert(7);
test.insert(12);
test.insert(9);
test.insert(2);

console.log(test);
console.log(test.removePeak());
console.log(test);
console.log(test.removePeak());
console.log(test);
console.log(test.removePeak());
console.log(test);
console.log(test.removePeak());
console.log(test);
console.log(test.removePeak());
console.log(test);
console.log(test.removePeak());
console.log(test);
console.log(test.removePeak());
console.log(test);
console.log(test.removePeak());
console.log(test);
