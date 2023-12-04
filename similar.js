const prompt = require("prompt-sync")();

let count = 0;

console.log("Similar Words\n");

let word1 = prompt("word 1: ");
let word2= prompt("Word 2: ");

if (word1.length !== word2.length){
  console.log("Please enter words of the same length.");

}else{
  for(let i = 0; i<word1.length; i++){
    if(word1[i] === word2[i]){
      count++;
    }
  }
}
console.log("Similar words: "+count);