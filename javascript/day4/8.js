//Write a program to remove dupliacte elements from an array


function unique(arr) {
    return [...new Set(arr)];
  }
  
let arr = [1,2,2,3,4,5,5,4,6,7,1,37,2,8];
console.log(unique(arr)); 