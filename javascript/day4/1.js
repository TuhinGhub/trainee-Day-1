//Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")


let str= "Hello Yellow";

console.log(str);
const removeDuplicates = str => [...new Set(str)].join('');
console.log(removeDuplicates(str));