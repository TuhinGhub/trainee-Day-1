let str= "Hello Yellow";

console.log(str);
const removeDuplicates = str => [...new Set(str)].join('');
console.log(removeDuplicates(str));