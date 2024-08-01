//Data

let myDate = new Date() // here we have created a date Instance/ object
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());


// Interview Question 
console.log(typeof myDate); // is Object as we have created an object and have its Instance 


let createdDate = new Date (2023, 0, 23)
console.log(createdDate.toDateString()); // as months starts from 0 so it will be Mon Jan 23 2023

let myCreatedDate = new Date ("01-14-2023")
console.log(myCreatedDate.toLocaleString());



//For Designing Quizzes and Polls / Hotels rooms Booking we use TimeStamp as we need to compare Dates
let myTimeStamp  = new Date()
console.log(myTimeStamp); // time in ms from 1970
console.log(myTimeStamp.getTime); // have to times to Compare, Always do Comparison in MS

// interview Question converting in Seconds
console.log(math.floor(Date.now()/1000));

// Interesting and moreoften Used Way

newDate.toLocaleString('default', {
    weekday: "Long" }
)
