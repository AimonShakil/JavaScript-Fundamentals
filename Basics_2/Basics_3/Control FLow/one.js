/* what is Control flow or Logic Flow, means necessarliy all code is not meant to run 
means whe we logged in s specific code should run, when we logged out specific code should run */

//if

if (condition) { // this condition should true if false if dont go into scope we ca lwrite literal False as well

}

if (3 != 2) { // true its not equal to  

}

// > < <=, >=, ==, === , !=

if (2 = "2") {
    console.log("is Executed"); //cant do this is TS, can 
}

const temperaturer = 41;

if (temperaturer < 50) {
    console.log( `temp is less than ${temperaturer} `);
} else{
    console.log(" temp is Greater than 50");
}

// Implicit Scope, on one line
const bal = 1000;
if (bal> 500) console.log("test");

// Checking Multiple Conditions through Nesting 

const bal2 = 1000;
if (bal2 <  500) {
    console.log("test")
 } else if (bal2 < 750) {
    console.log("test 2 ") 
 } else if (bal2 < 900) {
    console.log("test 2 ") }
    else {
        console.log( "Less tah 1200");
    }


    // Checking a Real Life Example of A Shopping Cart


let userLogedIn = true;
let debitCardInfroAdded = true;

if (userLogedIn && debitCardInfroAdded) {
    console.log( "allowed for shopping ");
}


     


