
const prompt = require("prompt-sync")();

let num;
let loop;


console.log("CALCULATOR");

do{
  let num1;
  let num2;

  console.log("Enter what calculation you want to do?");
  console.log("1.Add\n2.Subtract\n3.Multiplication\n4.Division");
  num = parseInt(prompt("Enter your choice:"));

  if(num == 1){
    num1 = parseInt(prompt("Enter number 1:"));
    num2 = parseInt(prompt("Enter number 2:"));

    let a = num1 + num2;

    console.log("The addition value you got is:", a);
  }

  else if(num == 2){
    num1 = parseInt(prompt("Enter number 1:"));
    num2 = parseInt(prompt("Enter number 2:"));

    let a = num1 + num2;

    console.log("The subtraction value you got is:", a);
  }

  else if(num == 3){
    num1 = parseInt(prompt("Enter number 1:"));
    num2 = parseInt(prompt("Enter number 2:"));

    let a = num1 * num2;

    console.log("The multiplication value you got is:", a);

  }

  else if (num == 4){
    num1 = parseInt(prompt("Enter number 1:"));
    num2 = parseInt(prompt("Enter number 2:"));

    let a = num1 / num2;

    console.log("The division value you got is:", a);

  }

  else{
    console.log("Invalid choice");
  }

  loop = parseInt(prompt("Enter 1 to perform one more time and press 2 to close:"));

}while(loop == 1);

console.log("Calculator closed");