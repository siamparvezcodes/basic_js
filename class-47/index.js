

try{
    adddlert("Welcome to JavaScript Errors")
}
catch(err){
    document.getElementById("demo").innerHTML = err.message;
}

let x = 12;
try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
}
catch (err) {
    // message.innerHTML = "Input is " + err;
    console.log("Input is " + err);
}
console.log("JavaScript Errors") 