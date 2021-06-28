/**
 * @param  arr of elements
 * In selection sort we keep the first element as idle and find out the index of least element from other elements
 * then we compare the least value with the idle element
 * if idle element is greater than the least value
 * then swaping b/w those elements will happen
 * By the end of each iteration the least comes to starting of the array.
 * 
 */
function selectionSort(arr){
    for(let i =0; i< arr.length; i++){
        let leastIndex = i+1;
        for(let j=i+1; j < arr.length; j++){
            if(arr[leastIndex] > arr[j+1]){
                leastIndex = j+1;
            }
        }
        if(arr[i] > arr[leastIndex]){
            [arr[i], arr[leastIndex]] = [arr[leastIndex], arr[i]];
        }
    }
    return arr;
}

let arr = [2,3,5,12,33,2,4,55,43];
console.log(selectionSort(arr));