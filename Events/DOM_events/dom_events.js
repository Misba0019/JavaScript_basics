const v2 = document.querySelector('#btn2');

v2.onclick = function () {
    console.log("You Clicked Me!");
    console.log("I hope it Worked!");
};

function scream() {
    console.log("AAHHH");
    console.log("Stop Touching Me!");
}
v2.onmouseenter = scream;
// Define the scream function for the mouseenter event

// .onmouseenter runs scripts and handles events, while :hover applies styles

//--------------------------------------------------

// Event Listeners (3rd way, most commonly used)
// addEventListener
const v3 = document.querySelector('#btn3');

v3.addEventListener('click', function () {
    alert("Clicked!");
});
// Use addEventListener with event type "click" and a callback function

// Why use addEventListener()
function twist() {
    console.log("TWIST");
}
function shout() {
    console.log("SHOUT");
}

const tryButton = document.querySelector('#btnTry');

// Using normal approach for multiple events won't work well
// tryButton.onclick = twist;
// tryButton.onclick = shout; // Only the last event will be used

// Using addEventListener for multiple events
tryButton.addEventListener('click', shout);
tryButton.addEventListener('click', twist, { once: true });
// Adds both event listeners; twist will run only once

// Options Objects specify event listener characteristics
// The once option makes the event listener run only once
// More options can be found on MDN
