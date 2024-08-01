//  array specific loops
// ["", "" , ""]
//[{}, {}, {}]

// for of 

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
    
}

const greetings = "hello World!";
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
    
}

// Map

const map = new Map();
map.set('in', "India")
map.set('fr', "Francce")
map.set('St', "USA")

for (const [key, value] of map) {
    
    console.log(key, ':-' , value);
}

// ForOf  Loop On Objects dont work

let myObj = {
    'game1' : "hsf",
    'game2': "spiderman"
}

