//--------------------------------------------- Async Functions ------------------------------------------------
// A newer and cleaner syntax for working with async code!
// Like, putting a new coat of the paint on it.

// It has 2 keywords that work together:
// Async
// Await

//--------------------------------------- The Async Keyword: ---------------------------------------------------

async function hello() {
    // This will return a Promise on its own.
}

const sing = async () => {
    return 'La La La Mm Mm'
    // This will also give us a Promise.
}

// => Async functions always return a promise.
// If the function returns a value, the promise will be resolved with the value.
// If the function throws an exception, the promise will be rejected with the thrown value or error.

sing().then((rythm) => {
    console.log("Promise Resolved With:", rythm)
})
// rythm is the data inside the sing

//---------------------------------------------- throw Error ---------------------------------------------------

const throwError = async () => {
    throw new Error("AHHH!! Problem!");
    return 'I can’t be seen'
    // The Promise here is going to be rejected.
}

throwError()
    .then((data) => {
        console.log("Promise Fulfilled With:", data)
        // data is 'I can’t be seen'
    })
    .catch((err) => {
        console.log("Oh No! Promise Rejected!", err)
        // err is 'AHHH!! Problem!'
    })

//                         --         async Function working with throw Error        --

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeetarecute') return 'Welcome!'
    throw 'Invalid Password'
}

login('ajrfirfr')
    .then((msg) => {
        console.log("Logged In!")
        console.log(msg)
    })
    .catch((error) => {
        console.log("Error!")
        console.log(error)
    })

//---------------------------------------------- The Await Keyword ---------------------------------------------

const colorChange = (color, delay) => {
    return new Promise((fulfill, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            fulfill();
        }, delay)
    })
}

// colorChange('red', 1000)
//     .then(() => colorChange('orange', 1000))
//     .then(() => colorChange('yellow', 1000))
//     .then(() => colorChange('green', 1000))
//     .then(() => colorChange('blue', 1000))
//     .then(() => colorChange('indigo', 1000))
//     .then(() => colorChange('voilet', 1000))

async function rainbow() {
    await colorChange('red', 1000)
    console.log('HI!!')
    await colorChange('orange', 1000)
    await colorChange('yellow', 1000)
    await colorChange('green', 1000)
    await colorChange('blue', 1000)
    // This won't turn blue until the green func is resolved.
    // await colorChange('indigo', 1000)
    await colorChange('voilet', 1000)
    return "All Done!"
    // This (rainbow) takes seven seconds and then it's resolved with the help of return "All Done!"
}

//--------------------------------------------------------- 

// With await Keyword: the console.log('HI!!') will be run AFTER the 1st promise is fulfilled (The red color is there for a second that is).

//---------------------------------------------------------

// The return 'All Done!' at the end of the rainbow function is the function's final resolved value. By itself, it doesn't display anywhere because you're not handling it. Using .then() on rainbow() will let you catch that final message.
// Basically, it’s the last piece of info the function provides once all the color changes are done.


async function printRainbow() {
    await rainbow()
    // This will take 7 seconds, until its resolved.
    console.log("End of the Rainbow!:)");
    // Then we move onto print "End of the Rainbow!:)"
}

// Await Keyword: works inside of async func, it will wait / pause execution until a promise is resolved or rejected.

const fakeRequest = (url) => {
    return new Promise((fulfill, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 3500) {
                reject('Connection TimeOut!')
            } else {
                fulfill(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function MakeTwoReq() {
    try {
        let data1 = await fakeRequest('/page1');
        let data2 = await fakeRequest('/page2');
        // We can await the value and save it to a variable too.
        console.log(data1);
        console.log(data2);
    } catch (e) {
        console.log('Caught an Error!');
        console.log('The Error is', e)
    }
}

// try block: Wraps code that might throw an error.
// catch block: Executes if an error occurs in the try block.
// (e) will hold the error, whether it's a ReferenceError, TypeError, or any other error type that gets thrown in the try block.
