// //Async and awaits for handling promise return values
// //its more natural and easy to handle than the .then syntax

// const { func } = require("prop-types");

// //making a function with promise in it

function promiseTimeout (ms) {
    return new Promise((resolve, reject) => {
        console.log("wait for " + ms + "miliseconds"); //this step executes in between console.logs of async run and run1
        setTimeout(resolve, ms); //but this step appears in between console.log if await is used with that calling code
    });
}

// //async function syntax for handling promises

// async function run () { //async indcates this function will use await
//     console.log("Start");    
//     promiseTimeout(2000); // with out await keyword output
//     console.log("Stop");
// }

// run (); //without await keyword the start and stop console will execute first then promise is called to delay time.

// async function run1 () { //async indcates this function will use await
//     console.log("Start");
//     await promiseTimeout(2000); // with await keyword output
//     console.log("Stop");
// }

// run1();

//calling another async function within a async function//for multitasking
async function operation() {
    return 42;
}

async function run2() {
    console.log("Start");

    await promiseTimeout(3000);

    const ops = await operation(); //calling another function in async function, if await is not used it will give Promise object instead of the returned value
    console.log(ops);

    console.log("Stop");
}

run2();