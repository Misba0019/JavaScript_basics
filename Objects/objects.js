console.log("Objects");

// Declaring and initializing objects
const person = { firstName: 'Misba', lastName: 'Ali' };
const kitchenSink = {
    favNum: 222,
    isFunny: true,
    colors: ['red', 'black', 'pink'],
    nickName: 'Mishi'
};

// Using const with objects
// We can use strings, numbers, arrays, true or false in the objects as the values of keys.

// Accessing object properties
let person1 = { firstName: "Mick", lastName: "Jagger" };
console.log(person1["firstName"]); // Using bracket notation

// Note: Using curly braces with object declaration

// Objects with numeric keys
const years = { 1999: 'GOOD', 2020: 'BAD' };
console.log(years['1999']); // Using bracket notation for numeric keys

// Using variables to access object properties
let birthyear = 2020;
console.log(years[birthyear]); // Using variable with bracket notation

// Nesting arrays and objects
const comments = [
    {
        username: 'Tammy',
        text: 'Lololol',
        votes: 9
    },
    {
        username: 'Alan',
        text: 'Drip Ayy',
        votes: 123
    }
];

// Accessing nested arrays and objects
console.log(comments[1].text); // Accessing nested object property

