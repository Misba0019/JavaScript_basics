//-------------------------------------- Important Array Methods -----------------------------------------------

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Print each element in the array
function print(ele) {
    console.log(ele);
}

// Using forEach to call print() for each element
numArr.forEach(print);

// Another way to use forEach with an anonymous function to print even numbers
numArr.forEach(function (el) {
    if (el % 2 == 0) {
        console.log(el); // Prints even numbers
    }
});

// Movies array with objects
let movies = [
    { title: 'Amadeus', score: 99 },
    { title: 'Stand By Me', score: 85 },
    { title: 'Parasite', score: 95 },
    { title: 'Alien', score: 90 }
];

// Using forEach to print movie titles and scores
movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
});

//--------------------------------------------

// Map: Creates a new array by doubling each number
const double = numArr.map(function (num) {
    return num * 2;
});
// [2, 4, 6, 8, 10]

// Extract movie titles in uppercase
const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
});

//-----------------------------------------

// Arrow Functions

// Arrow function to add two numbers
const add = (x, y) => {
    return x + y;
};
// To call: add(2, 2);

// Arrow function to roll a die (1 to 6)
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
};

// One-line arrow function to square a number
const square = x => x * x;

//-------------------------------------------

// Implicit return: arrow function with one statement
const isEven = num => (
    num % 2 === 0
);

// One-liner implicit return: subtract two numbers
const sub = (x, y) => x - y;

//-------------------------------------------

// Filter: creates a new array with even numbers
const even = numArr.filter(n => n % 2 === 0);

//-------------------------------------------

// Check if all scores are above 50
const exams = [44, 68, 95, 88, 79];
function allPass(scores) {
    return scores.every(score => score >= 50);
}

//-------------------------------------------

// Check if any score is above 50
function pass(numb) {
    return numb.some(grades => grades >= 50);
}

//-------------------------------------------

// Reduce: calculate total price
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

const total = prices.reduce((total, price) => {
    return total + price;
});
// Sums up all prices

// Reduce: find the minimum price
const minPrice = prices.reduce((min, price) => {
    return price < min ? price : min;
});
// Finds the smallest price

//-------------------------------------------

// Reduce with initial value
const numEven = [2, 4, 6, 8];
numEven.reduce((sum, num) => sum + num, 100);
// Sum numbers with initial value 100

//-------------------------------------------

const guy = {
    firstName: 'Arson',
    lastName: 'Morten',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    undefineName: () => {
        return `${this.firstname} ${this.lastName}`;
    }
};

console.log(guy.fullName()); // "Arson Morten"

// Arrow function example shows 'this' keyword issue
// 'this' in arrow function refers to the enclosing scope, not the object itself