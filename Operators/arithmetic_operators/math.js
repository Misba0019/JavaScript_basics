// Arithmetic Functions
// Addition function: Adds two numbers
const add = (a, b) => a + b;

// Subtraction function: Subtracts the second number from the first
const sub = (x, y) => x - y;

// Multiplication function: Multiplies two numbers
const square = x => x * x;

// Division function: Divides the first number by the second
const div = (x, y) => x / y;

// Modulus function: Finds the remainder of the division of the first number by the second
const mod = (x, y) => x % y;

const PI = 3.14159;

// Exponentiation function: Raises the base to the power of the exponent
const pow = (base, exp) => Math.pow(base, exp);

// Square Root function: Finds the square root of the number
const sqrt = x => Math.sqrt(x);


// Exporting Individual Functions
module.exports.square = x => x * x; // This will export our square function
exports.sub = sub;

// Grouping in an Object
const math = {
    add: add,
    PI: PI,
    sub: sub,
    square: square,
    div: div,
    mod: mod,
    pow: pow,
    sqrt: sqrt
}

module.exports = math; // Exporting the math object

//------------------------------------------------

// module.exports.add = add; // Alternatively, export functions individually
// module.exports.PI = PI;
// module.exports.square = square;
// module.exports.div = div;
// module.exports.mod = mod;
// module.exports.pow = pow;
// module.exports.sqrt = sqrt;

// module.exports in Node.js allows you to export objects, functions, or variables from a module,
// making them accessible in other files using require(). This helps in modularizing your code, making it more organized and reusable.


