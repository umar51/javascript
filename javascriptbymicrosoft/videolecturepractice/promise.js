function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms); //delayy code for 3s, passing resolve
    });
}

promiseTimeout(2000)
    .then(()=>{
        console.log("DOne"); //then recieves the resolve

    }).catch(()=>{
        console.log("Error");
    })

function promiseTimeout2(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(reject, ms); //passing reject
    });
}
    
promiseTimeout2(2000)
    .then(()=>{
        console.log("DOne"); 
    
    }).catch(()=>{    //catch recieves the reject/error
        console.log("Error");
    })


//Calling the function multipletime using more than one .then

function promiseTimeout3(ms){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms); 

    })

}

promiseTimeout3(4000)
    .then(() => {
        console.log("First process finished, activating second process");
        return promiseTimeout3(1000);
    }) .then(() => {
        console.log("Second task done, passing the custom value to next process from this then");
        return Promise.resolve(42);  //passed customized value directly to resolve of Promise
       }) .then( (result) => {
           console.log("Showing customized value sent from previous result ", result);
       }).catch(() => {
           console.log("Error");
       });
