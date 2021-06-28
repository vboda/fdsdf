/**
 * @param  arr is array of elements
 * In insertionSort, the first element of the arr compares with all the other elements in the array
 *  if comparing ele is greater than the comparable element, then the swaping occurs with their respective postions
 *  By end of each iteration the smallest number is should at the starting of the array.
 */
function insertionSort(arr){
    for(let i=0; i< arr.length; i++){
        for(let j=i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        console.log(`Array after ${i+1} iterations`, arr);
    }
    return arr;
}

let arr = [2,3,5,12,33,2,4,55,43];
console.log(insertionSort(arr));