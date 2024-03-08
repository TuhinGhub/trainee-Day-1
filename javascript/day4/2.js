//Write a program to reverse a string ("Hello John" => "olleH nhoJ")
let str="Hello John";
console.log(str);
const reverseString= str=>str.split('').reverse('').join('');
console.log(reverseString(str)); 
