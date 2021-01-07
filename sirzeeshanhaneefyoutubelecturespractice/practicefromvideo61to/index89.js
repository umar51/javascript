//for loop

for (x=0; x<10 ; x++){
    console.log(x)
}
for (x=10; x>=0 ; x--){
    console.log(x)
}

//table of any number

var num = prompt("Table of which number!!");
console.log("Table of "+ num);
for (x=0;x<=20;x++){
    if (x==0){
        continue; //skips the current iteration without running code and moves to next iteration
    }
    else if (x==11){
        break; //exits the loop
    }

    console.log(num + "x" + x + "= " + (num*x))
}
console.log("exited loop")