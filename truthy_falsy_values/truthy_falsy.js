const userInput = prompt("Enter Something");
if (userInput) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// If we use an empty string for the value of userInput,
// it will be evaluated as falsy.

// For example, if we did this:
if (0) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
// The answer will be falsy;
