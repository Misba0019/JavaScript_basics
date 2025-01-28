let count = 0;
while (count < 10) {
    count++;
    console.log(count);
}
// While loops continue running as long as the test condition is true, similar to for loops.
// count++ prevents an infinite loop.
// Infinite loops can occur more easily in while loops compared to for loops.

// Another While Loop example:
const Secret = "BabyHippo";

let guess = prompt("Enter the secret code");
while (guess !== Secret) {
    guess = prompt("Enter the secret code");
}
console.log("Congrats! You got the secret!");

// In this scenario, we created a secret code prompt.
// Defined a variable for the secret code.
// Created a variable `guess` for the prompt input.

// The break Keyword
// The break keyword is commonly used in while loops.
let input = prompt("Hey, say something!");

while (true) {
    if (input.toLowerCase() === "stop copying me") {
        break; // Stops the loop when the condition is met.
    }
    input = prompt(input);
}
console.log("Ok, you win!");

// The break statement terminates the loop or switch statement and transfers program control to the statement following the terminated statement.
// Here's how it works in this case:
// Prompt the user to say something and store it in `input`.
// Enter a while loop that runs indefinitely (true condition).
// If `input` is "stop copying me" (case insensitive), break the loop.
// Otherwise, prompt the user again with the current `input`.
// Add console.log after the loop to display a final message.

//Note: Move the if inside of the while loop to the top, so we first check if the input equals "stop copying me" and then break out of the loop before showing a new prompt, i.e. before executing the input = prompt(input);
