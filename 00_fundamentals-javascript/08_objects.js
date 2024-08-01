// Object.create --> constructor method and singelton is being made not discussing here

// Object Literals
//In Objects we can define our Keys and values as well
// here my default system processes  "name" as string like this in backend and system considers it 

const jsObj = {
    name : "Cucumber",
    "fullname" : "AmKhn", // this value can not be accessed through . at all and will done through Squre notation
    [mySym] : "key1", // here without putting squre bracket mySym acts like a String
    age: 23,
    email: "am@gmail.com",
    location: "isb" }



// Accessing an Object
console.log(jsObj.email);
console.log(jsObj["email"]);

// using DataType. Interview Q: How to use Symbol as a Key, take an Object add in Object keys and show a print? 

const mySym =  Symbol("key1")
console.log(jsObj[mySym]); // thts how we can access.

// Changing an Object
jsObj.email = "asm@hotmail.com"

//Locking or freezing an Object

//Object.freeze(jsObj) // after that no changes will be propogated 

// Adding Functions to an Objects , Functions are treated as variables

jsObj.greeting = fucntion() 
    log("hello World!")


console.log(jsObj.greeting());
console.log(jsObj.greeting); // we got function return back, it is not executed we just got refernce here, moving forward 
//

// for referncing ssame Object we can use This we could be able to show all properties 