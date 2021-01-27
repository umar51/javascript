//making object of one row
const book = new Object ({ title: '1994', author : 'George Orwell'});
console.log(book);

//making object of many rows
const mybooks = [
    new Object ({ title: '1994', author : 'George Orwell'}),
    new Object ({ title: '1994', author : 'George Orwell'}),
    new Object ({ title: '1994', author : 'George Orwell'})

];

console.log(mybooks);
console.log(typeof mybooks)


//converting objects to JSON text format
console.log("----JSON FORMAT----")

jbook=JSON.stringify(book);
console.log(jbook);

jmybooks=JSON.stringify(mybooks);
console.log(jmybooks);

//converting the JSON text back to object format
console.log("----OBJECT FORMAT----")
obook = JSON.parse(jbook);
console.log(obook);

omybooks = JSON.parse(jmybooks);
console.log(omybooks);

//calling an item from objects that have been converted from json
console.log("Title of Third row is " + omybooks[2].title)

