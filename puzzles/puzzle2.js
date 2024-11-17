// puzzle2.js

function filterPeopleOver30(people) {
  return people.filter(person => person.age > 30);
}

// Export function for use in other files (optional)
module.exports = filterPeopleOver30;
