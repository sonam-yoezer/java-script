const prompt = require("prompt-sync")();

let num;
let num1, num2, num3;

num = parseInt(prompt("Enter your choice between 1-2\n"));

if(num==1){
  num1 = parseInt(prompt("Enter number 1:"));
  num2 = parseInt(prompt("Enter number 2:"));
  num3 = parseInt(prompt("Enter number 3:"));
  
}
else if(num == 2){
  num1 = parseInt(prompt("Enter number 1:"));
  num2 = parseInt(prompt("Enter number 2:"));
  num3 = parseInt(prompt("Enter number 3:"));
}
else{
  console.log("Invalid choice");
}

if(num1 < num2 && num1 < num3){
  console.log(num1, num2, num3);
 
}
else{
  console.log("Your number should start from smaller to greater");
}

