
function doWash () {
    console.log("washing");
}
doWash(); // dowash is refernce and ()is execution if only give refernce means this functrion exists with () it executes

// 1 way 
function addTwoNumbers (num1, num2) {
    console.log(num1, num2); // console is not return it gives undefined
}
const result1 = addTwoNumbers (3 + 5)
console.log("Result : ", result); // here it gives undefined, imp concept that what we have retured 

//correctway
function addTwoNumbers (num1, num2) {
//    let result = num1 + num2
//    return result2 // after return statement nothing executes  (1st way)

return num1 + num2 //2ndWay


}
const result2 = addTwoNumbers (3 + 5)
console.log("Result : ", result); 


// Job is that userLogged in and we want to show him a message
function loginUseressage (username) {
    //return `${username}`
   if (username === undefined) {  
      console.log("Please enter a userName"); 
      return                            // here we check third statement with If else
}
return `${username} just logged in`

}
console.log(loginUseressage ("ammCucum"));// need to put in console otherwiser function executed but nothing displayed 
console.log(loginUseressage (" ")); // with empty string shows just logged In
onsole.log(loginUseressage ( )); // with empty string / passed nothing comes undefined

//In Professional Coding, sometimes to avoid certain Conditions we use !Not symbol like as we know
//that user is undefined and value of Undefined and Null returns False and is false we write !username 
//otherwise it will not go into the if else block, do opposite of it specially I react and react native

// another thing we can pass default value of User in parameter and then it will never be undeifned and if 
//  user gives value it will be overwrite










// How to pass and Object to a Function
let user1 = {
    username : "Am",
    price: 188
}

function handleObject (anyObject) { // we write generic Object Name so That we can pass any Object Name, most imp function do't know what is coming it will be doing on Its basics
    console.log(`User Name is ${anyObject.username} and price is ${anyObject.price}`);

}
handleObject(user1); // compulsory to pass function
handleObject({
    username : "Am",
    price: 188 
});

// Passing an Array to a Function




// Multiples/ Factors , even and odd ( num 5 % 2 === 0 ) 
//Average (a+b+c)/3
// <= , >=
//   //Optional Paramter Function 
//   function myfunc(name : string, class1: string , subject? : string)  {
//     return class1;
//   }
// myfunc("Aimon","one" , "urdu");
// //Arrow Function
// //let avg = (a+b+c)/3
// // how to return accurate
// function addTwo (num : number) : number {
//    return num +2
//     //return "Hello" // this is a point of concern  , this can be avoided by adding a retuen type
// }
// let result = addTwo(5)
// // returning more than one types, can be done by using union types
// function getValue (myVal : number) : boolean | string {
//     if (myVal > 5) {
//         return true
//     }
//     return "200 K"
// }
// function handlerr (errmsg : string) : never {
//     throw new Error ("this is an error")
// }
// // methods of string perform some actin and return information
// // method Application
// let user : string = " My Name is Aimon";
// let userName = user.replace("M", "H"); // starting and ending between values
// console.log(userName);
// // Practice Question
// import inquirer from "inquirer";
// let fName = await inquirer.prompt ([
//     {
//         name : "fn",
//         type : "string",
//         message : "Please enter your full name"
//     },
// ]);
// let userName2 : string = "@" +fName.fn +fName.fn.length;
// console.log(userName2);
let newUsers = 0;
for (let i = 0; i < newUsers; i++) {
    const element = i;
    if (element <= newUsers) {
        /*  10 <= 2 ; false
                                        */
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
export {};

