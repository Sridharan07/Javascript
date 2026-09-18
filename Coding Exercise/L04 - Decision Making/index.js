// Decision Making: if, if...else, else if
console.log('Decision Making');

// Example 1: if statement
let temperature = 35;
if (temperature>25){
    console.log('It is hot outside');
}

// Example 2: if...else statement
if (temperature >= 45){
    console.log('It is hot outside');
}
else{
    console.log('It is cold outside');
}

let isRaining = false;
if(isRaining){
    console.log('Take an Umbrella');
}
else{
    console.log('You dont need an umbrella');
}
// Example 3: else if statement
let isTime = 20;
if(isTime < 12){
    console.log('Gooding Morning');
}
else if(isTime < 18){
    console.log('Good Evening')
}
else{
    console.log('Good Night');
}
// Example 4: Nested if statements
// Variables
let age = 30;
let isWithParent = true;
let hadProof = false;

// Decision logic

if(age >= 18){
    if(hadProof){
        console.log('You can visit the mall and watch movie');
    }
    else{
        console.log('You cant watch the movie in the mall');
    }
}
else{
    if(isWithParent){
        console.log('You can visit the play area');
    }
    else{
        console.log('You cant visit in the playarea');
    }
} 
// Switch Statement

let day = 3;
switch(day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid Day')
}

//Ternary Operator

let isAdmin = false;
let userRole = isAdmin ? 'Am Admim' : 'Am User';
console.log(userRole);

let result = 30 >= 100 ? 'Pass' : 'Fail';
console.log(result);