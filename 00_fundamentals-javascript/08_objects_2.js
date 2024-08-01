// here declaring from a Constructor / Singelton

//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc",
tinderUser.name = "amCuc",
tinderUser.isLoggedIn = false

console.log(tinderUser); // we get an Object with a key and values 

// Declaring Objects withIn and Objects

const regularUser = {
    email: "some@gmail.com",
    name: {
        firstname : "Am",
        lastName: " shak",
        Address: {
            Hnumber : "744A",
            stnumber : 34
        }
    }
}

console.log(regularUser.Address.Hnumber);


//Optional Chaining Concept with Object
console.log(regularUser.name?.lastName); // example name dont exists then whats the prob,we use this "? " syntax did 
//protetcion when getting response from API if this value exists then do otherwise have to put if and elase


// Combining or Mweging an Objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2}; like this we get obj within Obj

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3); //we get proper array here  {} --> target and merging Objects are source

// more than assign spread operator for merging is bein used

const Obj3 = {...obj1, ...obj2}
console.log(Obj3);


// When Getting Data From a Database, comes in the form of an Array of Objects 

let dbUserValues = [
    {
        name: "sdff",
        id: 1
    },

    {
        name: "sdff",
        id: 2
    },

    {
        name: "sdff",
        id: 3
    },

    {
        name: "sdff",
        id: 4
    }
]

dbUserValues[1].name
console.log(Object.keys(tinderUser)); // return and array of Keys V imp concept further DB

// many a times we ask Obj that does it conain that property 
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // return True

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//DESTRUCTURING OBJECTS

//Destructuring of Objects and Arrays happens as well
// as we being doing destructing objects quite a Often as we will get and Object have to destructure to get the values
// Also See react hoew Values comes and how we destructure them

const course = { 
    courseName: "JS",
    price: "999",
    couseInstructor : "teacher"
}

// we gonna use these values by taking object and . as usual but when we want to make code Cleaner
// and dont write course.courseInstructor again and again, so we use a syntactical sugar

const {courseName : cn} = course // can also reassign a name at this point to make it smaller
console.log(courseName); // so we get its value
console.log(cn); // we get the same value

// DESTRUCTURING ARRAYS --> is rare not covered.

// API Concept: acts as a middleman between Client and backend 
// Now values comes from backend in the form of JSON
// here in JSON the key and values are all in string format except number and boolean
// so from fetch method we call this url we get data and we need to convert it into json then we will
//convert that into object and can extract each values.
// {
//     "name" : "am", 
//     "Id": 123
//     "registered": true
// }

//Sometimes we also get API in Array Formatt mean data comes in the form of Array of Objects

[
    {},
    {},
]
