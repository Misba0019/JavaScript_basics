// DOM Manipulation

// Select an element by its ID
const header = document.getElementById('main-header');
// 'header' now refers to the element with ID 'main-header'

// Change the text content of the selected element
header.textContent = 'Hello, World!';
// The text inside 'main-header' changes to 'Hello, World!'

// Select elements by their class name
const items = document.getElementsByClassName('list-group-item');
// 'items' is a collection of all elements with class 'list-group-item'

// Change the background color of the first item
items[0].style.backgroundColor = 'yellow';
// The background of the first list item changes to yellow

// Use querySelector to select the first matching element
const firstItem = document.querySelector('.list-group-item');
// 'firstItem' refers to the first element with class 'list-group-item'

// Use querySelectorAll to select all matching elements
const allItems = document.querySelectorAll('.list-group-item');
// 'allItems' is a list of all elements with class 'list-group-item'

// Loop through the NodeList and change text color
allItems.forEach(item => {
    item.style.color = 'blue';
});
// All list items' text color changes to blue

//---------------------------------------------------------

// Create a new element
const newDiv = document.createElement('div');
// A new <div> element is created

// Add a class to the new element
newDiv.className = 'new-class';
// The <div> now has a class 'new-class'

// Add an ID to the new element
newDiv.id = 'new-id';
// The <div> now has an ID 'new-id'

// Add text to the new element
newDiv.textContent = 'This is a new div';
// The <div> now contains text

//---------------------------------------------------------

// Add the new element to the DOM
const container = document.querySelector('body');
// Select the body element (container) to add the new <div> to it

container.appendChild(newDiv);
// The new <div> is added to the end of the body

//---------------------------------------------------------

// Event Listener
const button = document.querySelector('button');
// Select a button element

button.addEventListener('click', function () {
    alert('Button was clicked!');
});
// Show an alert when the button is clicked

//---------------------------------------------------------

// Form Input
const inputField = document.querySelector('input[type="text"]');
// Select a text input field

inputField.value = 'Type here...';
// Set the default value of the input field

//---------------------------------------------------------

// Change Event
inputField.addEventListener('change', function () {
    console.log('Input changed:', inputField.value);
});
// Log the input field value when it changes

//---------------------------------------------------------

// Removing an Element
const firstListItem = document.querySelector('.list-group-item');
// Select the first list item

firstListItem.remove();
// Remove the first list item from the DOM

//---------------------------------------------------------

// Replace an Element
const newHeader = document.createElement('h1');
// Create a new <h1> element

newHeader.textContent = 'New Header';
// Add text to the new <h1> element

header.parentNode.replaceChild(newHeader, header);
// Replace the old header with the new header
