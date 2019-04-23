// window/global binding

// function globalForest(tree) {
//     console.log(this);
//     return `I am made of ${tree}`;
// }

// // console.log(globalForest("tree"));





// // implicit binding

// // creating an object
// const tree = {
//     leafColor: 'green',
//     height: 20,
//     grow: function (rate) {
//         return `I grow ${rate} per year.`;
//     }
// }

// // using dot notation to call tree 
// // console.log(tree.grow(`1ft`));

// // creating another object

// // const hobbit = {
// //     name: "Samwise",
// //     age: 32,
// //     food: "taters"
// // }





// // explicit binding

// const hobbit = {
//     name: "Samwise",
//     age: 32,
//     food: "taters",
//     cook: function () {
//         return this;
//     }
// }

// const girl = {
//     name: "sally",
//     age: 24,
//     play: function () {
//         return "I like to play with my doll.";
//     }
// }

// const boy = {
//     name: "Cobra",
//     age: 24,
//     play: function () {
//         return "I like to play with my ball."
//     }
// }

// const skills = ['cooking', 'sleeping', 'gaming', 'listening'];

// function intro(skill1, skill2, skill3) {
//     return `Hi, I'm ${this.name} and I like ${skill1}, ${skill2}, ${skill3}.`;
// }

// console.log(intro.apply(hobbit, skills));
// console.log(intro.call(girl, skills, 'play', 'go to school'));

// // using bind()
// const boyConst = intro.bind(boy, ...skills);
// console.log(boyConst(), boy);


// spread operator is the ... three dots ... 





// new binding

// can make objects from constructors
// constructor function
// function Greeter(person) {
//     this.greeting = 'Hello';
//     this.person = person;
//     this.speak = function () {
//         console.log(this.greeting + " " + this.person + '!');
//         console.log(this);
//     }
// }

// const guy = new Greeter('Bill');
// guy.speak();





// CONSTRUCTORS

// const fred = {
//     name: 'Fred',
//     age: 24,
//     hometown: 'Bedrock',
//     yells: function () {
//         return 'Yabba Dabba Doo!'
//     }
// }

// const wilma = {
//     name: 'Fred',
//     age: 22,
//     hometown: 'Bedrock',
//     yells: function () {
//         return 'Fred stinks! Like my underwear!'
//     }
// }

// console.log(fred.name);
// console.log(fred.hometown);

// console.log(fred);
// console.log(wilma.yells());



// can make objects from constructors
// constructor function
// made a constructor function, attached objects to it
function Parent(attribute) {
    this.name = attribute.name;
    this.age = attribute.age;
    this.hometown = attribute.hometown;
    this.phrase = attribute.phrase;
}

// using prototype, now a prototype function of parent
Parent.prototype.speak = function () {
    return `${this.phrase}`;
}

const fred = new Parent({
    name: 'Fred',
    age: 24,
    hometown: 'Bedrock',
    phrase: 'Yabba Dabba Doo!'
});

const wilma = new Parent({
    name: 'Fred',
    age: 22,
    hometown: 'Bedrock',
    phrase: 'Fred stinks like my underwear'
});

// binding this parent function to this child
function Child(childAttributes) {
    Parent.call(this, childAttributes);
    this.food = childAttributes.food;
}

Child.prototype = Object.create(Parent.prototype);

const pebbles = new Child({
    name: 'Pebbles',
    age: 487,
    hometown: 'Bedrock',
    phrase: 'Hey, friend',
    food: 'Veggies'
});




console.log(fred);
console.log(wilma);
console.log(pebbles);

// using prototype
console.log(fred.speak());
console.log(wilma.speak());
console.log(pebbles.speak());
console.log(pebbles.food);