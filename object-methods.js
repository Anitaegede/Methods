let one= { dogs: 1, cats: 2 };
let two = { rabbit: 4, hamster: 5 };
let returnedTarget = Object.assign(one, two);
console.log(one)
console.log(returnedTarget)
const firstobj = {};

Object.defineProperties(firstobj, {
  prop1: {
    value: 42,
    writable: true
  },
  prop2: {}
});
console.log(firstobj.prop1);

let obj = {
    property: 34
  };
  
  Object.freeze(obj);
  
  obj.property = 33;
  
  
  console.log(obj.property);

  
