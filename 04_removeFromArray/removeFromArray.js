const removeFromArray = function(arr, ...nums) {
    for (let num of nums) {
        let newArr = [];
        for (let i of arr) {
    
            if (i === num) {
                continue;
            }
            newArr.push(i);
        }

    arr = [...newArr];        
    }
    return arr;
};

// console.log(removeFromArray([1,3,7,8], 7, 8));
// Do not edit below this line
module.exports = removeFromArray;
