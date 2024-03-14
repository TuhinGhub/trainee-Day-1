//Write a program to iterate over object.
const iterateObject=(obj)=>{
    for  (let key in obj) {
        console.log("key:"+key+" Value:"+obj[key])
    }
}


let obj={
    name:'John',
    age:30,
    city:'New York'
};
iterateObject(obj);