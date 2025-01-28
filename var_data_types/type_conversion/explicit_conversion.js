// Explicit Conversion
// Explicit conversion is when we manually convert a value from one type to another.

console.log("Explicit Conversion Examples:");

// String to Number
const strNumber = "42";
const num = Number(strNumber); // Converts string to number explicitly
console.log(`Explicit conversion of "42" to number: ${num}`);

// Number to Boolean
const falseValue = 0;
const bool = Boolean(falseValue); // Converts number to boolean explicitly
console.log(`Explicit conversion of 0 to boolean: ${bool}`);

// String to Boolean
const nonEmptyString = "Hello";
const boolFromString = Boolean(nonEmptyString); // Converts string to boolean explicitly
console.log(`Explicit conversion of "Hello" to boolean: ${boolFromString}`);

// Boolean to Number
const boolValue = true;
const numFromBool = Number(boolValue); // Converts boolean to number explicitly
console.log(`Explicit conversion of true to number: ${numFromBool}`);
