const prompt = require("prompt-sync")();

let user = [];
let num;
let loop;

  for(let i=1; i<=5; i++){
 let userName = prompt("Enter 5 user names: ");
 user.push(userName);
}
do{
num = parseInt(prompt("Enter a number 0-4: "));

if (num==0){
  console.log(user[0]);
}
else if(num==1){
  console.log(user[1]);
}
else if(num==2){
  console.log(user[3]);
}
else if(num==3){
  console.log(user[3]);
}
else if(num==4){
  console.log(user[4]);
}
else{
  console.log("Invalid input");
}


loop = prompt("Do you want you do again?");
}while(loop == 'yes');
console.log("Closed");
