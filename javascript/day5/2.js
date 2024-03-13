//Write a program to sort an array of object on the basis of age ({name:"John", age:26})
let arr = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 }
];
    
 arr.sort((a, b) => a.age - b.age);
 console.log(arr);
  
  