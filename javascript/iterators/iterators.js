/* 

*/

let obj = {
    a:1,
    b:2
}

/* for(let key of obj){ // here it will throw an error, beacause obj is not an iterable property
    console.log(key);
} */

// to make object as an iterable we have a separate feature in introduced in ES6 i.e Symbols

Symbol.iterator(obj);

for(let key of obj){
    console.log(key);
}
