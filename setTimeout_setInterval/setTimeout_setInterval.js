// --setTimeout
// Executes code after a specified delay (in milliseconds), runs once
console.log("Hello.......") // Runs immediately

setTimeout(() => {
    console.log("....is anyone there?"); // Runs after 2 seconds
}, 2000);

console.log("GoodBye!") // Also runs immediately

// In this example, "....is anyone there?" is logged after 2 seconds.
// setTimeout requires a callback function and a delay in milliseconds.

// --setInterval
// Repeats code execution at specified intervals

// --clearInterval
// Stops the interval using the ID returned by setInterval

const id = setInterval(() => {
    console.log(Math.random()) // Logs random number every 2 seconds
}, 2000)

// Use clearInterval(id) to stop the setInterval function
// clearInterval(id); // This stops the interval