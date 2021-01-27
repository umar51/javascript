const { string } = require("prop-types");

const greet = "Hello";
const place= "World";

console.log("hello world ");
console.log("%s %s", greet, place);
console.log(`${greet},${place}`); //this output is suitable to read easily for coders while debugging

console.log(typeof greet);
console.log(greet instanceof string);