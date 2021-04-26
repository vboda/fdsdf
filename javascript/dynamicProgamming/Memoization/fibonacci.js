/* 
    Write a function fib(n) that takes in a number as a arugument.
    The function should return the nth number of the fibonacci series.

    console.log(fib(6));  //8
    console.log(fib(7));  //13
    console.log(fib(8));  //21
    console.log(fib(50));  //12586269025

    0   1   2   3   4   5   6   7   8   9   
    0   1   1   2   3   5   8   13  21  34
*/


function Updatefib(n, memo = {}){
    if(memo[n]) return memo[n];
    else if(n <=2) return 1;
    else {
        memo[n] = Updatefib(n-1, memo) + Updatefib(n-2, memo);
        return memo[n]
    }
}

function fib(n) {
    if (n <=2) return 1;
    else return fib(n-1) + fib(n-2);
}
// console.log(fib(6));  //8
// console.log(fib(7));  //13
// const startTime = new Date();
// console.log(fib(50));  //12586269025
// console.log((new Date() - startTime)/1000, 'sec');
// console.log(fib(8));  //21


console.log(Updatefib(6));  //8
console.log(Updatefib(7));  //13
const startTime2 = new Date();
console.log(Updatefib(100));  //12586269025
console.log((new Date() - startTime2));
console.log(Updatefib(8));  //21