//Write a program to display Diamond Pattern

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
//  *

const rows = 5;
const mid = Math.ceil(rows / 2);
for (let i = 1; i <= mid; i++) {
    let row = '';
    for (let j = mid; j > i; j--) {
        row += ' ';
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
        row += '*';
    }
    console.log(row);
}

for (let i = mid - 1; i >= 1; i--) {
    let row = '';
   
    for (let j = mid; j > i; j--) {
        row += ' ';
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
        row += '*';
    }
    console.log(row);
}
