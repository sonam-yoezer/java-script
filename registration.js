const prompt = require("prompt-sync")();

let loop
let Name=[], Cpassword, Password=[];
let name2, password2;
let signup, login;

do{
  enter = prompt("Enter: login or signup: ");

switch(enter){
  case "signup":
  Name=prompt("Name: ");
   Password=prompt("Enter password: ");
    Cpassword=prompt("Enter confirmation password: ");

    

    if(Password==Cpassword){
      console.log("Sign up sucessfull");
    }else{
      console.log("Password doesn't match please input the correct password");
    }
    break;

    case "login":
      name2=prompt("Name: ");
      password2=prompt("Password: ");

      if(name2==Name && Password==password2){
        console.log("Login successful");
      }
      else if(name2!=Name){
        console.log("User not found");
      }
      else if(password2!=Password){
        console.log("Incorrect password");
      }
    


}

loop =prompt("Do you want to use this service again?");
}while(loop=='yes')
console.log("Thank you");