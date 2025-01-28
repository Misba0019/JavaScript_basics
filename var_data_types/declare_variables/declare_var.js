// Using var
var name = "Misba Ali";
console.log(name); //'Misba Ali'

// Using let
let age = 21;
console.log(age); //21

// Using const
const pi = 3.14;
console.log(pi); //3.14

// 'var' is the old way to declare variables; it is function-scoped and can be re-assigned.
// 'let' is block-scoped and can be re-assigned.
// 'const' is also block-scoped, but it cannot be re-assigned as it represents a constant value.

const gravity = 9.81;
gravity = 9.8; // This will cause an error as it's 'const'
