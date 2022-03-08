const findTheOldest = function(people) {
    minYears = 0;
    for (let person of people) {
        let yearsLived = person.yearOfDeath - person.yearOfBirth
        if (yearsLived > minYears) {
            minYears = yearsLived;
        }
    }
};

// Do not edit below this line
module.exports = findTheOldest;
