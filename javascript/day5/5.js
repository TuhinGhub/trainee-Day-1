// Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
// const obj = {
//    a: 1,
//    b: { c: 2, d: [3, 4] }
// };
// Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }


 
const obj = {
    a: 1,
    b: { c: 2, d: [3, 4] }
 };
 
 
 const flattenObject=(obj, prefix = '')=> {
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
  
