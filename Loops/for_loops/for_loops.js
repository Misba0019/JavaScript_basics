// Making a Loop
// Repeatedly writing console.log is tiring

for (let i = 1; i <= 5; i++) {
    console.log("Im in the Loop Body")
    console.log(i);
}
// Start at 1; Stop at 5; Add 1 each time

// Explanation:
// Initial: i = 1
// Condition: i <= 5 (true, run loop)
// Increment: i++

// Long array example:
let aniArr = ["lion", "elephant", "giraffe", "zebra", "monkey", "tiger",
    "penguin", "koala", "panda", "cheetah", "hippopotamus", "rhinoceros",
    "crocodile", "kangaroo", "gorilla", "lemur", "parrot", "flamingo",
    "octopus", "dolphin", "whale", "shark", "jaguar", "leopard",
    "buffalo", "camel", "armadillo", "chameleon", "gazelle", "hyena",
    "jellyfish", "lobster", "macaw", "narwhal", "ostrich", "quokka",
    "raccoon", "sloth", "toucan", "vulture", "walrus", "xerus",
    "yak", "zebu", "iguana", "quail", "newt", "koala", "wombat", "narwhal"];

// Iterate over array in reverse:
for (let i = aniArr.length - 1; i >= 0; i--) {
    console.log(aniArr[i]);
}
// aniArr.length - 1 to start from the last element

// Infinite Loop:
// Occurs when a condition never becomes false
// Example:
// for(let j = 20; j >= 0; j++){
//    console.log(j);
// }

// Looping Over Arrays:
const animals = ['lions', 'tigers', 'bears'];
for (let a = 0; a < animals.length; a++) {
    console.log(a, animals[a]);
}
// i starts at 0, checks if i < animals.length, increments i, prints index and value

// Nested Loops:
let str = 'ABC';
for (let l = 1; l <= 3; l++) {
    console.log("Outer Loop", l);
    for (let m = 0; m < str.length; m++) {
        console.log('     Inner Loop', str[m]);
    }
}
// Outer loop runs 3 times, inner loop runs for each character in str

// Nested Loop Example:
const seatingChart = [
    ["Kaifi", "Mishi", "Deep"],
    ["Ayushi", "Bree", "Selena", "Susan"],
    ["Justin", "Hailey", "Miley", "Allison"]
];

for (let i = 0; i < seatingChart.length; i++) { // Outer Loop
    const row = seatingChart[i];
    console.log(`Row ${i + 1}`);

    for (let j = 0; j < row.length; j++) { // Inner Loop
        console.log(row[j]);
    }
}
// Loop through seatingChart rows, then through each row's elements
