// puzzle1.js

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Export function for use in other files (optional)
module.exports = filterEvenNumbers;
