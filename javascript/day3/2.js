//Write a program to display following output as shown in figure

1
2 3
4 5 6
7 8 9 10

1
2 2
3 3 3
4 4 4 4

1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

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
