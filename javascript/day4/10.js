//Write a program to concatenate an input of array of arrays
function concatArrays(arrOfArrays) {
    let result = [];
    for (let i = 0; i < arrOfArrays.length; i++) {
      result = result.concat(arrOfArrays[i]);
    }
    return result;
  }
  
  let arrOfArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  console.log(concatArrays(arrOfArrays)); 