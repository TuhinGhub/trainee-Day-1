//Write a program to display intersection of two array
function arrayIntersection(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
    return result;
  }
  
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [4, 5, 6, 7, 8];
  console.log(arrayIntersection(arr1, arr2)); // Output: [4, 5]