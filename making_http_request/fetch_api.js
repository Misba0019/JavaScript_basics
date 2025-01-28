// Fetch data from Star Wars API using promises
fetch("https://swapi.dev/api/people/1/")
    .then(res => {
        console.log("First Request Resolved!", res); // Log first response
        return res.json(); // Parse response to JSON
    })
    .then(data => {
        console.log("JSON data:", data); // Log JSON data
        return fetch("https://swapi.dev/api/people/2/"); // Make another fetch request.
    })
    .then(res => {
        console.log("Second Request Resolved!", res); // Log second response
        return res.json(); // Parse second response to JSON
    })
    .then(data => {
        console.log("Second data:", data); // Log second JSON data
    })
    .catch(e => {
        console.log("Error:", e); // Handle errors
    });

// Fetch data from Star Wars API using async/await
const fetchStarWarsPeople = async () => {
    try {
        const res1 = await fetch("https://swapi.dev/api/people/1/"); // Fetch first character
        const data1 = await res1.json(); // Parse response to JSON
        console.log("Async/Await - First data:", data1); // Log first JSON data

        const res2 = await fetch("https://swapi.dev/api/people/2/"); // Fetch second character
        const data2 = await res2.json(); // Parse response to JSON
        console.log("Async/Await - Second data:", data2); // Log second JSON data
    } catch (e) {
        console.log("Error!", e); // Handle errors
    }
};

fetchStarWarsPeople();

// Explanation:
// - res is the raw response from the fetch request, including headers and status.
// - res.json() converts the response to JSON format, producing a promise that resolves with the parsed JSON data.
// - data is the result of the .json() method, which is the actual content of the API response.
// - .catch handles any errors that occur during the fetch requests.

