/* 4.	Selection Construct/ Conditional or Decision-making statements.

When designing programs, there are often points where a condition needs to be tested in order to make a decision.
Conditions are formed using Boolean logic.

Decision-making constructs are classified as follows –
1.	If
2.	If-Else
3.	Else-If
4.	Switch
5.	Nested if */

/* what is Control flow or Logic Flow, means necessarily all code is not meant to run 
means when we logged in s specific code should run, when we logged out specific code should run */

//if

if (condition) { // this condition should true if false if dont go into scope we can write literal False as well

}

if (3 != 2) { // true its not equal to  

}

// > < <=, >=, ==, === , !=

if (2 = "2") {
    console.log("is Executed"); //cant do this is TS, can 
}

const temperature = 41;

if (temperature < 50) {
    console.log( `temp is less than ${temperature} `);
} else {
    console.log(" temp is Greater than 50");
}

// Implicit Scope, on one line
const bal = 1000;
if (bal> 500) console.log("test");



// Checking a Real Life Example of A Shopping Cart


let userLogedIn = true;
let debitCardInfoAdded = true;

if (userLogedIn && debitCardInfoAdded) {
    console.log( "allowed for shopping ");
}


// Switch statement basic Syntax Below, 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

let months = 3
switch (month) {
    case 1:
        console.log("mont is Jan");
        break;
    case 2:
        console.log("mont is feb");
        break;
    case 3:
        console.log("mont is marc");
        break;
    case 4:
        console.log("mont is apr");
        break;
    case 5:
        console.log("mont is May");
        break;
    case 6:
        console.log("mont is june");
        break;

    default:
        console.log("defualt case match");
        break;
}


     
// merge needed



// 1) If Statement:
//
let age1 = 60;
if (age1 >= 70) {
    console.log("you are aged to perfection");
}
;
//
let mode = "Dark";
let color;
if (mode == "Dark") {
    color = "Black";
}
if (mode == "light") {
    color = "white";
}
console.log(color); // Dark



// 2) If Else Statement  
let ageIndv = 71;
if (ageIndv >= 70) {
    console.log(" you are aged to perfection");
}
else {
    console.log(" you are a spring chicken");
}
;

//
let hasPass = true;
if (hasPass) {
    console.log("Welcome in class");
}
else {
    console.log("Student not allowed");
}

//
let age2 = 25;
if (age2 >= 18) {
    console.log("You can vote");
}
else {
    console.log("Cannot Vote");
}
// 
let bird = "Crow";
let isHungry = false;
let isThirsty = false;
if (isHungry) {
    console.log(`${bird} is hungry`);
}
if (isThirsty) {
    console.log(`${bird} is Thirsty and need water`);
}
else {
    console.log(`${bird} doest want any thing`);
}
;
// 
let pet = "cat";
let ishungry = true;
let isthirsty = false;
if (ishungry == true) {
    console.log(`${pet} is hungry and wants food`);
}
if (isthirsty) {
    console.log(`${pet} wants milk`);
}
else {
    console.log(`Pet dont want anything`);
}

//
let emailInfo = true;
let password = true;
if (emailInfo && password ) {
    console.log("You are signIn");
}
else {
    console.log("Please enter correct email");
}
;

// Even or Odd
let nums = 10;
if (nums % 2 == 0) {
    console.log("Number is even ");
}
else {
    console.log("number is Odd");
}


// If Else using Math Round & random method:

let x = Math.round(Math.random() * 10); //0-1 , 0.1, 0.2,...  multiply from 10 to get values from 1-10.
if (x > 5) { // if this condition is true TS says it true and execute rest of block, and if not true then it comes after this block
    console.log(`The Value of x is ${x} > 5`); //actual no 5 before backticks in both statements
}
else { // where we know that could be possible 2 answers we use if Else statemnts
    console.log(`The value of x is ${x} is less than 5`);
}

// 3) Else If Statement ( this is a Multiple condition statement) 
let balance = 1000;
if (balance < 500) {
    console.log("Less than 500");
}
else if (balance < 750) {
    console.log("Less than 750");
}
else if (balance < 900) {
    console.log("Less than 900");
}
else {
    console.log("Less than 1200");
}

//
let candidate = 17;
if (candidate >= 18) {
    console.log("you can vote");
}
else if (candidate > 10) {
    console.log("You can register for vote");
}
else {
    console.log("you cannot vote");
}
;
//
let mode2 = "Dark"; //to get else we need to like Green
let colrs;
if (mode2 === "Dark") {
    colrs = "Black";
}
else if (mode2 === "light") {
    colrs = "white";
}
else if (mode2 === "Pink") {
    colrs = "Pink";
}
else {
    colrs = "Red";
}
console.log(colrs);

//
let x1 = 50;
if (x1 >= 70) { // 70  or above
    console.log("You are aged to perfecton");
}
else if (x1 >= 50 && x1 <= 70) { // 50 - 69
    console.log("Wow! you are half a century old");
}
else {
    console.log("you are a spring chicken");
}

//Practice Case User purchasing online
const userloggedIn = true;
const debitCard = true; //if true both if run , if false second will execute
const loogedInfromGoogle = false;
const loogedInfromEmail = true;
if (userloggedIn && debitCard && 2 == 2) { // left and right both should be true , here 3 conditions are being checked 
    console.log("Allowed to Buy a Course");
}
if (loogedInfromEmail || loogedInfromGoogle) { // Pipe sign, says or this or that 
    console.log("User Logged In"); // Conditional randering advance using react
}
//
for (let x = 0; x < 5; x++) {
    let rNo = Math.round(Math.random() * 10);
    if (rNo > 5) {
        console.log("Number is greater than 5 " + rNo);
    }
    else {
        console.log("Number is lesser than 5 " + rNo);
    }
}
;

//
let xt = 8;
if (xt > 1 && xt <= 3) {
    console.log(`the Value is ${xt} > Greater than 0 and less than three`);
}
else if (xt >= 4 && xt <= 6) {
    console.log(`the Value is ${xt} which is greater than 4 and less than 6`);
}
else if (xt >= 7 && xt <= 9) {
    console.log(`the Value  is ${xt} greater than 7 and less than 9`);
}
else {
    console.log(`the Value  is ${xt} which is greater than 9 and less than 10`);
}



// 4) SWITCH: switch stetement is alternative to else if statement and same as else if. 
// Syntax: 
// switch (key) { // with this key we can compare
//     case value : 
//     break;
//     default:
//     break;
// }

//Example, where we need to use lots of else if... we prefer to use switch statement
const month = 3;
switch (month) {
    case 1: // can use month name in same case as well to match with values jan
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 4:
        console.log("May");
        break;
    default:
        console.log("Default Case executed");
        break;
}

//
let a1 = 9;
switch (a1) {
    case 1:
        console.log(" Answer is equal to 1");
        break;
    case 2:
        console.log(" Answer is equal to 2");
        break;
    case 3:
        console.log(" Answer is equal to 3");
        break;
    default:
        console.log("default case executed");
        break;
}

/*  5. Nested If Statements: if statement placed inside another if statement
nested if statements are constructed by placing one if statement inside another if statement or inside an else or /n 
else if block. This allows for multiple levels of conditions to be evaluated. */

let c = 30; //Checked with equal and bigger number
if (c <= 25) {
    if (c == 25) {
        console.log("Answer is true");
    }
} else
console.log("number is not true");

