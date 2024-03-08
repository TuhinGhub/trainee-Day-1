//Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")


    let counts = {};
    let str = "abcabcdabbcc";
    for (let char of str) {
        if (counts[char]) {
            counts[char]++;
        } else {
            counts[char] = 1;
        }
    }
    let result = '';
    for (let char in counts) {
        result += char + counts[char];
    }

console.log(result);
