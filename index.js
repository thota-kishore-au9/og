// index.js
const calci = require('./calci');

console.log(calci);

const emp = new calci.Employee('John Doe', 123);

const res = emp.getDetails();

let a = calci.add(15, 5);
let b = calci.div(15, 5);
console.log("sum =", a);
console.log("div =", b);
console.log(res);
