var food = ["burger","pizza","apple","orange"]; //index 0 to 3

console.log(food);

food[7] = "banana";//saving at index 7, 4 to 6 will be left empty
console.log(food[7]);

console.log(food[6]); //empty indexes will retunr undefined

//usin push function

food.push("pineapple");//push will add pineapple on 8th inex in food since last element is add 7 index
console.log(food);
console.log(food[8])

//pop function

var poped = [];

for (x=0;x<=food.length;x++){
    poped.push(food.pop());
}
console.log(poped);

console.log(poped.shift());
console.log(poped);

console.log(poped.unshift("gabbage"));
console.log(poped);

