function countingValleys(steps, path) {
    // Write your code here
    let prev = 0;
    let count=0;
    let valley = 0;
    for(let i = 0; i < steps; i++){
        if(path[i] === 'D'){
            count--;
        }else{
            count++;
            if(count === 0){
                valley++;
            }
        }
    }
    return valley;
}


console.log(countingValleys(12,'DDUUDDUDUUUD'));