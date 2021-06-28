/**
 * @param  arr of elements
 * In mergeSort the array is divided into two equal parts and those parts are also divided into
 *  equal parts until and unless the length of the arr is less than equal to 1.
 *  then the sorting smallest element is moved to the left and larger one to the right
 *  then compare the respective child nodes and in the similar fashion.
 * 
 */
function mergeSort(arr){
    if(arr.length >= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(arr1, arr2){
    let final = [];
    // while(arr1.length  && arr2.)
}