const prompt = require("prompt-sync")();

let fname = [];
let date = [];
let id = [];

let theirChoice;

do{

console.log('\t \t \t EMPLOYEE MANAGEMENT SYSTEM \n');
console.log('\t \t \t \t EMPLOYEE LIST \n');


console.log('EMPLOYEE NAME: \t EMPLOYEE ID: \t    DATE: \n');

for(let i = 0; i<fname.length; i++){
    console.log(`${fname[i]} \t\t ${id[i]}\t\t\t${date[i]}`);
}

console.log('1.ADD EMPLOYEE');
console.log('2.REMOVE EMPLOYEE');
console.log('3.UPDATE EMPLOYEE');
console.log('4.EXIT');

theirChoice = prompt('ENTER A NUMBER (0-4) : ');

switch(theirChoice){
    case '1':
    addEmployee();
        break;

        case '2':
            let remove = prompt('Enter which name to delete: ');
            
            let index = fname.indexOf(remove);

            if(index !== -1){
                fname.splice(index, 1); //splice is a features of array that delete and add value simultanuesly.
                console.log(`${remove} deleted successfully`);
               
            }else{
                console.log(`${remove} is not found in the array`);
                console.log('\n\n');
            }       
            break;

        case '3':
            let update = prompt('Enter a name to be update: ');

            let updateIndex = fname.indexOf[update];

            if(updateIndex !== -1){
                let updateName = prompt('Enter a updated name: ');
                let updateDate = prompt('Enter a updated Date: ');

                fname.splice(`${updateIndex}, 1, ${updateName}`);
            }else{
                console.log(`${updateName} is not found`);
            }

             break;

         case '4':
            console.log('Exit');
            break;
}
}while(theirChoice !== '4');

function addEmployee(){
    let entername = prompt('Enter your name: ');
    let newId = id.length + 1;
    let enterdate = prompt('Enter a date: ');
   
    fname.push(entername);
    id.push(newId);
    date.push(enterdate);
}