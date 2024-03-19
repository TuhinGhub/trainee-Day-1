// Convert a callback-based API to a Promise-based API (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data fetched successfully");
    }, 1000);
  });
}
fetchData().then((value) => {
  try {
    if (!value) throw new Error(`data not fetched`);
    console.log(value);
  } catch (error) {
    console.log(error);
  }
});
