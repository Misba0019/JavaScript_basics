let arr = ["Cat", "Dog", "Fountain", "Fan", "Love", "Rabbit"];
for (let i = 0; i < arr.length; i++) {
    console.log(`This is a random list of things in an array: ${arr[i]}`)
}

// Using for...of to iterate over an array:
for (let subArr of arr) {
    console.log(`This is a random list of things in an array: ${subArr}`);
}
// Better for iterating over entire arrays; use for loop when you need an index.

for (let char of "Hello World") {
    console.log(char);
}
// Each character of the string is being iterated over.

// Brief example of for...of loop with nested arrays:
const seatingChart = [
    ['Logan', 'Sattu', 'Priya'],
    ['Misba', 'Hearty', 'Deep'],
    ['Sissy', 'Kaif', 'Shaiz']
]

for (let k = 0; k < seatingChart.length; k++) {
    const row = seatingChart[k];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}
// Outer loop goes through each row, inner loop goes through each name in the row.

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}
// Iterates through each name in the seating chart.

// for...in loop example:
const testScores = {
    Ace: 59,
    Keenan: 88,
    Mahi: 55,
    Hazel: 98,
    Rocky: 78,
    Abby: 67,
    Damon: 70
}

for (let person in testScores) {
    console.log(`${person} scored: ${testScores[person]}`);
}
// Iterates through object keys, accessing values using testScores[person].

// Using Object.keys, Object.values, and Object.entries:
Object.keys(testScores);    // Gives keys in an array
Object.values(testScores);  // Gives values in an array
Object.entries(testScores); // Gives nested array of key-value pairs

// Iterating over object values and calculating total:
let total = 0;
for (let score of Object.values(testScores)) {
    total += score;
}
// Summing scores from testScores object.

let sum = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    sum += score;
}
console.log(sum / scores.length);  // Print the average score
// Calculate the average of scores.

//Initialize sum to 0
//Extracted and saved in a variable, the scores (value only from the key-value pair{Objects})
//Sum up the scores with for...of making the scores into score and then doing sum += score
//print the (sum divided by the scores length);

//Average value:- is a value that represents the central or most common characteristic of a set of data. In statistics, this is often referred to as a measure of central tendency.