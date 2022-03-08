const findTheOldest = function(people) {
    minYears = 0;
    targetPerson = null;
    for (let person of people) {
        let yearsLived = person.yearOfDeath - person.yearOfBirth
        if (yearsLived > minYears) {
            minYears = yearsLived;
            targetPerson = person;
        }
    }
    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
