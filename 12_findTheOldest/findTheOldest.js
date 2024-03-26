const findTheOldest = function(people) {
  let oldestAge;
  let oldestPerson;
  let currentAge;
  for (person of people) {
    console.log(person);
    if (!oldestAge) {
      oldestAge = getAge(
        person.yearOfBirth,
        person.yearOfDeath
      );
      oldestPerson = person;
    } else {
      currentAge = getAge(
        person.yearOfBirth,
        person.yearOfDeath
      );
      if (currentAge > oldestAge){
        oldestPerson = person;
        oldestAge = currentAge;
      }
    }
  }
  return oldestPerson;
};

const getAge = function(birthYear, deathYear){
  if (!deathYear){
    (deathYear = new Date().getFullYear());
  } 
  return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
