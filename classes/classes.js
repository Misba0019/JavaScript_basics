//----------------------------- Class Definition: Color -----------------------------

// The Color class represents a color in RGB format and provides methods to convert to HEX, RGBA, and HSL.
// It also includes methods to calculate HSL values and return colors with full saturation or opposite hue.

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b; // Sets the red, green, and blue values.
        this.colorName = name; // Sets the color name.
        this.calcHSL(); // Calculate HSL values based on RGB immediately.
    }

    // Returns the RGB values as a string.
    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }

    // Returns the color in RGB format.
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }

    // Returns the color in HEX format.
    // Usage: const hexColor = red.hex();
    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    // Returns the color in RGBA format.
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }

    // Returns the color in HSL format.
    hsl() {
        const { h, s, l } = this;
        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    // Returns the color in HSL format with full saturation.
    fullSaturation() {
        const { h, l } = this;
        return `hsl(${h}, 100%, ${l}%)`;
    }

    // Returns the color in HSL format with an opposite hue.
    opposite() {
        const { h, s, l } = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue}, ${s}%, ${l}%)`;
    }

    // Calculates and sets HSL values based on RGB.
    calcHSL() {
        let { r, g, b } = this;
        // Convert r, g, and b from [0, 255] to [0, 1]
        r /= 255;
        g /= 255;
        b /= 255;

        // Find the minimum and maximum values of r, g, and b
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;

        // Calculate hue
        if (delta == 0) h = 0;
        else if (cmax == r) h = ((g - b) / delta) % 6;
        else if (cmax == g) h = (b - r) / delta + 2;
        else h = (r - g) / delta + 4;
        h = Math.round(h * 60);

        // Make negative hues positive behind 360°
        if (h < 0) h += 360;

        // Calculate lightness
        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // Multiply l and s by 100 to convert to percentage
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        // Set h, s, and l properties
        this.h = h;
        this.s = s;
        this.l = l;
    }
}

// Creating instances of the Color class.
const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');
const carrot = new Color(230, 126, 34, 'carrot');

// Applying colors to HTML elements using the created Color objects.
document.querySelector("h2").style.backgroundColor = red.hex();
document.body.style.backgroundColor = red.rgba(0.3);
document.querySelectorAll("h2")[1].style.backgroundColor = white.rgb();

//------------------------------------ Instructions on how to use classes --------------------------------------

// 1. Always start class names with a capital letter.
// 2. Add a constructor method to define properties.
// 3. Use the 'this' keyword within the constructor to refer to the new object.

//--------------------------------------- Step by step: --------------------------------------------------------

// 1. Class Definition:
// - Class names should start with a capital letter (e.g., Color).
// - The constructor method initializes properties (r, g, b, colorName).
// - Example: const red = new Color(255, 67, 89, 'tomato');

// 2. Methods:
// - innerRGB(): Returns the RGB values as a string.
// - rgb(): Returns the color in RGB format.
// - hex(): Returns the color in HEX format.
// - rgba(a = 1.0): Returns the color in RGBA format, with an optional alpha value (a).
// - hsl(): Returns the color in HSL format.
// - fullSaturation(): Returns the color in HSL format with full saturation.
// - opposite(): Returns the color in HSL format with an opposite hue.
// - calcHSL(): Calculates and sets HSL values based on RGB.

// 3. Creating Instances:
// - Instances of the Color class are created using the new keyword (e.g., new Color(255, 67, 89, 'tomato')).
// - The new keyword creates new instances and handles object creation.

// 4. Applying Colors:
// - The created Color objects can be used to style HTML elements (e.g., red.hex(), red.rgba(0.3), white.rgb()).

// HSL, Full Saturation, and Opposite Method Results:
// carrot.hsl(); // 'hsl(28, 79.7%, 51.8%)'
// carrot.fullSaturation(); // 'hsl(28, 100%, 51.8%)'
// carrot.opposite(); // 'hsl(208, 79.7%, 51.8%)'
