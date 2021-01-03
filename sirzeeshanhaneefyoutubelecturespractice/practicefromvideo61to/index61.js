
let age = prompt("What is your age", "50"); //second argument is default value
 
console.log(age);

let newage = age + 100;

console.log(newage);

//converting string to number

agenum = Number(age); //similarly parseInt() and parseFloat() can be used

newage = agenum + 100;

console.log(newage); //if string input is entered into prompt then NaN is returned here by Number()


