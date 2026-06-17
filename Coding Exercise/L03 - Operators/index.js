//Operators
/*
1.Arithmetic Operators
2.Assignment Operators
3.Comparison Operators
4.Logical Operators
5.String Operators
*/

//1.Arithmetic Operators - Arithmetic operators are used to perform basic mathematical operations
//1.1)Addition (+)
console.error("Arithmetic Operators");

let sum = 3+5;
console.log('Additon:', sum);

//1.2)Subtraction (-)
let diff = 3-5;
let sub = 10-4;
console.log('Subtraction:', diff);
console.log('Subtraction:', sub);

//1.3)Multiplication (*)
let mul = 3*5;
console.log('Multiplication:', mul);

//1.4)Division (/)
let div = 3/5;
let div1 = 10/5;
console.log('Division:', div);
console.log('Division:', div1);

//1.5)Modulus (%)
let mod1 = 10%3;
let mod2 = 12%5;
console.log('Modulus:', mod1);
console.log('Modulus:', mod2);


//1.6)Exponentiation (**)
let expo = 2**3;
console.log('Exponentiation:', expo);

//1.7)Increment (++)
let counterplus = 10;
counterplus++;
console.log('Increment:', counterplus);

//1.8)Decrement (--)
let counterminus = 10;
counterplus++;
console.log('Decrement:',counterminus);

//2.Assignment Operators - Assignment operators are used to assign values to variables.
//2.1)Assignment (=)
console.error("Assignment Operator");
let z = 10;
console.log('Assignment = :', z);


//2.2)Addition Assignment (+=)
let plusequal = 10;
plusequal+=10
console.log('Addition Assignment (+=):', plusequal);

//2.3)Subtraction Assignment (-=):
let minusequal = 600;
minusequal-=30
console.log('Subtraction Assignment (-=):', minusequal);

//2.4)Multiplication Assignment (*=):
let mulequal = 6;
mulequal*=3
console.log('Multiplication Assignment (*=):', mulequal);

//2.5)Division Assignment (/=):
let divequal = 6;
divequal/=3;
console.log('Division Assignment (/=):', divequal);

//2.6)Modulus Assignment (%=):
let modequal = 7;
modequal%=3
console.log('Modulus Assignment (%=):', modequal);

//2.7)Exponentiation Assignment (**=)
let expoequal = 6;
expoequal**=3
console.log('Exponentiation Assignment (**=)', expoequal);

//3.Comparison Operators - Comparison operators are used to compare two values.

console.error('Comparison Operators')

//3.1)Equal (==)
console.log('Equal (==):', 900 == 900);
console.log('Equal (==):', 900 == '900');

//3.2)Strict Equal (===)
console.log('Strict Equal (900===900):', 900 === 900);
console.log('Strict Equal (900==="900"):', 900 === '900');

//3.4)Not Equal (!=)
console.log('Not Equal (!=):', 6!=5);
console.log('Not Equal (!=):', 6!='6');

//3.5)Strict Not Equal (!==)
console.log('Strict Not Equal (!==):', 6!==5);
console.log('Strict Not Equal (!==):', 6!=='6');

//3.6)Greater Than (>)
console.log('Greater Than (>):', 6>5);
console.log('Greater Than (>):', 6>'6');

//3.7)Less Than (<)
console.log('Less Than (<):', 6<5);
console.log('Less Than (<):', 6<'6');

//3.8)Greater Than or Equal (>=)
console.log('Greater Than or Equal (>=):', 6>=5);
console.log('Greater Than or Equal (>=):', 6>='9');

//3.9)Less Than or Equal (<=)
console.log('Less Than or Equal (<=):', 6<=5);
console.log('Less Than or Equal (<=):', 6<='9');

//4.Logical Operators - Logical operators are used to combine multiple conditions.
console.error("Logical Operators");

//4.1)Logical AND (&&)
console.log('Logical AND (&&) true && true:', true && true);
console.log('Logical AND (&&) true && false:', true && false);
console.log('Logical AND (&&) false && true:', false && true);
console.log('Logical AND (&&) false && false:', false && false);

//4.2)Logical OR (||)
console.log('Logical OR (||) true && true:', true || true);
console.log('Logical OR (||) true && false:', true || false);
console.log('Logical OR (||) false && true:', false || true);
console.log('Logical OR (||) false && false:', false || false);

//4.3)Logical NOT (!)
console.log('Logical NOT (!) !true:', !true);
console.log('Logical NOT (!) !false:', !false);


//Example
let haveIdProof = false;
let isAdult = true;

if(haveIdProof && isAdult){
    console.log('You are allowed to enter party')
}
else{
    console.log('You are not allowed to enter party')
}

// String Operators
console.error("String operators");

//String concatenation
let str = "Sridharan" + " " + "Murugesan";
console.log(str);
str += " How are you?";
console.log(str);

//String with Different Quotes:
console.log("I'm getting 'Better' day by day");
strMessage = "I'm" + " getting" + " 'Better'" + " day by day";
console.log(strMessage);
console.log("I\'m getting 'Better' day by day");

//Concatenation with Object Properties:
let useDetails = {
    id: 1,
    name: 'Sridharan Murugesan'
}
console.log('Welcome ' + useDetails.name + ' your Id is :' +useDetails.id);

//Template literal
console.log(`Welcome ${useDetails.name}, your Id is : ${useDetails.id}`);

//Order Prcedence
console.error("Order Precedence");

// New Examples with - and /
console.log(10-2/2);
console.log((10-2)/2);
