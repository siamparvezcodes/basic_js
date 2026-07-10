// JS scope
// 1. Block Scope

{
    let a = 10;
    console.log(a);
}
// a can be used here

console.log(x)
{
    var x = 10;
    console.log(x)
}
console.log(x)
 // x can be used here because var is function scoped


//  2.Local Scope

 // userName can not be used here because it is local scope
function myFunction(){
    let userName = "Siam";
    console.log(userName);
}
myFunction();
 
// userName can not be used here because it is local scope



// 3. Function Scope
function A(){
    var x = 10;
    console.log(x);
}
A();
function B(){
    var x = 20;
    console.log(x);
}
B();


// 4. Global Scope
let y = 10; //Global Scope
const z = 20; //Global Scope
var w = 30; //Global Scope
function C(){
    carNmae = "BMW" //Global Scope
}


var carNmae = "Toyota"
console.log(window.carNmae)
console.dir(window)