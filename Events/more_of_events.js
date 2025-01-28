const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', function (e) {
    container.style.backgroundColor = randomColor();
    e.stopPropagation(); // Prevent the event from bubbling up
}); // Stop propagation on button click

container.addEventListener('click', function () {
    container.classList.toggle('hide');
}); // Toggle the 'hide' class on container click

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}; // Generate a random RGB color

//--------------Event Delegation----------------

// const lis = document.querySelectorAll('li');
// for(let li of lis)
// li.addEventListener('click', function (){
//     li.remove(); })
// Adding event listeners to each <li> element (commented out)

const form = document.querySelector('#form');
const formButton = document.querySelector('#subForm');
const ul = document.querySelector('#inputList');
const input1 = document.querySelector('#username');
const input2 = document.querySelector('#input');

// Event listener for form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
    const li = document.createElement('li');
    const bold = document.createElement('b');
    bold.append(input1.value); // Append username input to bold tag
    li.append(bold); // Append bold tag to new <li>
    li.append(` ${input2.value}`); // Append input2 value to the same <li>
    ul.append(li); // Append <li> to <ul>
    input1.value = '';
    input2.value = ''; // Clear inputs after submission
});

ul.addEventListener('click', function (e) {
    if (e.target.nodeName === 'LI') e.target.remove();
    // Remove <li> if it is clicked
});
// Ensure only <li> elements are removable, not other elements like <p>

// ul.addEventListener('click', function(e){
//    e.target.remove();
//    console.log(e); //Look for target in this object event
//}) // This would remove everything under <ul>, not just <li> elements (commented out)
