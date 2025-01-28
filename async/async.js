const multiply = (x, y) => x * y; // Multiply two numbers.

const square = x => multiply(x, x); // Return the square of a number using multiply().

const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
);

console.log("Before");
multiply(2, 3); // returns 6

square(4); // returns 16

// Call Stack
isRightTriangle(3, 4, 5);
// square(a) = 3 * 3 = 9
// square(b) = 4 * 4 = 16
// square(c) = 5 * 5 = 25
// 9 + 16 === 25 -> true

console.log("After"); // Markers for execution order.

// How It Works (Loupe, Chrome DevTools)
// Using Loupe: Visualize the call stack.
// Chrome DevTools: Add a breakpoint in the Sources tab to check the Call Stack.

// Call stack reference
// isRightTriangle(3, 4, 5) waits for square(3)
// square(3) waits for multiply(3, 3)
// multiply(3, 3) returns 9
// Call stack removes multiply, then square(3) returns 9
// isRightTriangle continues with square(4) and square(5)
// 3 * 3 + 4 * 4 === 5 * 5 -> true

// JavaScript handles function calls in the call stack and removes them when a value is returned.

// Callback Hell Example
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//         }, 1000)
//     }, 1000)
// }, 1000)

const delayColorChange = (color, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};

// Using Promises for sequential color changes
delayColorChange('red', 1000)
    .then(() => delayColorChange('orange', 1000))
    .then(() => delayColorChange('yellow', 1000))
    .then(() => delayColorChange('green', 1000))
    .then(() => delayColorChange('blue', 1000))
    .then(() => delayColorChange('indigo', 1000));

// Promises simplify handling sequential actions without nested callbacks.

// Callback Function
const fakeRequestCallBack = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 3000) {
            failure('Connection Timeout :(');
        } else {
            success(`Here is the fake data from ${url}`);
        }
    }, delay);
};

// Using Callbacks
// fakeRequestCallBack('books.com',
//     function(response) {
//         console.log('Success 1:', response);
//         fakeRequestCallBack('books.com/page2',
//             function(response) {
//                 console.log('Success 2:', response);
//                 fakeRequestCallBack('books.com/page3',
//                     function(response) {
//                         console.log('Success 3:', response);
//                     },
//                     function(err) {
//                         console.log("Error 3rd request", err);
//                     }
//                 );
//             },
//             function(err) {
//                 console.log("Error 2nd request", err);
//             }
//         );
//     },
//     function(err) {
//         console.log('Error 1st request', err);
//     }
// );

// Callback functions: Functions you give to another function to call later.
// success and failure are placeholders for any function you want to run when the request succeeds or fails.

// Callback Hell: Nested callbacks making code hard to read and maintain.

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 3000) {
                reject('Connection Timeout');
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay);
    });
};

// Creating a new promise using 'new' keyword.
// new Promise((fulfill, reject) => { fulfill(); });
// Steps to create a promise:
// 1. Use 'new Promise' with a function having 'fulfill' and 'reject'.
// 2. Call 'fulfill' to resolve or 'reject' to reject the promise.
// 3. If neither is called, the promise remains pending.

//-------------------------------------- PROMISE CHAIN ---------------------------------------------------------

// A promise is an object representing the eventual completion or failure of an asynchronous operation.
// .then() handles resolved promises.
// .catch() handles rejected promises.

// Original Promise Chain Example
// fakeRequestPromise('Highlight.time.page1')
// .then(() => { // Fulfilled result
//     console.log("It Worked! (page1)");
//     fakeRequestPromise('Highlight.time.page2')
//     .then(() => {
//         console.log("It Worked! (page2)");
//         fakeRequestPromise('Highlight.time.page3')
//         .then(() => {
//             console.log("It Worked! (page3)")
//         })
//         .catch(() => { // Error in page3
//             console.log("Oh no! Error3!")
//         })
//     })
//     .catch(() => { // Error in page2
//         console.log("Oh No! Error2!");
//     })
// })
// .catch(() => { // Rejected result
//     console.log("Oh No! Error1!");
// })

// In a promise chain, if any promise is rejected, subsequent .then() blocks are skipped, and control goes to the nearest .catch().

// Simplified Promise Chain Example
fakeRequestPromise('Highlight.time.page1')
    .then((data) => {
        console.log("It Worked!! 1st Page")
        console.log(data)
        return fakeRequestPromise('Highlight.time.page2')
    })
    .then((data) => {
        console.log("It Worked!! 2nd Page")
        console.log(data)
        return fakeRequestPromise('Highlight.time.page3')
    })
    .then((data) => {
        console.log("It Worked!! 3rd Page")
        console.log(data)
    })
    .catch((err) => {
        console.log("Error! Request Rejected!")
        console.log(err);
    })

// Step-by-Step Guide:
// 1. First promise resolves -> First .then() runs.
// 2. First .then(): Starts fakeRequestPromise('page2') and returns its promise.
// 3. Returned promise from page2 is handled by the next .then().
// 4. Each .then() waits for the previous promise to complete.

// Chained .then() Calls: Simplified by returning promises directly.
// Return Promises: Added return fakeRequestPromise('...') in each .then() to pass control to the next .then().
// Single .catch(): Combined multiple .catch() blocks into one at the end to handle errors from any part of the chain.

// .then((data) => {...}): 'data' represents the resolved value of the promise it’s chained to.

//------------------------------------ Creating a New Promise --------------------------------------------------

// Creating a new promise.
new Promise((fulfill, reject) => {
    fulfill();
});

// Steps to create a promise:
// 1. Use 'new Promise' with a function having 'fulfill' and 'reject'.
// 2. Call 'fulfill' to resolve or 'reject' to reject the promise.
// 3. If neither is called, the promise remains pending.
