function a(){
    console.log('Function a is called');
}

async function b(){
    console.log('async Function is called');
    await promiseFunc();
    console.log('Promised is resolved');
}

function promiseFunc(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(1000);
        }, 4000)
    })
}

b();
a();
console.log('Execution is Done');

/* 
    Function call is made

    The interpreter sees that the function is declared as async which means that it will always return a promise.

    The interpreter starts executing the function.
    
    When it encounters an await keyword, it suspends further execution of that function until the promise that is being awaited resolved.




*/