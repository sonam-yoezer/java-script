const prompt = require("prompt-sync")();

//Define a function named 'greet'
// function greet() {
//   return ("Hello");
// }

// //call the 'greet' function
// greet();

// let a, b, results; //global variables

// a = parseInt(prompt("Enter 1st number: "));
// b = parseInt(prompt("Enter 2nd number"));

// function add() {
//   results = a+b;
//   console.log("1st number + 2nd number: "+results);
// }

// function sub() {
//   results = a - b;
//   console.log("1st number - 2nd number: "+results);
// }

// add();//in the end you should call these function to print
// sub();

// function plan(){
//   //plan function 
//   return "Hello"; // return will pass the value
// }

// console.log(plan()); //parameter it will put inside curly bracket

// function plan (name, age) {//here name and age is parameters 
//   return "Hello"+" "+name+ '\nage: '+age;
// }

// let name = "Budhi";
// let age = 24;
// console.log(plan(name, age))//here name and age is arguments


//paramatter
function add(a = 1, b= 4){
  let sum = a+b;
  return sum;
}

// let result = add(5,3); //explict output
// console.log(result);

// let resulet = add(3);//a value is 3 and b value is replaced to 4 in the given paramater in the function
// console.log(resulet);

// let result1 = add(5,);
// console.log(result1);


let result2=add(5,null);
console.log(result2);

