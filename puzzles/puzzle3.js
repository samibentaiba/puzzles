// puzzle3.js

class Stack {
  constructor() {
      this.stack = [];
  }

  push(element) {
      this.stack.push(element);
  }

  pop() {
      return this.stack.pop();
  }

  peek() {
      return this.stack[this.stack.length - 1];
  }

  isEmpty() {
      return this.stack.length === 0;
  }
}

// Export the Stack class
module.exports = Stack;
