const obj = {
    a: 1,
    b: { c: 2, d: [3, 4] }
 };
 
 
 function flattenObject(obj, prefix = '') {
    let flatObj = {};
    for (let key in obj) {
      let value = obj[key];
      let newKey = prefix ? `${prefix}.${key}` : key;
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        Object.assign(flatObj, flattenObject(value, newKey));
      } else {
        flatObj[newKey] = value;
      }
    }
    return flatObj;
  }

  
  console.log(flattenObject(obj));
  
