// Stack class
class Stack {
  // Array is used to implement stack
  constructor() {
    this.items = [];
  }

  // Functions to be implemented
  push(element) {
    // push element into the items
    this.items.push(element);
  }
  // [2,3,4]

  // pop function
  pop(){
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0) return 'Underflow'
    return this.items.pop();
  }

  // peek function
  peek(){
    // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1];
  }

  // isEmpty()
  // isEmpty function
  isEmpty(){
    // return true if stack is empty
    return this.items.length == 0;
  }

  // printStack()
  // printStack function
  printStack(){
    let str = "";
    for (let i = 0; i < this.items.length; i++)
      str += this.items[i] + " ";
    return str;
  }
}

// creating object for stack class
let stack = new Stack();

// testing isEmpty and pop on an empty stack

// returns false
console.log(stack.isEmpty()); 

// returns Underflow
console.log(stack.pop()); 

// Adding element to the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Printing the stack element
// prints [10, 20, 30]
console.log('1.peek printStack = ', stack.printStack());

// returns 30
console.log('2.peek return peek element = ', stack.peek());

// returns 30 and remove it from stack
console.log("3.pop cuts peek element from the stack and return's it", stack.pop());

// returns [10, 20]
console.log('4.printStack = ', stack.printStack());