//Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit
const order = (i, limit) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (i <= limit) resolve(`Promise ran for ${i} time`);
      else reject("Limit Exceeded");
    }, i * 1000);
  });
const limit = 10;
for (let i = 1; i <= limit; i++) {
  order(i, limit)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });
}
