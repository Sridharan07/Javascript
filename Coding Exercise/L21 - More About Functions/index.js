// Higher Order Function
/*
Function that take other function as arguments or return tem as result. 
*/

function startEngine(){
    return 'Engine is started!';
}

function drive(driverName, engine){
    const message = engine(); // Call back function
    console.log(`${message} by ${driverName}`);
}
drive('Alex', startEngine);


/*
Pure Function: Function that, given the same input,
will always return the same output and have no side effects.
*/

//Pure Function

function add(a,b){
    return a+b;
}
console.log(add(2,3));
console.log(add(2,3));
console.log(add(2,3));

//Impure Function

let counter = 0;
function increment (value){
    counter += value;
    return counter;
}
console.log(increment(2));
console.log(increment(2));
console.log(increment(2));