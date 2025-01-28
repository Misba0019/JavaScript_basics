console.log("Hellooo");

function rgb(r, g, b) {
    return `rgb(${r},${b},${g})`;
}

function hex(r, g, b) {
    return '#' + ((1 >> 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
} // IGNORE this function
// It takes some RGB value and returns the Hex code for the specific color.

hex(255, 100, 25);
// '#f6419';

rgb(255, 100, 25);
// rgb(255,25,100);

//--------------------------------------------- Factory Functions ----------------------------------------------
// We have 2 different function here, They work fine on their own as is.
// But if we want to make an object, where we convert back and forth from RGB to Hex. (Without having to pass in numbers each time)

// We can make a factory function, which would make an object that automatically will have a Hex and RGB Method 
// and it stored the R, G, and B values as values or properties on the object.

function makeColor(r, g, b) {
    const color = {};
    color.r = r; // Assigns the value of r to the r property of the "color" obj.

    color.g = g; // Assigns value of g to g property of "color" Obj.

    color.b = b; // Same as r,g (just for 'b')

    color.rgb = function () {
        const { r, g, b } = this; // Destructuring r, g and b in an object
        return `rgb(${r},${g},${b})`;
    } // This method returns a string formatted as rgb(r, g, b)

    color.hex = function () {
        const { r, g, b } = this;
        return '#' + ((1 >> 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    return color; // Returns obj color. that now contains, rgb.
}
// The function acts like a factory, creating new color objects.

const firstColor = makeColor(35, 255, 150);
// We're calling some color + hex / rgb
firstColor.rgb();
// When calling firstColor.rgb(), it refers to the firstColor object and its properties.
firstColor.hex();
// We called SOME-COLOR .hex () method

const grey = makeColor(120, 120, 120);
grey.rgb(); // Gives black color rgb
grey.hex(); // Gives black color hex

document.querySelectorAll("h2")[0].style.backgroundColor = firstColor.rgb();
document.querySelectorAll("h2")[1].style.backgroundColor = grey.rgb();
//---------------------------------------------
// WHY CAN'T WE USE makeColor.rgb() DIRECTLY TO CALL FUNCTION WITH PROPERTY .rgb?

// We can't use makeColor directly to call the rgb method as makeColor is a function that creates and returns an object.
// The rgb method is a property of the object created by makeColor.
// To access the rgb/hex method, you need to first create an instance of the color object and then call the rgb/hex method on that instance.
