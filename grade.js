const prompt = require("prompt-sync")();

let grade;
let loop = "yes";

do{
  console.log("Grade A = 100-90\nGrade B = 89-60\nGrade C = 59-30\nGrade D = 29-10\nGrade E = 10-1\nGrade F = 0\n\n");

  grade = parseInt(prompt("Enter your marks"));

  if(grade<=100 && grade >=90){
    console.log("Grade A");
  }
                                              
  else if(grade<=89 && grade>=60){
    console.log("Grade B");
  }

  else if(grade<=59 && grade>=30){
    console.log("Grade C");
  }

  else if(grade<=29 && grade>=10){
    console.log("Grade D");
  }

  else if(grade<=10 && grade>=1){
    console.log("Grade E");
  }
    
  else if(grade == 0){
    console.log("Grade F");
  }
  else{
    console.log("Your marks should be between 0 - 100");
  }

  loop = prompt("Enter yes to perform one more time and enter no to close:");

} while (loop=="yes");

console.log("System Closed");