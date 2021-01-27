const names = ['umar','ahmed','ali'];
let nam= 0;

console.log("---while loop---");
while (nam < names.length){
    console.log(names[nam]);
    nam++
}

//redefined let nam
console.log("---for loop---");
for (let nam = 0; nam < names.length; nam++){
    console.log(names[nam]);
   
}

//defined const name
console.log("---for...of  loop---");
for (const name of names){ 
    console.log(name);
   
}