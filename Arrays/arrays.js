// Declaring Arrays

// Empty array
let empArr = [];

// Array of Strings
let days = ['Monday', 'Tuesday', 'Wednesday'];

// Array of Numbers
let num = [23, 19, 52, 28, 11];

// Mixed array
let mix = [true, undefined, 12, 9.9999, NaN, false, null, 'Hiiii'];
// Each element has a corresponding index (counting starts at 0)
// [true, 24, 'Alice', NaN, undefined];
//    0     1      2     3          4

// Accessing Elements

// Call a Specific Character from the array
const day = ['Monday', 'Tuesday', 'Wednesday'];
console.log(day[1][0]); // The answer will be: "T"
// We first put the index number of the element and then the index number of the element's each character.

// Updating Arrays

// Updated array
const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix'];
leaderboard[1] = 'Luna';
leaderboard[3] = 'Draco';
// To update an array we declare the array index and then = "the updated value"
// Now in strings we can change the letter once but the original one won't be affected.
// But in arrays once it’s updated, it will change permanently.
// Note: We can also change the type of the element.