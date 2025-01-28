// Methods
// We can make our own method with the help of functions.
const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    }
};

// A method is simply a function that has been placed as a property on an object.
// To access it:
// myMath.cube(2);
// myMath["cube"](2);

// ShortHand Function Methods
const math = {
    blah: 'Hi!',
    add(x, y) {
        return x + y;
    },
    multiply(x, y) {
        return x * y;
    }
};
// This is a shortcut for writing function methods in objects.
// We don't even need the 'function' keyword for these methods. 

// This Keyword
// Use the keyword 'this' to access other properties on the same object.
const myCat = {
    name: 'Eve',
    color: 'Orange and White',
    breed: 'Persian',
    meow() {
        console.log("This is", this);
        console.log(`${this.name} says MEOWW!`);
    }
};

const meow2 = myCat.meow;
// The value of 'this' depends on how we call the function.

// There is a window object that comes if we don't exactly have something on the left side of calling the meow2 const.
// It's like a default value for the keyword 'this'.

// If we write 'this.someProperty', it refers to the object that this method is defined on.

// The value of 'this' depends on the invocation context of the function it is used in.
