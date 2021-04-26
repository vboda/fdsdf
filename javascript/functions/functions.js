// function Statment OR Function Decalration
function a(){
    console.log('a called');
}

// Function Expression
var b = function (){
    console.log('b called');
}
c

/* The major diffrence between these things is hoisting, 
    At the time hositing a is assigned with function where as b is assigned to undefined until the line no 7.
*/

// Anonymous Functions (Functions without a name is called Anonymous Function)

    // Anonumous functions are used when functions are used as values. Eg: Function Expession

(function (){
    console.log('Anonumous function called')
})()

// Named Function Expression (GIve the name to the function expression)

var d = function xyz(){
    console.log('xyz is called');
}

// the above function can call using d() if we call xyz() it will throw error.


// Difference b/w arguments and parameters

function x(param1, param2){
    console.log('')
}

x('arg1', 'arg2');

// First class Functions

    // The ability to use functions as values is known as FIrst class functions.