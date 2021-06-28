/* 

function jumpingOnClouds(c) {
    // Write your code here
    let count = 0;
    for(let i = 0; i<c.length; i++){
        if(c[i+2] === 0 && i+2 < c.length){
            i++;
        }
        count++;
    }
    return count-1;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 0, 0, 1, 0, 0]))


*/


function repeatedString(s, n) {
    // Write your code here
    let count = 0;
    for(let i = 0; i<s.length; i++){
        let aIndex = s.indexOf('a', i);
        if(aIndex !== -1){
            i = aIndex-1;
            count++;
        }
    }
    if(n > s.length){
        const iterations = Math.floor(n/s.length);
        count *= iterations;
        const remLen = n - (s.length*iterations);
        if(remLen >0){
            const remStr = s.slice(0,remLen);
            for(let i = 0; i<remStr.length; i++){
                let aIndex = remStr.indexOf('a', i);
                if(aIndex !== -1){
                    i = aIndex-1;
                    count++;
                }
            }
        }
    }
}

console.log(repeatedString('aba', 10));