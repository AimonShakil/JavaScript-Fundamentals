// Two parts for Promises --> to Create Promise and to consume promise
//first how to make a promise

// Do an Async Task
    //DB Calls, network call

//1st: One Way
const promiseOne = new Promise (function (resolve, reject) {
    setTimeout(function () {
        console.log('Async Task is Completed'); resolve ()
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
})

// 2nd: another Way, we did in one part

new Promise (function (resolve, reject) {
    setTimeout(function () {
        console.log('Async Task to');
        resolve ()
    } , 1000)
}.then (function () {
    console.log("asyc to resolve");
}))

//const Promise 3 // how to pass a data recived from a network, how data is being consumed and values comes

const promiseThree = new Promise (function (resolve, reject) {
setTimeout(function (){
resolve({username: "chai",email: "amcucm@exmple.com"})
}, 1000)

})

promiseThree.then(function(user) {
    console.log(user)
})

// promsie 4: exp a network request sent, if file is accessed and in case of Error

const promiseFour = new Promise (function ( resolve, reject) {
    setTimeout(function () {
        let error= true //with true error and with false no error: on error based checking we can see that if it is being resolve or rejected , liked what to say of if file is accessed and if not what to say
        if (!error) {
            resolve ({username : "amcucum", pass: "123"})
        } else {
            reject(' ERROR: Something went Wrong')
        }
    }, 1000)
})

promiseFour
.then ((user) => { 
    console.log(user);
    return user.username
})
.then ((username) => {
    console.log(username); // Chaining and Could be any name 
})
.catch(function(error) {
    console.log(error);
}).finally(() => console.log("the promise is either resolve or rejecyed"))

//Promise Five
// promise is something that will happen in future, this is not a gurantee that we will handle promise from .then.catch
// specially in DB some ppl prefer async and await
const promiseFive = new Promise ( function (resolve, reject) {
    setTimeout(function () {
        let error= true //with true error and with false no error: on error based checking we can see that if it is being resolve or rejected , liked what to say of if file is accessed and if not what to say
        if (!error) {
            resolve ({username : "javascript", pass: "123"})
        } else {
            reject(' ERROR: JS went Wrong')
        }
    }, 1000)

})

async function consumePromiseFive (){
    try {
        const response = await promiseFive // promise is an Object and we dont consume it this way, this is eventualcompletion object but this is an Obejct
        console.log(response);// async await cant directly handle errors  
    } catch (error) {
        console.log("error!");
    }
   
}
consumePromiseFive()

// Material for Next Class

async function getAllUser () {
    try {
    const response =await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json
    console.log(data);
    } catch (error) {
        console.log("E:" , error);
    }

}
getAllUser();

// Doing same with .then
fetch("https://jsonplaceholder.typicode.com/users ") 
.then ((response) => {
    return response.json()
}) 
.then ((data) => {
    console.log(data);
})
.catch((error) =>console.log(error))