const a = parseFloat(prompt("Enter the first number"));
const b = parseFloat(prompt("Enter the second number"));
console.log("Enter choice: PRESS 1 for addition, 2 for subtraction, 3 for multiplication, 4 for division");
const ch = prompt("Enter your choice");

switch (ch) {
    case "1":
        let sum = a + b;
        console.log("The sum of " + a + " and " + b + " is: ", sum);
        break;
    case "2":
        console.log("The difference between " + a + " and " + b + " is : ", a - b);
        break;
    case "3":
        console.log("The product of " + a + " and " + b + " is:", a * b);
        break;
    case "4":
        if (b === 0) {
            console.log("Undefined: Division by zero");
        } else {
            console.log("The value of division of " + a + " by " + b + " is: ", "\nThe quotient is", a / b);
        }
        break;
    default:
        console.log("Invalid choice");
}


