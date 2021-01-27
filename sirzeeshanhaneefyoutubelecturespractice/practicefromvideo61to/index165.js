
var cond= true;

while(cond) {
    console.log("Hello")
    y = prompt("Enter y to continue");
    y=y.toLowerCase();
    if(y !== "y"){
        cond=false;
    }
}
console.log("GAME OVER 1");


do {
    console.log("Hello")
    y = prompt("Enter y to continue");
    y=y.toLowerCase();
    if(y !== "y"){
        cond=false;
    }
}
while(cond)
console.log("GAME OVER 2");
