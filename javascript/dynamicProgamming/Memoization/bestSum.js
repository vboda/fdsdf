/*
    Best Sum
    Write a function bestSum(targetSum, numbers) that takes in a targetSum and an array of numbers
    as arguments

    The function should return an array containing the shortest combination of numbers that add up to 
    exactly the target Sum.
    
    Eg:
        bestSum(7, [5,3,4,7])
            [3,4]
            [7]
            Here expected result is [7].

        bestSum(8, [2,3,5])
            [2,2,2,2]
            [3,5]
            [2,3,3]
*/


function bestSum(targetSum, numbers){
    var finalArr = [];
    if(targetSum === 0) return [];
    else if(targetSum < -1) return null;
    var shortestCoombination = null;
    for(num of numbers){
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers);
        if(!!remainderCombination){
            // console.log('rem', remainderCombination)
            const result = [...remainderCombination, num];
            // console.log('res',result);
            // return result;
            // return result
            if(shortestCoombination === null || shortestCoombination.length > result.length){
                shortestCoombination = result;
            }

        }
    }
    // return null;
    return shortestCoombination;
}


console.log(bestSum(7, [2,3])) // [3,2,2]
console.log(bestSum(7, [5,3,4,7])) // [4,3]
console.log(bestSum(7, [2,4])) // null
console.log(bestSum(8, [2,3,5])) // [2,2,2,2]
// // console.log(howSum(300, [7,14])) // null

// console.log(bestSum(7, [5,3,4,7]))