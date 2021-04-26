/*
                                Grid Traveller
        Say that you are a traveller on a 2D grid. You begin in the top-left corner
        and your goal is to travel to the bottom-right corner.
        you may only move down or right
*/

function gridTraveller(m,n){
    if(m <= 0 || n <= 0) return 0;
    else if(m === 1 && n === 1 ) return 1;
    else return gridTraveller(m-1, n) + gridTraveller(m, n-1);
}


function gridTravellerUsingMemo(m, n, memo = {}) {
    const key = m+'_'+n;
    if(key in memo) return memo[key];
    else if(m <= 0 || n <= 0) return 0;
    else if(m === 1 && n === 1 ) return 1;
    else {
        memo[key] = gridTravellerUsingMemo(m-1, n, memo) + gridTravellerUsingMemo(m, n-1, memo);
        return memo[key];
    } 
}

console.log(gridTraveller(1,1)) // 1;
console.log(gridTraveller(2,3)) // 3;
console.log(gridTraveller(3,2)) // 6;
console.log(gridTraveller(3,3)) // 6;
console.log(gridTraveller(18,18)) // 2333606220

console.log(gridTravellerUsingMemo(1,1)) // 1;
console.log(gridTravellerUsingMemo(2,3)) // 3;
console.log(gridTravellerUsingMemo(3,2)) // 6;
console.log(gridTravellerUsingMemo(3,3)) // 6;
console.log(gridTravellerUsingMemo(18,18)) // 2333606220