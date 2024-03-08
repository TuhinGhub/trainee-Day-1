//Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)


let str = "hello john doe";
let newStr = '';

for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
        newStr += str[i + 1].toUpperCase();
        i++; 
    } else if (i === 0) {
        newStr += str[i].toLowerCase();
    } else {
        newStr += str[i];
    }
}

console.log(newStr);
