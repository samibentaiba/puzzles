// puzzle5.js

function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

// Export function for use in other files (optional)
module.exports = removeVowels;
