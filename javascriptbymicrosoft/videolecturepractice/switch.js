// normal if else
const status = 200;

if ( status === 200){
    console.log("'ok!");
} else if ( status ===400 || status === 500){
    console.log("Error!");
} else {
    console.log("Unknown Status");
}


// writing switch for same function as above

switch(status){
    case 200:
        console.log("ok!2");
        break;
    case 400: // same as or
    case 500:
        console.log("Error!2");
        break;
    default: //same as else
        console.log("Unknown Status2");
        break;
}