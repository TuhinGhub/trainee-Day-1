function func1(a, b) {
    return a + b;
}

function callfunction(func1) {
    return 5 + func1(2, 4);
}

let sum = callfunction(func1);
console.log("The sum is " + sum);
