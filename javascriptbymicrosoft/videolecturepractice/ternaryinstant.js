//normal if else

const a = 300;

if (a ===200) {
    console.log("True");
} else if(a===400) {
    console.log("Error");

}else{
    console.log("Unknown value")
}

//shortform of if else without {}



if (a ===200) console.log("True again");
else if(a===400) console.log("Error again ");
else console.log("Unknown value again");


//Ternary Instant works similar to above if else

const ternary = (a === 200) ? "True 200":"Wrong not 200";
console.log(ternary);
