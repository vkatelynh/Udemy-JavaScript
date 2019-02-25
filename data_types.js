/*  
Primitive Data Types: 
stored directly in the location the variable accesses
stored on the stack

Examples: 
string, numbers, booleans, null, undefined, and symbols (ES6)


Reference Data Types: 
accessed by reference
objects that are stored on the heap
a pointer to a location in memory
*/


//PRIMITIVE TYPES:

//String example
var name = 'Victoria';
console.log(typeof name);

//Number example
var age = 26;
console.log(typeof age);

//Boolean example
var hasdog = true;
console.log(typeof hasdog);

//Null example
var car = null; 
console.log(typeof car);
//this gives you back "object" instead of "null"

//Undefined example
let test;
console.log(typeof test);

//Symbol example
var symbol = Symbol(); 
console.log(typeof symbol)


//REFERENCE TYPES: 

//Array example
const hobbies = ['movies', 'music']
console.log(typeof hobbies);

//Object Literal example
const address = {
    city: 'Boston',
    state: 'MA'
}
console.log(typeof address);

const today = new Date();
console.log(today); //prints today's date, time, etc.
console.log(typeof today); 

