/* ITERATION CONSTRUCT / LOOPS
an algorithm needs to repeat certain steps until told to stop or until a particular condition has been met.
●	Loops are handy, if you want to run the same code over and over again, each time with a different value.
The for loop consists of three main parts: initialization, condition, and increment (or decrement). Loop can be static or dynamic,

1. Count Controlled Loops - FOR loop
2. Condition controlled - While Loop
3. Condition controlled - do While Loop
4. Condition controlled - Infinite Loop

1. Count Controlled Loops - FOR loop
For Loop : initialization, stopping condition, updation : starts with initil setting of i = 0, next comes to stopping
condition and checks then comes in block calculation or print then after block of code comes to the updation ++, after
once printing ++ becomes 2 because i is initially set to 1, after updation again stopping condition is being checked whether 2<5 then again comes in /n
again printed. */
//
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best number");
    }
    console.log(element);
}
;
//Nested for loop
for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner value is ${j} & outer value is ${i}`) 
        //console.log(`${1} * ${j} = ${i*j}`) Multiplication table printing
    }
}
// Basics for putting loops on arrays
let hero_array = ["flash", "Superman", "batman"];
for (let i = 0; i < hero_array.length; i++) { // if we write <= according to index it goes out at 4 and shows underfined 
    const element = myArray[i];
    //console.log(element)  
}
//Break and Continue Key word v imp as in dev we always dont want to run complete loop on basic of data requirmenet
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${index}`);
//                                                   // ALt +shit + down key
// }

//continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}
//Print 1 to 10 Loop
for (let count = 1; count <= 10; count++) {
    console.log("Aimon Shakeel");
}
console.log("Loop has ended");

// to Calculate sum of 1 to 5 numbers
let sum = 0;
for (let i = 1; i <= 5; i++) { // every time i is being added in sum
    sum = sum + i; // start 0+ =1 = 1, update and i value will be 2 and stopping condition will be true,so i value 1 + 2 =3.
    // 1 + 2 = 3, 3 + 3 = 6, 6 + 4 =10, 10 + 5 = 15
}
console.log(`sum = " ${sum}`);

// to Calculate sum of 1 to 100 numbers
let sum1 = 0;
let n = 10000;

for (let i = 1; i <= 5; i++) {
    console.log(`i =  ${i}`);
}
console.log("Loop has ended");


//2. Condition controlled - While Loop
// all loops are same with initliazing , condition check, increment or decrement or any other condition check as well
// here in while loop initization comes at start and termination comes at the end
let index1 = 0;
while (index <= 10) {
    console.log(`Value of Index is ${index}`);
    index = index + 2;
}

//Doing While loop for any array
let myArrays1 = ['Flashman', 'Batman', 'Superman'];
let arr2 = 0;
while (arr < myArray1.length) {
    console.log(`Value is ${myArray1[arr]}`);
    arr = arr + 1;
}
let i = 1;
while (i <= 5) {
    console.log(" we are printing 1 to 5 while  loop");
    i++;
}

// prog 2
/*let total = 0;

let more_numbers: boolean = Yes;
while (more_numbers == yes){
    input a number
    add number to total
    ask 'Any more numbers? Yes/No'
    say what the total is
} */
// This algorithm would keep iterating until the answer at the end of the loop is ‘No’, ie it will continue to iterate WHILE there are more numbers to add. A condition-controlled loop would be used because there is no way of knowing in advance how many more numbers will need to be entered before the algorithm stops.






// 3. Condition Controlled Loop - do While Loop
//at once do will always run then condition will be checked
let score = 1; // if 11 then score is 11
do {
    console.log(`Score is ${score}`);
    score = score + 1;
} while (score <= 10);
//
let iy = 20;
do {
    console.log(` This is a do while Loop`);
    i++;
} while (i <= 10);
// Printing 1 to 5
let s = 1;
do {
    console.log(`s = ${s}`);
    s++;
} while (s <= 5);


// For Of Loop, Array Specific loop, 
// [{}, {}, {}] this will be a common scenerio that we have object in array and need to extract 
const arrs2 = [1, 2, 3, 4, 5];
for (const num of arr2) {
    console.log(num);
}
// for of  loop on strings
const greetings = "Hello World!";
for (const greet of greetings) {
    console.log(`Each Char is ${greet}`);
}
let str = "Aimon";
let size = 0;
for (let i of str) { // i is iterator
    console.log(` i = ${i}`);
    size++;
}
console.log(` string size = ${size}`);

//Map method always return a unique value also the order & putting loops on map
const map = new Map();
map.set('pk', "Pakistan");
map.set('Fr', "France");
// console.log(map);
// for (const key of map) {
//     console.log(key)
// }
// or other way
for (const [key, value] of map) {
    // console.log(key, ':-', value)
}
export {};
//for off loop on an Object dont work for object, Objects can iterate using this loop
// const myObject = {
//     'game' :'NFS',
//     'game2': 'Spiderman'
// }
// for (const [key , value] of myObject ) {
//     console.log(key, ':-', value)
// }
// // Practice Questions
// // print all the even numbers 0 to 100
// for ( i = 0; i<=100 ; i++) {
//    if ( i%2 === 0)
//    console.log( ` i = ${i}`);
// }



//++++++++++++++++++++++++++++

// Iteration with condition statements
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best number");
    }
    console.log(element);
}
;
//2
let newUsers = 2;
for (let i = 0; i < newUsers; i++) {
    const element = i;
    if (element <= newUsers) {
        console.log("user is updated");
    }
    else if (element <= 5) {
        console.log("User is updated - 5 more enteries to go");
    }
    else if (element <= 5 && element >= 8) {
        console.log("user is updated - Hurry up 8 is done 2 more to go");
    }
    else {
        console.log("ID cannot be assigned - Enteries are Completed!");
    }
}
//Nested for loop
for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner value is ${j} & outer value is ${i}`) 
        //console.log(`${1} * ${j} = ${i*j}`) Multiplication table printing
    }
}
// Basics for putting loops on arrays
let myArray = ["flash", "Superman", "batman"];
for (let i = 0; i < myArray.length; i++) { // if we write <= according to index it goes out at 4 and shows underfined 
    const element = myArray[i];
    //console.log(element)  
}
//Break and Continue Key word v imp as in dev we always dont want to run complete loop on basic of data requirmenet
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${index}`);
//                                                   // ALt +shit + down key
// }
//continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}


//Doing While loop for any array
let myArray1 = ['Flashman', 'Batman', 'Superman'];
let arr = 0;
while (arr < myArray1.length) {
    console.log(`Value is ${myArray1[arr]}`);
    arr = arr + 1;
}
// let i = 1;
// while (i<=5) {
//     console.log(" we are printing 1 to 5 while  loop");
//     i++;
// }
// // // prog 2
// // /*let total = 0;
// // let more_numbers: boolean = Yes;
// // while (more_numbers == yes){
// //     input a number 
// //     add number to total
// //     ask 'Any more numbers? Yes/No'
// //     say what the total is 
// // } */
// // // This algorithm would keep iterating until the answer at the end of the loop is ‘No’, ie it will continue to iterate WHILE there are more numbers to add. A condition-controlled loop would be used because there is no way of knowing in advance how many more numbers will need to be entered before the algorithm stops.
// // //
//for off loop on an Object dont work for object, Objects can iterate using this loop
// const myObject = {
//     'game' :'NFS',
//     'game2': 'Spiderman'
// }
// for (const [key , value] of myObject ) {
//     console.log(key, ':-', value)
// }
// // Practice Questions
// // print all the even numbers 0 to 100
// for ( i = 0; i<=100 ; i++) {
//    if ( i%2 === 0)
//    console.log( ` i = ${i}`);
// }
// / // }
// // // Infinite loop with break condition
// // let i1: number = 0;
// // while (true) {
// //     console.log("Loop iteration: " + i1);
// //     i++;
// //     if (i1 >= 10) {
// //         break; // Exit the loop when i is greater than or equal to 10
// //     }
// // }
// // //Although this example appears to be an infinite loop initially, it has an internal break condition that stops the loop when i becomes greater than or equal to 10
// // //Recursive Function
// // function infiniteLoop() {
// //     console.log("This is an infinite loop!");
// //     infiniteLoop(); // Calls itself infinitely
// // }
// // // Invoke the function to start the infinite loop
// // infiniteLoop();
// // // n this example, the function infiniteLoop continuously calls itself, creating an infinite recursion.
// // 

//Session 3
// // // loop has three parts starting point, condition and increment
// // let countries = ["Afghanistan", "Pakistan", "Iran"]; // here countires is array type object
// // let x = 0;
// // /*for (;  x < countries.length; x++) {
// //     console.log(countries[x].length); // here if we put a value in array it only prints and check thts i, we are putty x to check all and index value changes as well
// //     for (let y= 0; y<countries[x].length;y++){
// //         if (countries[x].charAt(y) =="a" || countries[x].charAt(y)=="A")  
// //         console.log("*");
// //         else
// //         console.log(countries[x].charAt(y));
// //         /*console.log(countries[x].charAt(y));
// //     }
// // }
// // /*console.log("Pakistan".toLowerCase());
// // console.log("Pakistan".toUpperCase()); */ // upper condition can be made better with these two methods
// // //Simple loop example
// // for (x = 0;  x < countries.length; x++) /*{
// //    /* if (countries[x].length>5){
// //         console.log (`${countries[x]} Length=${countries[x].length}->Check`);
// //     }else {
// //         console.log (`${countries[x]} -> un-Check`);
// //     }
// //     }*/
// //     if (countries.includes("Pakistan")) {
// //         console.log("Pakistan Zindabad");
// //     }
// // /* for (x=1; x<5; x++){ // x++ is a counter means whenever check, this is a post operator add value after bracket
// //     console.log(x);
// // }
// // // we can also use loop in reverse as below
// // x=10;
// // for(;x>0;x++){
// //     console.log(x);
// // } 
// // // never ending loop
// // for (;true;x++) {
// // };
// //  // it has three parameters 1st variable, 2nd of testing, and third incrementing, we will find different ways of usinf it
// // */ 
