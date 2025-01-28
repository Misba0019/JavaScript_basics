// Try / Catch statement
// They catch errors and prevent the execution of our code from stopping.
// If we anticipate some code might have an error or not run, we wrap it in a try block.
try {
    hello.toUpperCase;
} catch {
    console.log("ERROR"); // Runs if any error is detected in the code above.
}

// The try block detects the error, the catch block contains the statement executed after catching the error.
// If we add another line of code here:
console.log("After");
// The console will show:
// ERROR
// After

// Without Try/Catch, the 'After' line would not run as the code stops after encountering an error.

// Another example:
function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log("Please pass a string next time!");
    }
}

// If msg is not a string, calling toUpperCase() on it will throw a TypeError
// because toUpperCase() is a method that only exists on strings.
