let movieLine = ['Tom', 'Zendaya'];
movieLine[2] = 'Pablo';
// This adds an element to a specific index in the array, but it's not a common practice.

// Push
movieLine.push('Oliver');
// Adds 'Oliver' to the end of the array.

movieLine.push('Harry', 'Hermione');
// Adds multiple elements ('Harry' and 'Hermione') to the end of the array.

//---------------------------------------------------------

// Pop
movieLine.pop();
// Removes the last element ('Hermione') from the array.

//---------------------------------------------------------

// Push and Pop in an Empty Array
let movie = [];
movie.push('Hachi', 'San Andreas', '2012', 'The Conjuring', 'Enola Holmes', 'Geostorm');
movie.pop();
// Adds multiple elements to the empty array and then removes the last one ('Geostorm').

//=========================================================

// Shift
movie.shift();
// Removes the first element ('Hachi') from the array.

//---------------------------------------------------------

// Unshift
movieLine.unshift('VIP');
// Adds 'VIP' to the beginning of the array, moving other elements one index back.

//---------------------------------------------------------

// Concat
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);
// Merges array1 and array2 into a new array (array3).

//---------------------------------------------------------

// Includes
console.log(array2.includes('f'));
// Checks if 'f' is in array2 and returns true or false.

//---------------------------------------------------------

// Use of concat and includes Method
let cats = ['Chiwi', 'Evie'];
let dogs = ['Sheero', 'Flash'];
cats.concat('dogs');
cats.includes('Sheero');
// Merges cats and dogs arrays and checks if 'Sheero' is in the merged array.

//=========================================================

// indexOf
let pets = ["Flash", "Angel", "Sheero", "Snowball", "Angel"];
console.log(pets.indexOf('Angel')); // 1
// Returns the first index of 'Angel' in the array. If not found, returns -1.

//---------------------------------------------------------

// Reverse
let animals = ['cat', 'dog', 'fish', 'turtle'];
animals.reverse();
// Reverses the order of elements in the array.

//---------------------------------------------------------

// Slice
let colors = ['red', 'orange', 'green', 'blue', 'pink'];
let cool = colors.slice(1, 3);
// Copies a portion of the array (from index 1 to 3, not including 3).

colors.slice(-2);
// Copies the last two elements of the array.

//---------------------------------------------------------

// Splice
colors.splice(2, 1, "yellow");
// Removes 1 element at index 2 ('green') and adds 'yellow' in its place.

// Syntax: array.splice(startIndex, deleteCount, newItem)
// startIndex: Index to start changing the array.
// deleteCount: Number of elements to remove.
// newItem: Elements to add.

