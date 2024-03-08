// Write a program to find the last duplicate index in an array
let arr=[1,2,1,8,9,21,5,8,8];
let c=0;
for(let i=0;i<arr.length-2;i++){
    c=0;
    for(let j=i+1;j<arr.length-1;j++)
    {
        if(arr[i]===arr[j]){
            c=j;
        }
    }
    if(c>0)
    {
        c++;
    console.log("last Duplicate of"+arr[i] + " is found at index "+c);
    }
}