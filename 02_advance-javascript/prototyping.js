function Person(fName , lName) {
    this.firstName = fName // passed in first name
    this.lastName = lName // passed in first name
} // we now create instances of this person function, using new keyword

const  person1 = new Person("Bruce", "wayne")
const  person2 = new Person("Clark", "Kint")

// so JS being a dynamic lang allows us to attach  properties to an object at any given time
//person1.getFullName = function () {// get full Name property is specific to just person one
    
Person.prototype.getFullName = function () {
return this.firstName + ' ' +  this.lastName // can also use temp literal for concatination
}
console.log(person1.getFullName());
console.log(person2.getFullName()); // otherwise we were getting error

// now  what should be done if we want to attach a proprety or a method that should be applied to every 
//instance ot this person Function, in our  example get full name is a function that benefits us by being 
//available on all instances of a personn function since it is generic not specific to just person 1, it would work on person
// 1, 2, 3 or even 100, this is where prototype comes into picture . 

// In JS every function has a property called prototype that points to an Object , we can make use of that prototype
// object to determine all or sharable properties , so instead of person 1. get full name we change it to person 
//function .prototype.getfullname

// we have defined get full name function once but it is available on every instance of the person function
//side Note: function that is used with a new Keyword is called a constructor function.

