// puzzle6.js

function getUniqueElements(arr1, arr2) {
    const combined = arr1.concat(arr2);
    return [...new Set(combined)]; // Use Set to remove duplicates
}

// Export function for use in other files (optional)
module.exports = getUniqueElements;
