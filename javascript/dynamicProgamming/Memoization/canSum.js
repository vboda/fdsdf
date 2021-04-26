/*
    CAN SUM
    write a function canSum(targetSum, numbers) that takes in a 
    targetSum and an array of numbers as arguments.

    The function should return a boolean indicating whether or not it is possible to generate 
    the targetSum using numbers from the array

    ** you may use an element of the array as many times as needed.
    ** you may assume that all input numbers are non negative.
*/


function canSum(targetSum, numbers){
    // targetSum - each number
    // result number needs to check whether the given number is greater than or equal to given number
    // subtrat that numbers and repeat the process
    if(targetSum === 0) return true;
    else if (targetSum < 0) return false;
    else {
        for(let num of numbers) {
            let remainder = targetSum - num;
            if(canSum(remainder, numbers)) return true; 
        }
        return false;
    }
}


function canSumUsingMemo(targetSum, numbers, memo = {}) {
    if(targetSum in memo) return memo[targetSum];
    else if(targetSum === 0 ) return true;
    else if(targetSum < 0) return false;
    else {
        for(let num of numbers) {
            let remainder = targetSum - num;
            memo[targetSum] = canSumUsingMemo(remainder, numbers, memo);
            if(memo[targetSum]) return true;
        }
        return false;
    }
}


// console.log(canSum(7,[2,3])) // true
// console.log(canSum(7,[5,3,4,7])) // true
// console.log(canSum(7,[2,4])) // false
// console.log(canSum(8,[2,3,5])) // true
// console.log(canSum(300,[7,14])) // true



console.log(canSumUsingMemo(7,[2,3])) // true
console.log(canSumUsingMemo(7,[5,3,4,7])) // true
console.log(canSumUsingMemo(7,[2,4])) // false
console.log(canSumUsingMemo(8,[2,3,5])) // true
console.log(canSumUsingMemo(300,[7,14])) // true