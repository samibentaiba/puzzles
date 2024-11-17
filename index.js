// index.js
//it wont work with import i should use module instead :.(
const filterEvenNumbers = require('./puzzles/puzzle1');
const filterPeopleOver30 = require('./puzzles/puzzle2');
const Stack = require('./puzzles/puzzle3');
const Queue = require('./puzzles/puzzle4');
const removeVowels = require('./puzzles/puzzle5');
const getUniqueElements = require('./puzzles/puzzle6');

// Test Puzzle 1: Filter even numbers
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));  // [2, 4, 6]

// Test Puzzle 2: Filter people over 30
const people = [
    { name: 'John', age: 25, email: 'john@example.com' },
    { name: 'Jane', age: 35, email: 'jane@example.com' },
    { name: 'Mark', age: 40, email: 'mark@example.com' }
];
console.log(filterPeopleOver30(people));  // [{ name: 'Jane', age: 35, email: 'jane@example.com' }, { name: 'Mark', age: 40, email: 'mark@example.com' }]

// Test Puzzle 3: Stack
const stack = new Stack();
stack.push('A');
stack.push('B');
stack.push('C');
console.log(stack.pop());  // C
console.log(stack.peek()); // B
console.log(stack.isEmpty()); // false

// Test Puzzle 4: Queue
const queue = new Queue();
queue.enqueue('First');
queue.enqueue('Second');
queue.enqueue('Third');
console.log(queue.dequeue()); // 'First'
console.log(queue.peek()); // 'Second'
console.log(queue.isEmpty()); // false

// Test Puzzle 5: Remove vowels
console.log(removeVowels("Hello World!"));  // "Hll Wrld!"

// Test Puzzle 6: Get unique elements from two arrays
console.log(getUniqueElements([1, 2, 3], [3, 4, 5]));  // [1, 2, 3, 4, 5]
