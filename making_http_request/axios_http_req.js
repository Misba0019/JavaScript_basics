axios.get("https://swapi.dev/api/people/1/")
    .then(res => {
        console.log("Response:", res);
    })
    .catch(e => {
        console.log("Error!", e)
    })
// Axios GET request with promise handling

const starWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log("Person:", res.data);
    } catch (e) {
        console.log("Error", e);
    }
};

starWarsPerson(10);
starWarsPerson(5);
// Asynchronous function for Star Wars character data

const getDadJoke = async () => {
    const response = await axios.get('https://icanhazdadjoke.com/');
    console.log('Dad Joke HTML res:', response);
}
getDadJoke();
// Fetch a dad joke

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const newJoke = async () => {
    const jokeText = await getDadJoke2();
    // Wait for getDadJoke2 to resolve

    // Add joke to DOM
    const newLi = document.createElement("LI");
    newLi.append(jokeText);
    jokes.append(newLi);
}

const getDadJoke2 = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        // JSON format request header

        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        return "No Jokes Available!";
    }
}
getDadJoke2();
// Fetch a dad joke with header

button.addEventListener('click', newJoke);
// Add event listener to button

const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.q.value;
    const config = { params: { q: searchTerm, isfunny: 'colt' }, }
    // Query parameters setup

    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    // GET request with query parameters

    createImg(res.data);
    // Create images from search results
    form.elements.q.value = '';
    // Clear input field
})

const createImg = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}
// Append images to the page

// Summary:
// 1. Axios GET request for Star Wars character data
// 2. Fetch and log dad jokes
// 3. Event listener for button click to fetch and display jokes
// 4. Form submission event to fetch TV shows and create images

