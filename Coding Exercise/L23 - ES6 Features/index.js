/*
Arrow Functions
Variable Declarations
Template Literals
Object Destructuring
Default Parameters
Spread Operator
*/

//Arrow Functions
//ES5
function add(a,b){
    return a+b;
}
add(4,5)

//ES6
const sub =(a,b) => a - b;

//Variable Declarations
//ES5
var num1 = 10;

//ES6
let num2= 20;
const pi = 3.14;

//Template Literals
//ES5
var name1 = 'Alice';
console.log('Hello' + name);

//ES6
console.log(`Hello, ${name1}!`);

//Object Destructuring
//ES5
var userOne = { firstName: 'Sridharan', lastName: 'Murugesan'};
console.log(userOne.firstName);

//ES6
var userTwo = { firstName: 'Amirta', lastName: 'Varshini'};
const {firstName, lastName} = userTwo;
console.log(firstName)

//Default Parameters
//ES5
function greet(name){
    name = name || 'Guest';
    console.log('Hello', + name, '!');
}
greet('Karthi');

//ES6
function greetUser(name = 'Guest'){
    console.log(`Hello, ${name}`);
}
greetUser('Alex');

//Spread Operator
//ES5
let x = [1,2,3];
let y = [4,5,6];
let z = x.concat(y);
console.log(z);

//ES6
let combined = [...x,...y];
console.log(combined);