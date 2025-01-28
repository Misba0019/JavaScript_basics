const randomColor = () =>{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');
for(let button of buttons){
    button.addEventListener('click',  colorize
    //function(){
//  button.style.backgroundColor = randomColor();
//  button.style.color = randomColor(); }
)}

const h2s = document.querySelectorAll('h2');
for(let h2 of h2s){
    h2.addEventListener('mouseenter', colorize
    //function(){
//  h2.style.backgroundColor = randomColor();
//  h2.style.color = randomColor(); }
)}

function colorize(){
  this.style.backgroundColor = randomColor();
  this.style.color = randomColor();
}

document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt);
})
//Here, we made two seperate events for 2 different elements.
//Inside those events, we made 2 seperate functions at first but that was a length process,
//So, instead we used, a function.
//Once we made the function with 'this' keyword, like we mentioned 'this.' and then the '.style' and then the '.backgroundColor' or '.color' to update its value to the randomColor() function.
//Then we mentioned the colorize function that had 'this' keyword at the place of the 2nd argument of every element in the Event Listener. 

//Because we used the keyword 'this' it will work for both of the Event Listeners, as an Event Callback.

//----------------------------------------------------------------------------------------------

document.querySelector('h3').addEventListener('click', function (evt){
    console.log(evt);
})
//Often passed in as: e, event or evt.
//It represents an event that occurs in the system, such as a user action or a browser event.
//It contains information about the event, like the type of event, the element that triggered it, and other relevant details.

//IMPORTANT:- We often have to rely on event Object, as frequently we wanna know what key was pressed, and that info is included in the keyboard event.

//KeyDown / KeyUp  &  e.code / e.key :-
const input = document.querySelector('input');
input.addEventListener('keydown', function (){
    console.log("KeyDown");
})

input.addEventListener('keyup', function (e){
    console.log(e.key);
    console.log(e.code);
})
// --KeyDown & KeyUp Event:-
//So, keydown event is for when we press down the key.
//The keyup event is for when we release the key, after pressing it down.

//Get the key we pressed through " e " Object. e.key / e.code
//With this we'll get the key that we pressed down and also the code of the key.

//Often when we're making a game or something global, we'll wanna know keydown or up was pressed, not in an input, but on the page.
//So we use:-
//window.addEventListener('keydown', function(e){
//     console.log(e.code);
// })

window.addEventListener('keydown',function (e){
    switch(e.code){
        case 'ArrowUp':
            console.log("Up!");
            break;
        case 'ArrowDown':
            console.log("Down!");
            break;
        case 'ArrowLeft':
            console.log("Left!");
            break;
        case 'ArrowRight':
            console.log("Right!");
            break;
        default:
            console.log("Ignored!");
    }
})

//window.addEventListener: This method is used to attach an event listener to the window object.

// --Switch-Case Statement
//switch statement: Checks a value and runs matching case code.
//case: Defines a block of code to run if it matches the switch value.
//break: Exits the switch statement to prevent “fall-through” to the next case.
//Default: Runs if no case matches the expression.