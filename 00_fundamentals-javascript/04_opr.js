/* Primitive Data Types 7, primitive Types and these are all Call by values means when
we call them/ copy them original data is not being given there refernce is not shared but they are being copied and shared 
and changes being made in copy 

String, number, boolean, null, undefined, Symbol (used at advanced UI development time for component to wrap), bigInt

Refernce or Non Primitive : "reference of these values can be directly allocated in Memory, ad we get reference
of original value what ever we change it will change in original value"
Array, Objects Functions


Declaring Symbols when using frontend library like react 
if even same Values will be passed we will not get same result*/

const id = Symbol('123');
const anotherId = Symbol ('123') // These two looks same but have differnt values and gives values as false on Comparison

console.log( id === anotherId); 

//Big Int

const bigNumber = 1333333333333333333333333333555n 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==

// Memory : Stack Memory (Primitive Types) and Heap Memory (Non Primitive Types)

let myChannelName = "Aimon.s"

let anotherChannelName = myChannelName
anotherChannelName = "Amys"

console.log(myChannelName);
console.log(anotherChannelName);

// Heap memory Concept

let userOne = {
    email: "am@gmail.com",
    id: 1
}

let userTwo = userOne
userTwo.email = "am@hotmail.com"
console.log(userOne.email);
console.log(userTwo.email); // in result we will be getting the same value

// Another way of Declaring String is by using new keyword we are using objects of JS and given name in Constructor ()
// when we copy below code in inspect and call gameName here we get string as an Object length property and many method we get we should master these concepts
// and we can access these all methods with . including length also it doest change our original string being a primitive DT
// used indexOf and CharAt  also to Upper and Lower case ,also sometime we need to sanitize a string 
//so as much about methods we know its good for interviews perspective 

let gameName = new String("ammmi-Sh")

console.log(gameName.charAt(2));
console.log(gameName.indexOf(m));

// sanitize a String

const newString = gameName.substring (0, 5)
console.log(newString); // we only get values from 0-4 index excluding 5

const anotherString = gameName.slice ( 8 , 4) // positive and also negative value 
const anotherString2 = gameName.slice ( -8 , 4) // values in reverse we get


const newStringOne = "   aaaaammAAAAAAAAAAAA    " 
console.log(newStringOne.trim()); // it will remove all extra spaces as we are not intended to get spaces in DB when getting input from User


//replace Method
// imp as exp when user gives space in url it auto write %20 so to eliminate that we use replace

const url  = 'https://mtmmmkk.com/sjsbbgb%20jfjfj';
console.log(url.replace('%20', '-'));

// Strings are most powerful any programming language when we know about alot of string methods it will help in backend and we can derive many values from string

console.log(url.includes('mtmmmkk'))// to check weather we have this keyword return true and false

// Number


const dataObj = new Number(100)
console.log(dataObj);

console.log(dataObj.String().length)

console.log(dataObj.toFixed(2)) // this method most impo used when we design ecommerce apps and want to display 
//user a precise value and give in constructor how many values upto decimal we want.

// toprecision () method is mostly asked in Interviews

const otherNum = 23.489  // given value in decimal
console.log(otherNum.toPrecision(3)); // here values comes 23.4 and priority is given to values before decimal

const otherNum2 = 123.489
console.log(otherNum.toPrecision(3)); // values cones 124 means we need precise value   

// priority is before decimal and priotity can even after decimal but depends apon values

//toLocale String

const hundreds = 1000000;
console.log(hundreds.toLocaleString( )); // with empty comes with US standards'en-IN'


//++++++++++++++++++++++++++++ Maths Library ++++++++++++++++++++++++
/* its a powerful library */

console.log( Math.abs(-5)); // simpy changes - values to positives but not positives to neg
console.log( Math.round(4.6)); // 5 rounds off if dec bigger than five then upper otherwise lower
console.log( Math.ceil(4.6)); //top value
console.log( Math.floor(4.6)); //lower value

//random()
// intrenstingly when making games we need range like for dice 1-6
console.log(Math.floor( Math.random() * 10) +1 ); // pseudo number btw 0 -1


//another Case defining a range imp
min = 10
max = 20

console.log(Math.floor(Math.random() * (max - min))  + min ) //
































