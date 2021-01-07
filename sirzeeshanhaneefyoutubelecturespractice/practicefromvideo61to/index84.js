
var a = 0;

var b = 5;

var c = a && b; //and operator gives that value where 1st false comes, otherwise last value is returned
                //a=0 so its 1st false so 0 is returned

console.log("C = "+c);

var c = b && a;
console.log("C = "+c); //similarly and looks for false and false is a = 0 so 0 is returned

var d = null || b || true; //OR looks for 1st true, here b=5 is 1st true so its returned

console.log("d = "+d);

var d = null || true || b; // here true is 1st true so its returned

console.log("d = "+d);

