
var score = prompt("What is your score?");
score=parseInt(score);

if (score > 80){
    console.log("Grade A");
    if(score > 90){
        console.log("Reward 100rs");
    }
    else if(score > 85){
        console.log("Reward 50rs");
    }
    else {
        console.log("Reward 20rs");
    }

}
else if (score>70){
    console.log("Grade B");

}

else if (score>60){
    console.log("Grade C");

}
else {
    console.log("Failed");

}