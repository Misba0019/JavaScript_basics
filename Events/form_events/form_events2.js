const notesForm = document.querySelector('#notesForm');
const ul = document.querySelector('#notes');

notesForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Use the elements property to select the inputs by name
    const userInput = notesForm.elements.username;
    const noteInput = notesForm.elements.notes;

    addNote(userInput.value, noteInput.value);
    userInput.value = "";
    noteInput.value = ""; // Clear inputs after submission
});

const addNote = (user, note) => {
    const listItem = document.createElement('li');
    const bold = document.createElement('b');
    bold.append(user);
    listItem.append(bold);
    listItem.append(` - ${note}`); // Append user and note to <li>
    ul.append(listItem);
};

// If we inspect notesForm in the console, we'll see the elements property,
// which is a collection of all form elements, accessible by name.


// What Happened Here:
// 1. Submit event triggers when form is submitted (by button or Enter key)
// 2. e.preventDefault keeps the form from reloading the page
// 3. Current input values are grabbed
// 4. New <li> is created and appended to the <ul>
// 5. Input fields are reset to empty after submission

// Using the form.elements property:
// Instead of selecting each input manually with document.querySelector, we access them through the form's elements property.
// elements is an ordered collection. Naming inputs makes it easy to access them by name (e.g., username, notes).
// This approach simplifies accessing form inputs.
