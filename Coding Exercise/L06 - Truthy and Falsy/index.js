// Truthy and Falsy Values
console.log('Truthy and Falsy Values');

// Falsy Values: 0 , ' ' , null , false, undefined, NaN
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// Truthy Values: Any value that is not falsy
console.log(Boolean(1));
console.log(Boolean(true));
console.log(Boolean('SriMu'));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(function(){}));

//Examples
let cash = 110;
if(cash){
    if(cash > 100){
        console.log('You can buy a Burger with a Drink');
    }
    else{
        console.log('You can buy ony a burger');
    }
}
else{
    console.log('You dont have a enough money to buy a burger');
}

let cash1 = '';
if(cash1){
    if(cash1 > 100){
        console.log('You can buy a Burger with a Drink');
    }
    else{
        console.log('You can buy ony a burger');
    }
}
else{
    console.log('You dont have a enough money to buy a burger');
}

let age = true;
console.log(age);

if(age){
    console.log('Age is Defined');
}
else{
    console.log('Age is not defined');
}