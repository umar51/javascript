//throwing exceptions

// throw 'myException';
// throw true;

function criticalCode(){
    throw " throwing an exception";
}

function logError(theException){
    console.log(theException);
}

//using try..catch

try {
    criticalCode(); //try this code and if error occurs send that to catch
} catch(ex){ //catch recieves the error and performs functions on it
    console.log("Got an error");
    logError(ex);
}


//using try.. cathc ..finally

try {
    criticalCode(); //try this code and if error occurs send that to catch
} catch(ex){ //catch recieves the error and performs functions on it
    console.log("Got an error");
    logError(ex); 
}finally{ //finally always runs whether exception thrown or not
    console.log("This code always runs");
}