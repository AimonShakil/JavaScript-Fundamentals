//PROTOTYPAL INHERITENCE 

/* once use of prototype is to share properties and methods across instances other use which is pretty 
significant as well is inheritence, in JS inheritence is supported with the concept of prototypes 
and is referred as prototypal inheritence  */

/* Exp: creating a superhero that inherit properties and method from a person
a superhero will have fName ,lName and a getfull name function apart from that 
super hero will also have a property called as issuperhero set to True and 
and a fight crime function that locks a message to a console */


function Person(fName , lName) {
    this.firstName = fName // passed in first name
    this.lastName = lName
}

Person.prototype.getFullName = function () {
    return this.firstName + ' ' +  this.lastName 
}

function SuperHero (fName, lName) {
    // this = {}

    Person.call(this, fName, lName)
    this.isSuperHero = True
}

SuperHero.prototype.fightCrime = function () {
    console.log('Fighting Crime');
}

SuperHero.prototype = Object.create (Person.prototype) 

const batman = new SuperHero('Bruce', 'Wayne') 
SuperHero.prototype.constructor = SuperHero
console.log(batman.getFullName());
/* batman only has access to issuperhero and fight crime, we want
batman to also have a first name and a last name and and the get full name function
instead of duplicating a code we have written for perosn lets inherit them ,lets first inherit first name and 
last name properties. Superhero function will now accept two parameters (fname, lname) these values though need
to be passedinto the person function but person function should be invoked with this keyword pointing to this 
object from superhero function and remebering from this we can call a function by specifying what this keyword points 
to using the call method, so person.call(this) we pass in this keyword whcih is created inside superhero function 
as its first aurgument, so this keyword now in person refers to this keyword in superhero fname and Lname get Assigned 
and first name and Lname properties are inhertited by superhero */

