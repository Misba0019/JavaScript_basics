// FUNCTION DECLARATION
// Define a function called singSong
function singSong() {
    // Loop 3 times
    for (let i = 1; i <= 3; i++) {
        console.log("Do"); // Print "Do"
        console.log("Re"); // Print "Re"
        console.log("Mi"); // Print "Mi"
    }
}
// Call the singSong function to run the code inside it
singSong();

// FUNCTION WITH PARAMETERS
// Define a function called greet with two parameters: firstName and lastName
function greet(firstName, lastName) {
    // Print a greeting message using the parameters
    console.log(`Hey there, ${firstName} ${lastName}!`);
}
// Call the greet function with two arguments: 'Misba' and 'Ali'
greet('Misba', 'Ali');

// FUNCTION WITH LOOP AND RETURN
// Define a function called repeat with two parameters: str and numTimes
function repeat(str, numTimes) {
    let result = ''; // Initialize an empty string
    // Loop numTimes times
    for (let j = 0; j < numTimes; j++) {
        result += str; // Append str to result
    }
    console.log(result); // Print the final result
}
// Call the repeat function with 'hello' and 3
repeat('hello', 3);

// USING RETURN KEYWORD
// Define a function called add with two parameters: x and y
function add(x, y) {
    let sum = x + y; // Calculate the sum
    return sum; // Return the sum
}
// Call the add function and print the result
console.log(add(9, 4)); // 13

// CHECKING TYPES AND RETURNING
// Define a function called add with two parameters: first and second
function add(first, second) {
    // Check if both parameters are numbers
    if (typeof first !== 'number' || typeof second !== 'number') {
        return false; // Return false if either is not a number
    }
    return first + second; // Return the sum
}
// Call the add function and print the result
console.log(add(3, 6)); // 9

// FUNCTION TO GET LAST ELEMENT OF ARRAY
// Define a function called lastElement with one parameter: lastArr
function lastElement(lastArr) {
    // Check if the array is empty
    if (lastArr.length === 0) {
        return null; // Return null if empty
    }
    return lastArr[lastArr.length - 1]; // Return the last element
}
// Call the lastElement function and print the result
console.log(lastElement([1, 2, 3])); // 3

// FUNCTION TO RETURN (DAY OF WEEK)
// Define an array with days of the week
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Define a function called returnDay with one parameter: index
function returnDay(index) {
    // Check if the index is out of range
    if (index < 1 || index > 7) {
        return null; // Return null if out of range
    }
    // Return the day corresponding to the index (adjusting for 0-based index)
    return days[index - 1];
}
// Call the returnDay function and print the result
console.log(returnDay(3)); // Wednesday

// FUNCTION SCOPE
// Define a function called hello
function hello() {
    let message = "Hello, World!"; // Declare a local variable
    console.log(message); // Print the message
}
// Call the hello function
hello(); // Hello, World!

// This will cause an error because message is not defined in the global scope
// console.log(message); // Error: message is not defined

// BLOCK SCOPE
// Loop 5 times
for (let i = 0; i < 5; i++) {
    let msg = 'Be Kind'; // Declare a block-scoped variable
    console.log(msg); // Print the message
}
// This will cause an error because msg is not accessible outside the loop
// console.log(msg); // Error: msg is not defined

// LEXICAL SCOPE
// Define a function called bankRobbery
function bankRobbery() {
    const heroes = ["Spider-Man", "Wolverine", "Black Panther", "Black Widow"]; // Declare an array
    // Define a nested function called inner
    function inner() {
        // Define another nested function called cryForHelp
        function cryForHelp() {
            // Loop through the heroes array
            for (let hero of heroes) {
                // Print a help message for each hero
                console.log(`Please Help Us, ${hero.toUpperCase()}`);
            }
        }
        cryForHelp(); // Call the cryForHelp function
    }
    inner(); // Call the inner function
}
// Call the bankRobbery function
bankRobbery();

// FUNCTION EXPRESSIONS
// Define a function expression and store it in a variable called sqr
const sqr = function (num) {
    return num * num; // Return the square of the number
};
// Call the sqr function and print the result
console.log(sqr(4)); // 16

// HIGHER ORDER FUNCTIONS
// Define a function called callTwice that takes a function as an argument
function callTwice(func) {
    func(); // Call the passed-in function once
    func(); // Call the passed-in function again
}
// Define a function called rollDie
function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
    console.log(roll); // Print the random number
}
// Call the callTwice function with rollDie as the argument
callTwice(rollDie);

// RETURNING FUNCTIONS
// Define a function called mysteryFunc
function mysteryFunc() {
    const rand = Math.random(); // Generate a random number between 0 and 1
    // Check if the random number is greater than 0.5
    if (rand > 0.5) {
        return function () {
            console.log("Congrats, I am a good function!");
            console.log("You win a Million Dollars!!");
        };
    } else {
        return function () {
            alert("You have been infected by a virus!");
            alert("Stop trying to close the window!");
        };
    }
}
// Call the mysteryFunc function and store the returned function in a variable
const mystery = mysteryFunc();
// Call the returned function
mystery();

// FACTORY FUNCTION
// Define a function called betweenFunc
function betweenFunc(min, max) {
    // Return a new function
    return function (num) {
        // Check if the number is within the range
        return num >= min && num <= max;
    };
}
// Create new functions using the betweenFunc factory function
const isChild = betweenFunc(0, 18);
const isAdult = betweenFunc(19, 64);
const isSenior = betweenFunc(65, 120);

// Call the new functions and print the results
console.log(isSenior(90)); // true
console.log(isAdult(40)); // true
console.log(isChild(5)); // true
