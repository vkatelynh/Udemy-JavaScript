// keywords to describe a variable:
// var, let, and const


//declare variable
var name = 'Victoria';
console.log(name);

//reassign variable
name = 'Steve';
console.log(name)

//initializing a variable
var greeting; 
//this sets it to undefined.
//sometimes useful if you have a conditional (if)
console.log(greeting);

greeting = 'Hello';
console.log(greeting);

// a variable can include
// letters, numbers, underscore, $
// cannot start with a number
// can begin with $ or _ but bad syntax

// variables with more than one word
var camelCase = 'Good Syntax';
var FirstName = 'Victoria'; //Pascal Case


//let
let name = 'John Doe';
console.log(name);

let name; 


//const
const name = 'John'
console.log(name);
//cannot be reassigned
//if you try, you will get a TypeError: Assignment to constant variable.

//const greeting;
//will not work
//it will give you SyntaxError: Missing
// initializer in const declaration

const person = { 
    name: 'John',
    age: 27
}
person.name = 'Sarah';
console.log(person);

//you can change the key value pairs
//you can't change the person object.


const numbers = [1, 2, 3, 4, 5];
console.log(numbers)

numbers.push(6, 7, 8);
// .push adds on to an array
// you can add on, but you cannot change numbers 
// once it has been defined

