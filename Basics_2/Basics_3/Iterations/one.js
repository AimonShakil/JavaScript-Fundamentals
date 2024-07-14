for (let i = 0; i <=10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j <=10; j++) { // talking same i inside same scope is problematic needs a j 
        //console.log(`inner loop value: ${j} and outer loop value ${i}`);
        console.log(i + '*' + j + ' = ' + i * j  ); // Prints tables upto 10
    
    
};

// break and Continue Key Words

// How to break a floe of a Control flow of 


for (let i = 1; i <=20; i++) {
    if (i == 5) {
        console.log(" Detected 5");
        break;

    }
    console.log(` value of i is ${i}`);  
};

for (let i = 1; i <=20; i++) {
    if (i == 5) {
        console.log(" Detected 5");
       continue; // skips one condition and continue other

    }
    console.log(` value of i is ${i}`);  
};

}
