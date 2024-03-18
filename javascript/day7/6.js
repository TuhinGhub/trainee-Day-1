//Implement a function that returns a resolved Promise after a specified delay using async/await.
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};
const wait = async (ms) => {
  await delay(ms);
  return "Waited for " + ms + "ms";
};
wait(8000).then((result) => {
  console.log(result);
});
