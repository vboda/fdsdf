/**
 * @param  arr array of elements
 * In bubble sort
 *  the first element compares with its adjacent elements, if the element is lessthan the 
 *  current element, then the swaping occurs, else next element compares with adjaacent ones,
 *  By the end of each iteration, the largest value should be at the end of the array;
 * 
 */
function bubbleSort(arr) {
  let flag = true;
  for (let i = 0; i < arr.length; i++) {
    flag = true;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = false;
      }
    }
    if(flag){
        break;
    }
  }
  return arr;
}

let arr = [2,3,5,12,33,2,4,55,43];
console.log(bubbleSort(arr));


for(let i = 0; i< arr.length; i++){
  for(let j=0; j < arr.length-i; j++){
    if(arr[k] < arr[j+1]){
      [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
    }
  }
}