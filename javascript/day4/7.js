//Write a program to find index of duplicate elements in an array
let arr=[1,2,1,8,9,21,5,8,8];
for(let i=0;i<arr.length-2;i++){
    for(let j=i+1;j<arr.length-1;j++)
    {
        if(arr[i]==arr[j]){
            j+=1
            console.log("Duplicate of"+arr[i] + " is found at index "+j);
            break;
       }
    }
}