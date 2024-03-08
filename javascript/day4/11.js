// Write a program to sort an array (bubble sort)
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  let arr = [5, 2, 9, 1, 5, 6];
  console.log(bubbleSort(arr));