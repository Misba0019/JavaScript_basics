const form = document.querySelector("#shelForm"); //Calling and saving FORM
const input = document.querySelector('#catName'); //Calling and saving INPUT
const list = document.querySelector('#cats'); //Calling and saving UL

form.addEventListener("submit", function (e){
    e.preventDefault(); // Stops from changing page after submitting the form
    const catName = input.value; // Gets the current value from the input field
    const newLi = document.createElement('LI'); // Created an element LI
    newLi.innerText = catName; // UPDATED the innerText of newLi, to catName (input)
    list.append(newLi); // Adds newLi to the UL
    input.value = ""; //Clears the input field
})

//Change & Input Events
const changeInput = document.querySelector('#changeInput');
const inputE = document.querySelector('#inputE');
const secH1 = document.querySelector('#inputHead');

changeInput.addEventListener('change', function(e){
    console.log("Change Event!");
})

inputE.addEventListener('input', function (e){
    secH1.innerText = inputE.value;
})

//------------------Defintion:---------------------

//e.preventDefault:-
//This method stops the default action of an event from happening. For eg, it can prevent a link from opening a URL.

//input.value
//.value in my javascript, will tell us what the user put in the input. (extracting the data out of the input)
//This is one of the most important attribute in input.


//Input Event
//Fires immediately whenever the value of an < input >, <select>, or <textarea> element changes due to user interaction.
//This event is ideal for real-time updates.

//Change Event
//Fires when the value of an < input >, <select>, or <textarea> element is committed, typically when the element loses focus.
//This event is useful when you want to perform an action after the user has finished interacting with a form element.


// --What we did:
//Select Elements: We select and save the form, input field, and unordered list (UL) elements from the HTML document.

//Add event listener to the form: We add an event listener to the form that listens for the “submit” event.

//Get the input value:  When the form is submitted, we get the current value from the input field.

//Create a new list item:  We create a new list item (LI) element.

//Set the text of the new list item:  We set the text of the new list item to the value obtained from the input field.

//Append the new list item to the list:  We add the new list item to the unordered list(UL).

//Clear the input field:  We clear the input field to make it ready for the next input.

//----------Till Change & Input Event----------------
