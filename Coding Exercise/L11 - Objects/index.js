let person = {
    name: 'Amirta',
    age: 25,
    isEmployed: true,
};

console.log(person);

// Adding a new property
person.city = 'CBE';
console.log(person);

// Modifying an existing property
person.age = 20;
console.log(person);

// Object with method

let car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2026,
    displayInfo: function(){
        return `${this.brand} ${this.model} ${this.year}`;
    }
};

console.log(car);
console.log(car.displayInfo());

// Destructuring assignment

let student = {
    name: 'Sridharan Amirta',
    age: 24,
    course: 'Human Computer Interaction',
};
console.log(student);
let{name,age,course} = student;
console.log(name,age,course);

//Nested Complex Objects

let restaurant = {
    name: 'Sangam Chettinad',
    location: 'Austin, Usa',
    owner:{
        name: 'Sriamir',
        age: 28,
        contact: {
            email: 'sriamir@cheti.com',
            phone: '123-456-7890',
        },
    },
    menu:[
        { dish: 'Masala Dosa', price: 50, spicy: true},
        { dish: 'Pongal', price: 30, spicy: false},
        { dish: 'Coffee', price: 15, spicy: false},
    ],
};

console.log(restaurant);

// Accessing properties of the nested objects
console.log(`Welcome to ${restaurant.name} and it's located in ${restaurant.location}`);
console.log(`Its owned by ${restaurant.owner.name} and owner age is ${restaurant.owner.age}`);
console.log(`Owner contact detail, Email Id:${restaurant.owner.contact.email} and Contact No: ${restaurant.owner.contact.phone}`);

restaurant.menu.forEach((item) => {
    console.log(`${item.dish}: Rs: ${item.price} (${item.spicy ? 'Spicy' : 'Not Spicy'})`);
});


// Destructure owner object
let {
    name: ownername,
    age: ownerage,
    contact: {
        email: owneremail,
        phone: ownerphone,
    },
} = restaurant.owner;

// Output details about the restaurant
console.log(`Owned by ${ownername} and owner age ${ownerage}`);
console.log(`Contact Email: ${owneremail} and Phone No: ${ownerphone}`);


// Output the menu items using destructuring within forEach
restaurant.menu.forEach(({dish, price, spicy}) => {
    console.log(`${dish} is Rs. ${price} (${spicy ? 'Spicy' : 'Not Spicy'})`)
});

console.log('No spicy Food');
restaurant.menu.forEach(({dish, price, spicy}) => {
    if(spicy === false){
    console.log(`${dish} is Rs. ${price}`)}
});
