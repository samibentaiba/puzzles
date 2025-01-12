// puzzle4.js

class Queue {
  constructor() {
      this.queue = [];
  }

  enqueue(element) {
      this.queue.push(element);
  }

  dequeue() {
      return this.queue.shift();
  }

  peek() {
      return this.queue[0];
  }

  isEmpty() {
      return this.queue.length === 0;
  }
}

// Export the Queue class
module.exports = Queue;
