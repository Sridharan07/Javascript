// Datatypes
// Javascript is Dynamic Typing
// Primitive and Object Type

//Primitive Data Types
//1.Number - Represents both integer and floating-point numbers.
let age = 28;
console.log(age);
console.log(typeof age);

let price = 29.99;
console.log(price);


//2.String - Represents a sequence of characters.
let userName = 'Sridharan Murugesan';
console.log(userName);
console.log(typeof userName);

//3.Boolean - Represents a logical entity and can have two values: true or false.
let isActive = true;
let isNotActive = false;

console.log(isActive);
console.log(isNotActive);

console.log(typeof isActive);

//4.Undefined - A variable that has been declared but not assigned a value.
let a;
console.log(a);
console.log(typeof a);

//5.Null - Represents the intentional absence of any object value.
 let box = null;
console.log(box); 
console.log(typeof box);

//6.Symbol - Represents a unique and immutable value, often used as object property keys.
let unique = Symbol('Key');
console.log(unique);
console.log(typeof unique);

//7.BigInt - Represents whole numbers larger than 2^53 - 1 (the largest number JavaScript can reliably represent with the Number type).
let largeNumber = 823834834839854n;
let bigNum = BigInt(88337273832832)
console.log(largeNumber);
console.log(bigNum);
console.log(typeof bigNum);

//Non-Primitive Data Types
//1.Object
/*Represents a collection of properties, each consisting of a key (usually a string) 
and a value (which can be any data type, including another object).*/
let person = {
    fullName : 'Sridharan Murugesan',
    age : 20,
    isEmployed : true,
};

console.log(person);
console.log(person.fullName);
console.log(typeof person);

//2.Array
//A special type of object used for storing ordered collections of values.
let arr = [1,2,3,4,5,6];
let arr1 = [1,'sridhar',2.98,"Amirta"];
console.log(arr);
console.log(arr1);
console.log(typeof arr)

//3.Function
//A special type of object that is callable and can perform an action.
function invite(){
    console.log("You are invited to my birthday party");
}
invite();
console.log(typeof invite)

//4.Date - A built-in object for handling dates and times.
let now = new Date;
console.log(now);
console.log(typeof now);
