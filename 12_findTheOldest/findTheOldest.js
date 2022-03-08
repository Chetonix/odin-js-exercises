const findTheOldest = function(people) {
    minYears = 0;
    targetPerson = null;
    let yearsLived = 0;
    for (let person of people) {
        if (!person.yearOfDeath) {
            yearsLived = new Date().getFullYear() - person.yearOfBirth;
        }else {
            yearsLived = person.yearOfDeath - person.yearOfBirth;
        }
        if (yearsLived > minYears) {
            minYears = yearsLived;
            targetPerson = person;
        }
    }
    return targetPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
