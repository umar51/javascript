

var user =parseInt(prompt("Enter numebr to find"));

var num = [3,2,4,5,6,7,9,1,0];
var notfound = true
for (i=0;i<=num.length;i++) {
    if (user==num[i]){
        console.log("NUmber " + num[i] + "found at index " + i);
        notfound = false;
        break;
    }
}
if (notfound){
    console.log("NUmber " + user + " not found");
}
