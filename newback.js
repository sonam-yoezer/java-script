const prompt = require("prompt-sync")();

let name = [];
let id = [];
let date = [];

let choice;

do{
  console.log("\t\tEMPLOYEE MANAGEMENT SYSTEM");
console.log("\t\t\tEMPLOYEE LIST\n");
console.log("EMPLOYEE NAME:\t\tEMPLOYEE ID:\t\tDATE:");
console.log("\n1.ADD EMPLOYEE\n2.REMOVE EMPLOYEE\n3.UPDATE EMPLOYEE\n4.EXIT");

choice = parseInt(prompt("Enter a number between (0-4): "));

for (i = 0; i<=name.length; i++){
  console.log(name[i]+"\t\t"+id[i]+"\t\t"+date[i]);
}

switch(choice){
  case 1:
    addEmployee();
    break;
  case 2:
    

  break;

  case 3:

  break;

  case 4:
  console.log("Exit");
  break;
}


}while(choice!=4);

function addEmployee(){

  let userName = prompt("Enter your name: ");
  let userId = id.length+1;
  let userDate = prompt("Enter date: ");

  name.push(userName);
  id.push(userId);
  date.push(userDate);
}