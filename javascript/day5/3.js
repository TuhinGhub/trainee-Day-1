let arr = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
    for (let i = 0; i < arr.length; i++) {
      delete arr[i].id;
    }
  console.log(arr);
