
// let i = 1;
// let j = 1;
// let t = 1;

// for(t=1; t<=4;t++){
  
// for(i=1; i<=1; i++){
//   console.log("hi");
//   for(j=1; j<=3; j++){
//     console.log("hello");
//   }
// }
// }

for (let i = 0; i < 6; i++) {
  let line = '';
  for (let j = 0; j < 6 - i; j++) {
      line += '  ';
  }
  for (let k = 0; k < 7; k++) {
      line += '* ';
  }
  console.log(line);
}s