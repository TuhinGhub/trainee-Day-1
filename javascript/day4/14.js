// Write a program to reverse an array
function reverseArray(arr) {
    for (let left = 0, right = arr.length - 1; left < right; left++, right--) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
    return arr;
  }
  let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr)); 
