const prompt = require("prompt-sync")();

// let num = [1,2,3,4,5,6,7,8,9,10];

// for(let i = 1; i<num.length; i++){
//   if (num[i] %2==0){
//     console.log(num[i]+" is an even number");
//   }
// }

// for (let j = 1; j<=num.length; j++){
//   if (num[j]%2!=0){
//     console.log(num[j]+" is an odd number");
//   }
// }


let num = [];
let i;

num = parseInt(prompt("Enter number:"));

for (let i = 1; i<=num; i++){
  console.log(i);
}

for (let j = 1; j<=num.length; j++){
  if (j%2==0){
    console.log(j+" is an even number");
  }
}

for (let k = 1; k<=num.length; k++){
  if (k%2!=0){
    console.log(k+ " is an odd number");
  }
}





