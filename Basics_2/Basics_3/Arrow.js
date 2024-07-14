/* Arrow functions: 
Arrow function and This Keyword, study about this further ahead regarding prototypal Inheritance
in future, this keyword tells about Current Context 
To understand arrow function   understand this  and to understand This. Have to go back to  Object. */

// made a basic object to register a user on website

//to refer current Context have to use this keyworf

let user = {
    username: "cucumber",
    price: 999,

    welcomeMessae: function() {
        console.log(`${this.username}, welcome to website`); // here this means current Context means here we are using this to access variables within current scope
    }
}

user.welcomeMessae()
user.username = "sam" // we have chnaged the context here   
user.username()

//

function oneNew () {
    console.log(this);
}
oneNew(); // we will get many objects but when did outside ,and if we write this.write in function it won't work 

// Declaring Functions through Arrow Functions

const arrowFunc = () => {
    let user = "AmCucumb"
    console.log(this); // we get {} in return
}

() => { } //  basic arrow can also hold in a variable
const newArrow2 = (num1 , num2 ) => {
    return num1 + num2
}
newArrow2(2 ,5)


//Arrow Function is Also Used As an IMPLICIT RETURN

const arrowFour = (num1, num2) => num1 + num2
const arrowFour1 = (num1, num2) => (num1 + num2)

// returning an Object
const arrowFours = (num1, num2) => ({name : "amCucum"}) // we can return Objects like this


// V imp from react perspective when we use {} we have to write returnkeyword but incase of ( ) we cn omit return keywrd
