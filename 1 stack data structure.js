/*Implement Stack data structure in JavaScript. It should have seven methods.

push() - add an element to the stack.
pop() - delete an element from the stack.
peek() - get the top element of the stack.
length() - return the length of the stack.
search() - search for the element in the stack.
isEmpty() - check if the stack is empty.
print() - print the elements of the stack.*/

class Stack {
    constructor(){
      this.top = 0;
      this.myData = [];
    }
  
  push(value){
    this.top++;
    return this.myData.push(value);
  }
  
  pop(){
    this.top--;
    return this.myData.pop();
  }
  
  peek(){
    return this.myData[this.top - 1]
  }
  
  length(){
    return this.top;
  }
  
  search(index){
    return this.myData[index];
  }
  
  isEmpty(){
    return this.top === 0 ? true : false;
  }
  
  print(){
    return this.myData.forEach(item => console.log(item));
  }
  
}

let myStack = new Stack();
myStack.push(7);
myStack.push(9);
myStack.push(-5);
myStack.push(16);
myStack.push('some string');

console.log(myStack)

myStack.pop()

console.log(myStack)

console.log(myStack.peek())

console.log(myStack.length())

console.log(myStack.search(2))

console.log(myStack.isEmpty())

myStack.print();