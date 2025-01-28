// Base class for pets with common properties and methods.
class Pet {
    constructor(name, age) {
        console.log("in pet constructor");
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating.`;
    }
}

// Cat class extends Pet to add functionality specific to cats.
class Cat extends Pet {
    constructor(name, age, livesleft = 9) {
        console.log("in cat constructor");
        // Call the constructor of the parent class (Pet)
        super(name, age);
        this.livesleft = livesleft;
    }
    meow() {
        return `${this.name} says ~Meow~`;
    }
    // If the eat() method is not found here, it will use the eat() method from the Pet class.
}

// Dog class extends Pet to add functionality specific to dogs.
class Dog extends Pet {
    bark() {
        return `${this.name} says ~Woof Woof!`;
    }
    eat() {
        return `${this.name} scarfs his food!`;
    }
    // This eat() method will override the eat() method from the Pet class for Dog instances.
}

// Using 'extends' to create subclasses that inherit properties and methods from the parent class (Pet).
// This means Cat and Dog classes inherit name and age properties, as well as the eat() method from Pet,
// but they can also have their own specific methods or override existing ones.

// Example Usage:
const max = new Cat('Maxine', 3);
console.log(max.eat()); // (Parent class) Output: Maxine is eating.
console.log(max.meow()); // Output: Maxine says ~Meow~

const buddy = new Dog('Buddy', 5);
console.log(buddy.eat()); // Output: Buddy scarfs his food!
console.log(buddy.bark()); // Output: Buddy says ~Woof Woof!~

// Super Keyword Explanation:
// We have some Base(Parent) Class, and other classes that extend from it.
// In the case of the 'Dog' Class, we didn't add any new properties. It's the exact same constructor as 'Pet', just with added methods in the prototype.
// In the case of the 'Cat' Class, we have other data, like 'livesleft'.
// So, we call 'super' to take advantage of the constructor and then add 'livesleft' as well.

