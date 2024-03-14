//Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})


let arr = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  arr.forEach(item => delete item.id);
  console.log(arr);
