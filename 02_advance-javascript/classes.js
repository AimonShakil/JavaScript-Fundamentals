//In JS classes are syntactical sugar over prototypal inheritence.
// how to create a class, how to initilize properties, how to add methods, how to create an Instance of a class
// how to inherit using extends and Super Keywords

class Person {
    constructor (fName, lName) {
        this.firstName = fName
        this.lastName = lName
    }
    sayMyname() {
        return this.firstName + ' ' +  this.lastName 
    }
}

// now creating instances
const classP1 = new Person ("wyne" , "Bruce")
console.log(classP1.sayMyname()); // we can create instances and access properties and methods like before

// Two Keywords takecare of Entire Inheritence : Extends and Super
// we specify that class superhero extends class person 

class SuperHero extends Person {
    constructor (fName, lName) {
        super(fName,lName) // this will call perosn class constructor
        this.isSuperHero = true
    }
    fightCrime() {
        console.log("Fighting Crime");
    }
}

const batman = new SuperHero('Bruce', 'Wayne')
console.log(batman.sayMyname());