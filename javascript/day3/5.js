
// Write a program to print all even number first and then all odd numbers using only one iteration
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = '';
let oddNumbers = '';

for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
        evenNumbers += a[i] + ' ';
    } else {
        oddNumbers += a[i] + ' ';
    }
}

console.log(evenNumbers + oddNumbers);
