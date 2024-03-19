//Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.
async function para(){
    let delhiWeather=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27")},1000)
        })
    

    let  mumbaiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('35')
        }, 2000)
    })

    let showD=await  delhiWeather;
    let showM=await mumbaiWeather;
    return[showD,showM];
}
para().then(data=>console.log(data)).catch(err=>console.error(err));