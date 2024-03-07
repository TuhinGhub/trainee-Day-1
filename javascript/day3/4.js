//Write a program to print all even number first and then all odd numbers

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let out='';

for (let i = 0; i < a.length - 1; i++) {
    if (a[i] % 2 == 0)
        out+=a[i]+' ';
}

for (let i = 0; i < a.length - 1; i++) {
    if (a[i] % 2 != 0)
       out+=a[i]+' ';
}
console.log(out);