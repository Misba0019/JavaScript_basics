// AND OPERATOR &&
const password = prompt("Enter your password");

if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("Valid Password!");
} else {
    console.log("Incorrect Password");
}
// Explanation: The AND (&&) operator checks if both conditions are true: 
// 1. Password length is at least 6 characters.
// 2. Password does not contain a space.


// Mind Game with AND Operator
const mystery = 'Paper7';

if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
    console.log("YOU GOT IT!!!");
} else {
    console.log("Aww snap!");
}
// Explanation: The AND (&&) operator checks if all three conditions are true:
// 1. First character is 'P'.
// 2. String length is greater than 5.
// 3. String contains the character '7'.


// OR OPERATOR ||
const age = 30;

if (age < 5 || age >= 65) {
    console.log("Free");
} else if (age < 10) {
    console.log("$10");
} else if (age < 65) {
    console.log("$20");
}
// Explanation: The OR (||) operator checks if either condition is true:
// 1. Age is less than 5.
// 2. Age is 65 or older.


// Combined AND and OR Operators
const grade = 3;

if (grade >= 0 && grade < 5 || grade >= 65) {
    console.log("Less work");
} else if (grade >= 5 && grade < 10) {
    console.log("Work alone");
} else if (grade >= 10 && grade < 65) {
    console.log("Make your own team");
} else {
    console.log("Invalid Grade");
}
// Explanation: This combines AND (&&) and OR (||) operators to check:
// 1. Grade is between 0 and 4 (inclusive) OR 65 or above.
// 2. Grade is between 5 and 9 (inclusive).
// 3. Grade is between 10 and 64 (inclusive).


// NOT Operator !
let firstName = prompt("Enter your first name");

if (!firstName) {
    firstName = prompt("Try Again!");
}
// Explanation: The NOT (!) operator checks if the condition is false. 
// If firstName is not provided, prompt the user to enter it again.


// Combined NOT, AND, and OR Operators
const ageGroup = 8;

if (!(ageGroup >= 0 && ageGroup < 5 || ageGroup >= 65)) {
    console.log("You are not a baby or a senior.");
}
// Explanation: This checks if the ageGroup is NOT between 0 and 4 (inclusive) OR 65 or above.


// SWITCH STATEMENT
const day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Invalid Number");
}
// Explanation: The switch statement evaluates the day variable and executes
// the corresponding case block. If no case matches, the default block runs.
