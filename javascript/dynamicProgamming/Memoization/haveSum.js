/*
    HAV SUM
    write a function haveSum(targetSum, numbers) that takes in a 
    targetSum and an array of numbers as arguments.

    The function should return atleast one possible combination of targetSum

    ** you may use an element of the array as many times as needed.
    ** you may assume that all input numbers are non negative.
*/


function howSum(targetSum, numbers){
    if(targetSum === 0) return [];
    else if(targetSum < 0) return null;
    else {
        for(let num of numbers){
            const remainder = targetSum - num;
            const remainderValues = howSum(remainder, numbers);
            if(remainderValues !== null) {
                console.log('rem', remainderValues);
                const result = [...remainderValues, num];
                console.log('res', result);
                return result;
            }
        }
        return null;
    }
}

// console.log(howSum(7, [2,3])) // [3,2,2]
console.log(howSum(7, [5,3,4,7])) // [4,3]
// console.log(howSum(7, [2,4])) // null
// console.log(howSum(8, [2,3,5])) // [2,2,2,2]
// console.log(howSum(300, [7,14])) // null

