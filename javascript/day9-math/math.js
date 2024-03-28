// .create a new folder named 'math' and create a file math.js. In math.js, define two functions:
// a. add(a, b): takes two numbers as arguments and returns their sum.
// b. subtract(a, b): takes two numbers as arguments and returns their difference.
// create a new file index.js and just export those functions and then use those function in any of the file

const _ = require('lodash');

const add=(a,b)=>{
    let s=_.add(a,b);
    return  s;
}

const subtract=(a,b)=>{
    let d=_.add(a,b);
    return d;
}

module.exports={add,subtract};