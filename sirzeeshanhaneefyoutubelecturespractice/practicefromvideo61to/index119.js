var str1="hello world";

var str2 = "hello \"world";

var str3 = "hello \n worlds";

var str4 = "hello \\ worlds";

var str5 = "HEEEello \t worlds";

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
console.log(str3);

var lowercase = str1.toLowerCase();
var uppercase = str1.toUpperCase();

console.log(lowercase);
console.log(uppercase);

//slice function on string
var a = str1.slice(-6,-1);//last indexis excluded
console.log(a);

//indexoff and last inedxof ()

var b = "to be or not to be";
var c = b.indexOf("be", 10);//16
console.log(c);

var d = b.lastIndexOf("be", 10);//3
console.log(d);


//using charAt()

var e = b.charAt(3);
console.log(e);


//using replace()

var f = b.replace("be", "hello"); //replaces 1st be with hello
console.log(f);

var g = b.replace(/be/g, "hello"); //replaces all be with hello
console.log(g);

var h = b.split(" "); //spliting at spaces
var h = b.split("o"); //spliting at o
console.log(h);
