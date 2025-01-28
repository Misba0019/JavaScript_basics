console.log("hello")

// This is an EXAMPLE of how things go without the constructor functions:-
// function Color(r, g, b){
//     this.r = r;
//     this.g = g;
//     this.b = b; //returns undefined
//     console.log(this); //returns the Window Object
// } //This function will not be working as imagined.

// SECOND EXAMPLE:- (NOT GONNA WORK)
// function Color(r, g, b){
//     const obj = {}; // This will make an object and bind/refer it with "this" keyword 
//     this.r = r; 
//     this.g = g;
//     this.b = b; //"this" keyword is connected to obj.
//     return obj; //returns empty obj
// } //This function will not be working as imagined.

function Color(r, g, b) { //Constructor function
    this.r = r;
    this.g = g;
    this.b = b;
    this.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
}

// Call 'new' Keyword  
// new Color(255, 0, 210);
// This will show but We don't want rgb method to be an individual obj, instead we need it to be on the prototype of the Object.

//-------------------------------------------------------------------------------------------------------------

// Example showing issues without using constructor functions:

// Example 1 (Not Working):
// function Color(r, g, b){
//     this.r = r;
//     this.g = g;
//     this.b = b; 
//     console.log(this); // Logs the global Window object, not a Color object
// }
// Calling this function will not work as intended because `this` refers to the global object (Window).

// Example 2 (Not Working):
// function Color(r, g, b){
//     const obj = {}; // Creates a new object, but `this` is still bound to the global object
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     return obj; // Returns an empty object, not the intended Color object
// }
// This does not correctly create a Color object.


// Correct Example (Using the `new` keyword):

// function Color(r, g, b) { // Constructor function
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };
// }

// // Create a new Color object using the `new` keyword:
// const myColor = new Color(255, 0, 210); // This works as intended
// console.log(myColor.rgb()); // Outputs: "rgb(255, 0, 210)"

// However, we typically do not want the `rgb` method to be defined on each instance separately.
// Instead, we want it to be defined on the prototype of the Color constructor:

//-------------------------------------- Examples ENDS Here ----------------------------------------------------

// Correct Example (Using the `new` keyword):

function Color(r, g, b) { // Constructor function
    this.r = r;
    this.g = g;
    this.b = b;
}

// Define the method on the prototype, outside of this constructor function.
Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) { // Adding an alpha channel
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};

//-------------------------------------------- The `new` Keyword -----------------------------------------------

// Anytime we call the 'Color' function with the "new" keyword, it creates a new object.
// - Sets the constructor of that object to 'Color'.
// - Assigns the value of "this" to that new empty object (add properties).
// - Returns the new object.

const color1 = new Color(11, 11, 255);
// Creates a 'Color' object and saves it to the variable 'color1'.

//---------------------------------------------- Calling Methods -----------------------------------------------

// Now we can call 'color1.rgb()' to get the specific value.
// 'color1' does not have the 'rgb' method defined directly inside it,
// but it is defined on the prototype of the 'Color' constructor.

console.log(color1.rgb()); // rgb(11, 11, 255)
console.log(color1.hex()); // #0b0bff
console.log(color1.rgba()); // rgba(11, 11, 255, 1)

// Thus, we don't have a copy of the 'rgb' code in each actual object instance.
// But we can still access this method from the prototype object.


//---------------------------------------- CONSTRUCTOR FUNCTIONS -----------------------------------------------
//                                           The 'new' Keyword:-
// - Creates a blank, plain JavaScript object.
// - Links (sets the constructor of) this object to another object;
// - Passes the newly created object from Step 1 as the "this" context;
// - Returns the new object if the function doesn't return its own object.

// Once we have the constructor function, we can add methods to the prototype (not to the individual objects)

const textColor = document.querySelector("h2").style.color = color1.rgb(); // rgb(11, 11, 255)
const textColor2 = document.querySelectorAll("h2")[1].style.backgroundColor = color1.rgba(0.5); // rgba(11, 11, 255, 0.5)
