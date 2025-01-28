document.body.style.backgroundColor = "rgb(222,222,222)";
// Changing background color (not crucial to remember)

const req = new XMLHttpRequest(); // Create a new XMLHttpRequest object

req.onload = function () {
    console.log("It loaded!"); // Log message on successful load
    const data = JSON.parse(this.responseText); // Parse response text to JSON
    console.log(data.name, data.height); // Log name and height from response data
}

req.onerror = function () {
    console.log("Error"); // Log error message on request failure
    console.log(this); // Log error object
}

req.open("GET", "https://swapi.dev/api/people/1/"); // Initialize a GET request
req.send(""); // Send the request
