let a=prompt("enter a number");
var b=parseInt(a);
if (isNaN(b)) {
    alert ("please enter valid numbers only");
}
function OddEven(a){
    if(a%2==0) return "true";
    else  return "false";
}
console.log(OddEven(b));
