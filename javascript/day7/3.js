// Convert a callback-based API to a Promise-based API (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })


function fetchData(){
    return new  Promise((resolve,reject)=>{
        setTimeout(() => {resolve("data fetched successfully");
    },1000);
});
}
fetchData().then((value)=>{;
console.log(value);
})