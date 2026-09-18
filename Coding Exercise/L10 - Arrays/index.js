/*
An array is a data structure that can hold multiple values at once. 
These values can be of any type, including numbers, strings, objects, or even other arrays.
Arrays in JavaScript are zero-indexed, meaning the first element is at index 0.
*/

// Using square brackets
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits);
console.log('----');
// Accessing Array Elements:
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log('----');
// Change Value in Array
fruits[1] = "Orange";
console.log(fruits[1]);
console.log(fruits);
console.log('----');
/*
Using for loop to print array with hard-coded condition 
it will create issue if condition is like i < 5
*/
for(let i=0; i<3; i++){
    console.log(fruits[i]);
}
console.log('----');

/* 
To avoid hard-coded condition switch to array methods
*/
// We can use array length

console.log(fruits.length);
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
console.log('----');

// More Array Methods
let box = ['Books', 'Toys', 'Pen'];
console.log(box);
console.log('----');
/* 
Add element to array
Adds one or more elements to the end of an array 
and returns the new length of the array.
*/
box.push('Paint');
console.log(box);
box[4]='Pencil';
console.log(box);
console.log('----');
/*
Remove element from array
Removes the last element from an array and returns that element.
*/
box.pop();
console.log(box);
console.log('----');
/*
Adds one or more elements to the beginning of an array and returns the new length of the array.
*/
box.unshift('Map');
console.log(box);
console.log('----');
/*
Removes the first element from an array and returns that element.
*/

box.shift();
console.log(box);
console.log('----');
// Anonymous Functions
box.forEach(function(x){
    console.log(x);
});

console.log('----');

box.forEach(function(x,index){
    console.log(x,index);
});

console.log('----');

box.forEach((x) => {
    console.log(x);
});

console.log('----');

box.forEach((x, index) => {
    console.log(x, index);
});

console.log('----');
// Combining Arrays

let container1 = ['Tv', 'Laptop'];
let container2 = ['PS5', 'Table'];

console.log(container1);
console.log(container2);

console.log('----');

let container = container2.concat(container1);
console.log(container);
console.log('----');

// Finding an Element Index, If not found it will return -1

let index = container.indexOf('Laptop')
console.log(index);
console.log('----');
let index1 = container.indexOf('Car');
console.log(index1);
console.log('----');

let searchValue = 'PS5';
let index3 = container.indexOf(searchValue);
console.log(index3);

console.log('----');

if (index3>=0){
    console.log(`Index of ${searchValue} is ${index3}`);
}
else{
    console.log('What you are searching for is not available');
}

console.log('----');

// Array with mixed data types

let mixedData = [10, 3.5, 'Homelander', 'Starlight', true, false, undefined, null];
console.log(mixedData);

console.log(mixedData.includes('Homelander'));
console.log(mixedData.includes('PS5'));
console.log('----');
// Array of Employee Objects

let employee = [
    {id: 1, name: 'Sri', age: 28},
    {id: 2, name: 'Amirta', age: 25},
    {id: 3, name: 'Thara', age: 4},
]
console.log(employee);
console.log('----');
employee.forEach((employee) => {
    console.log(employee);
})
console.log('----');

employee.forEach((employee) => {
    console.log(`Employee Id: ${employee.id}`);
    console.log(`Employee Name: ${employee.name}`);
    console.log(`Employee Age: ${employee.age}`);
    console.log('----');
})
//Fliters

const employeeFound = employee.find((item) => item.id === 2);
console.log(employeeFound);

let x1 = employee.filter((x1) => x1.age > 20);
console.log(x1); 

// Map

let y = employee.map((employees) => {
    console.log (`Name: ${employees.name}, DOB: ${new Date().getFullYear() - employees.age}`);
})
