let count = 1;

for (let i = 1; i <= 4; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += count + ' ';
        count++;
    }
    console.log(row);
}
console.log('\n');

for (let i = 1; i <= 4; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += i + ' ';
    }
    console.log(row);
}

console.log('\n');

const rows = 5;
for (let i = rows; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j + ' ';
    }
    console.log(row);
}

for (let i = 2; i <= rows; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j + ' ';
    }
    console.log(row);
}
