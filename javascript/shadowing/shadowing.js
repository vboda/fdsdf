
/*  // Here we are shadowing the var a global with var a in block,as both are assigned to global scope.
var a = 10;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a); */

/* // here we are overding the let keyword type
let b = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
// console.log(c); */


/* var b = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b); */

/* // shadowing not happens with overriding of let with var throws an error
let a = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b); */

var a = 100;
if(true){
    var a = 546;
    let b = 10;
    var sum = a+b;
}

console.log(a);
console.log(sum);