//Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.


let obj={
    name: "John",
    age:"25",
    height:{   
        feet:"5"
    } 
};
let user=JSON.parse(JSON.stringify(obj));
user.height.feet="8";
console.log("object is",obj);
console.log("user object is ",user);