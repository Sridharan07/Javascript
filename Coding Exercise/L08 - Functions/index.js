// Functions
// Functions are pieces of code that we can reuse again and again in our code

// Function Declaration - JavaScript Hoisting
/* A function declaration defines a named function.It's hoisted,
 meaning you can call it before it's defined. */
 function displayMessage(){
    console.log('Weclome to SriMu JS class');
 }
 displayMessage();

// Calling the function

// Function Parameters and Arguments
/*Functions can take parameters, which act as placeholders for the values 
that will be passed to the function.The passing value is called an argument.*/

function greet(userName){
    console.log(` Good Morning, ${userName}!`);
}
greet('SriAmir')

function greet1(fName, lName){
    console.log(`My First Name is ${fName} and Last Name is ${lName}.`);
}
greet1('Sridhar', 'Amirta');

function add(x,y,z){
    console.log('Addition:', x+y+z);
}
add(10,20,30);

// Default Parameter

function printer(color = 'Black'){
    console.log(`Print the document in ${color} color.`);
}
printer();
// Function with Return Type

function sub(a,b){
    return a-b;
}
let diff = sub(10,5);
console.log('Difference:', diff);

///////////////////////////////////////////////////////////////////////

// Function Expression
/* A function expression defines a function inside an expression.
It's not hoisted, so you can't call it before it's defined.*/

const morning = function(){
    console.log('Good Morning to Everyone');
}
morning();

// With Argument

const morningMessage = function(userName){
    console.log(`Good Morning ${userName}`);
}
morningMessage('SriAmir');

// Function Expression with Return Type

const mult = function(x,y){
    return x * y;
}
console.log('Multiplication:', mult(10,10));

///////////////////////////////////////////////////////////////////////

// Arrow Function
// Arrow functions provide a concise syntax and do not bind their own 'this'. They are not hoisted.

const evening = () =>{
    console.log('Good Evening Guys!');
}
evening();

// With Argument
const evening1 = (userName1) =>{
    console.log(`Good Evening, ${userName1}!`);
}
evening1('Sridharan Murugesan');

// Arrow Function with Return Type
const mult1 = (c,d) => {
    return c * d;
}
console.log('Multiplication:', mult1(9,9));

// Shorter Way
const add1 = (e,f) => e + f;
console.log('Addtion:', add1(4,5));

//Function Calling Other Function

// function welcomeS(name) {
//     console.log(`Welcome ${name}, enjoy your shopping experience!`);
//   }
  
//   function main(name) {
//     welcomeS(name);
//   }
  
//   main('Sridharan');

//Anonymous Functions: Later on Course on Arrays
setTimeout (() => {
    console.log('Anonumous functions executed.')
}, 2000);
/**
Scope of variables will on functions and loops
var: Function scoped.
let: Block scoped.
const: Block scoped.
 */
