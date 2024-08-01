async function greet () {
    let promise = new Promise ((resolve,reject) => {
        setTimeout(() => resolve("Hi!"), 2000)
    })

    let result = await promise // wait until promise resolves 
    console.log(result);
}

greet()