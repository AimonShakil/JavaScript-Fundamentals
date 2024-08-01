
//created instance of Promise using new keyword , constructor function
/* promise constructor function as an aurgument, we passed in arrow function, it automatically accepts two 
aurguments resolve and reject both of which are functions 
Resolve is a function which when calls changes the status of promise from pending to fullfilled
Reject is a function when calls chnages the status from pending to rejected 

we cannot directly mutate the status of a promise we can call resolve and reject function to fullfill or reject promise


Both these functions are called after an Async operation*/


// Promise Resolved Scnerio

const promise = new Promise ((resolve, reject) => { 
    setTimeout(() => {
        resolve ('Bringing Tacos')   //change state from pending to fullfilled  
    },5000)                                      
})

const onFulfillment = (result) => {          //food truck found
    //resolve was called
    console.log(result);
    console.log('Set up the table to eat tacos')}

    promise.then(onFulfillment)


// Promise Rejected Scnerio

const promise2 = new Promise ((resolve, rejected) => {
    setTimeout (() => {
        rejected ('Not Bringing Tacos , food truck not there') //change state from pending to rejected 
    }, 4000)
})

const onRejection = (error) => {
    //  reject was called 
    console.log(error);
    console.log('Start Cooking Pasta');
}
promise2.catch(onRejection)



