/* The four principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window/Global Object Binding - When in the global scope, the value of “this” will be the window/console Object 
 * 2. Implicit Binding - Whenever a function is called by a preceding dot, the object before that dot is this. One of the most commonly used applications of the this keyword.
 * 3. New Binding - Refers to the specific instance of the object that is created and returned by the constructor function, when using a constructor function.
 * 4. Explicit Binding - Whenever JavaScript’s call or apply method is used, this is explicitly defined
 *
 * write out a code example of each explanation above
 */




// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
}

sayName("Cobrettie");

console.log(sayName("Cobra"));




// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'Hello, old friend.',
    sayHello: function (name) {
        console.log(`${this.greeting} My name is ${name}.`);
        console.log(this);
    }
}
myObj.sayHello('Cobrettie');




// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello, old friend. My name is ';
    this.greeter = greeter;
    this.speak = function () {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const cobrettie = new CordialPerson('Cobrettie');
const lynn = new CordialPerson('Lynn');

cobrettie.speak();
lynn.speak();





// Principle 4

// code example for Explicit Binding

const yourObject = {
    name: 'Cobrettie Garner',
    city: 'Eustis',
    favoriteFood: 'Fasting'
}

const thingsYouEnjoy = ['God', ' Jesus', ' The Holy Spirit', ' Praying', ' Fasting', ' Wisdom']

function tellUsAboutYourself(thing1, thing2, thing3) {
    return `Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love ${this.favoriteFood}.`
}

console.log(tellUsAboutYourself.apply(yourObject, thingsYouEnjoy));