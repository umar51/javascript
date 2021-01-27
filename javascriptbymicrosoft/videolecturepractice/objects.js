// //creating objects by object literals method
// console.log("Creating Objects with Literal method");
// console.log("\n");
// //making an object
// const book = {
//     title : "1984",
//     author: "George Orwell",
//     isAvailable: false
// };
// console.log("Simple Object");
// console.log(typeof book);
// console.log( book);
// console.log("\n");

// //making an object with methods in it also
// const book1 = {
//     title : "1984",
//     author: "George Orwell",
//     isAvailable: false,
//     checkIn : function(){this.isAvailable = true;},
//     checkOut : function(){this.isAvailable = false;},
// };
// console.log(" Object with methods");
// console.log(typeof book1);
// console.log(book1);
// console.log("\n");
// console.log("\n");
// //making objects using object constructor method
// console.log("Creating Objects with Constructor method");
// console.log("\n");
// //defining only

// const book2 = new Object();
// console.log(" Empty Object Created");
// console.log(typeof book2);
// console.log(book2);
// console.log("\n");
// //passing key value pair variable into new empty object
// datafunc = { title : "1984",
//         author: "George Orwell",
//         isAvailable: false,
//         checkIn : function(){this.isAvailable = true;},
//         checkOut : function(){this.isAvailable = false;},
//      };
// book3= new Object(datafunc);
// console.log(" Object Created with values from a variable object passed to new object");
// console.log(typeof book3);
// console.log(book3);
// console.log("\n");


// //Accessing values from book3 object
// console.log("ACCESSING VALUES FROM BOOK3");
// console.log("\n");

// //Using bracket notation to access and edit values in object book3
// console.log("Using bracked notation");
// console.log(book3.author);
// book3.author = "New author";
// console.log("Changed author name to ",book3.author);
// console.log("\n");
// //Using Dot notation to access and using values from book3

// console.log(book3.isAvailable);
// book3.checkIn(); //calling method of object to change isavailable
// console.log("Changed status of isAvailable by calling the checkout method of object book3");
// console.log(book3.isAvailable);


//Concept of this in funtions and methods
//this returns object with variables of its environment inside that object

const bookobj = {
    checkIn: function() {
        return this;
    }
}
console.log("This from an Object is ", bookobj);

console.log(bookobj.checkIn() === bookobj);


function anotherCHeckIn(){
    return this;
}
console.log("This from main body function is ", anotherCHeckIn);
console.log(anotherCHeckIn() == globalThis);
