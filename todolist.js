const prompt = require("prompt-sync")();

let task;

task=prompt("Task: ");

switch(task){
  case 'Breakfast':
  console.log("8am");
  break;

  case "Praying":
    console.log("8:30am");
    break;

  case "Dressing":
    console.log("8:40am");
    break;

  case "Moving":
    console.log("8:50am");
    break;

  case "Class":
    console.log("9:30am");
    break;

  case "Break":
    console.log("10:30am");
    break;

  case "Lunch":
    console.log("1:00pm-2:00pm");
    break;

  case "Over":
    console.log("5:00pm");
    break;

  case "Dinner":
    console.log("8:30pm");

}