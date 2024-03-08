//Write a program to convert given string to upperCase OR lowerCase
let str=prompt("enter a string");
if(str === str.toUpperCase()){
    str=str.toLowerCase();
    console.log("Converted to lower case "+str);
}
else{
    str=str.toUpperCase();
    console.log("Converted to upper case "+str);
}
