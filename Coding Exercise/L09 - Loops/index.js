// Loops
/* 
In programming, loops are used to execute a block of code repeatedly until
a specific condition is met or for a specified number of times.
They provide a way to perform repetitive tasks efficiently without writing
the same code multiple times.
*/

/* 
Types of Loops
1. For Loop
2. While Loop
3. Do While Loop
 */

// For Loop Example
for(let i=0; i<=5; i++){
    console.log(`Iteration ${i}`);
}
console.log('-----');
for(var j=0; j<5; j++){
    console.log(`Iteration ${j}`);
}
console.log('Number of Iteration:', j);
console.log('-----');

//Looping Backwards
for(let x=5; x>=0; x--){
    console.log(`Iteration ${x}`);
}
console.log('-----');
//Nested Loop
for(let a=1; a<=2; a++){
    console.log(`Outer Loop: ${a}`);
    for(let b=1; b<=3; b++){
        console.log(`Inner Loop: ${b}`);
    }
}

console.log('-----');
// While Loop Example
let balance = 10;
console.log(`Balance amount before while loog: ${balance}`);

while(balance>0){
    console.log(`Rs.1 is spent, your current balance is ${balance}`);
    balance--;
}
console.log(`After the while loop, you balance left is ${balance}`);
// Do While Loop Example

console.log('-----');
let num = 0;
do{
    console.log(`Number: ${num}`);
    num++;
}
while(num<5);



console.log('-----');

for (let f=0; f<5; f++){
    if(f===3){
        break; // Terminates the loop when F equals to 3
    }
    console.log(`Iteration: ${f}`);
}
console.log('-----');
for (let e=0; e<5; e++){
    if(e===3){
        continue; // Skips the current iteration when E equals to 3
    }
    console.log(`Iteration: ${e}`);
}

console.log('-----');

function greet(){
    for (let q=1; q<=3; q++){
        console.log('Good morning beta!');
    }
}
greet();