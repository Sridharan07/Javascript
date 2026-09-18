//Type Conversion (Manually)
/*Type conversion (also known as type casting) is when you explicitly convert a
value from one type to another. JavaScript provides several functions for this purpose.*/

// Type Conversion
console.log('Type Conversion');

// String to Number

let strNum = '123';
let num = Number(strNum);
console.log(strNum);
console.log(typeof(strNum));
console.log(num);
console.log(typeof(num));

// Number to String
let numStr = 123;
let str = String(numStr);
console.log(typeof(numStr), numStr);
console.log(typeof(str), str);

// Boolean to String

let bool = true;
let str1 = String(bool);
console.log(typeof(bool), bool);
console.log(typeof(str1), str1);

// String to Boolean
let strBool = 'False';
let bool1 = Boolean(strBool);
console.log(typeof(strBool), strBool);
console.log(typeof(bool1), bool1);

// Parsing integers and floats

let floats = '123.23';
let intNum = parseInt(floats);
console.log(typeof(floats), floats);
console.log(typeof(intNum), intNum);



//Type Coercion
/*Type coercion is when JavaScript automatically converts a
value from one type to another during an operation.
This often happens with equality checks and arithmetic operations. */

// Type Coercion (Automatically)
console.log('Type Coercion');

// String and Number
let results = '5' + 2;
console.log(results);

let results1 = '5' * 2;
console.log(results1);

let results2 = '5' - 2;
console.log(results2);

// Boolean and Number

let results3 = true + 1;
console.log(results3);

let results4 = false + 1;
console.log(results4);

let results5 = true + true;
console.log(results5);

// Coercion occurs in equality checks (==), but not in strict equality checks (===).
// Equality checks

console.log(1 == '1');
console.log(1 === '1');

console.log(0 == false);
console.log(0 === true);
console.log(false === false);