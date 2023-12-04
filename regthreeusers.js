const prompt = require("prompt-sync")();
let usernames = [];
let passwords = [];

let continueServices = 'yes';

while (continueServices === 'yes') {
    let register = prompt('Do you want to sign up or log in? ');

    if (register === 'signup') {
        let username = prompt("Enter a username: ");
        let password = prompt("Enter a password: ");
        let mainpassword=prompt("Confirm your password: ")
        if(password!=mainpassword)
        {
          console.log('Password does not match');
        }
        if (usernames.includes(username)) {
            console.log("Username already taken.");
        } else {
            usernames.push(username);
            passwords.push(password);
            console.log("Signup successful!");
        }
    } else if (register === 'login') {
        let loginUsername = prompt("Enter your username:");
        let loginPassword = prompt("Enter your password:");

        let found = false;
        for (let i = 0; i < usernames.length; i++) {
            if (usernames[i] === loginUsername && passwords[i] === loginPassword) {
                found = true;
                break;   
            }
        }
        if (found) {
            console.log("Login successful!");
        } else {
            console.log("Invalid username or password.");
        }
    } else {
        console.log("Invalid choice.");
    }
    continueServices = prompt('Want to use the services again (yes/no): ');
}