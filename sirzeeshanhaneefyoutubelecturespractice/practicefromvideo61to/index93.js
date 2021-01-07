
var num = prompt("Enter number to check prime number!!");
var isPrime = true;

for (i=2; i<num; i++){
    if (num%i==0){
        console.log("Number is not prmie number");
        isPrime= false;
        break;
    }
    
}
if (isPrime){
    console.log("Number is  PRIME NUMBER")
}