// log to the console
//this is a comment

/* this is a multi 
line 
comment
*/

//log strings
console.log('Hello World');

//log numbers
console.log(12345);

//log Booleans
console.log(true); 
console.log(false);

//log variables
var greeting = 'Hello World'
console.log(greeting);

//log arrays
console.log([1, 2, 3, 4]);

//log objects - specifically, this is an example of an object literal
console.log({a:1, b:2});

//turns key:value pairs into a table
console.table({a:1, b:2, c:3});

//will print an error to the console in red
console.error("This is some error.");

//how to clear the console
console.clear();

//warnings - in yellow
console.warn("This is a warning.");

/*  this will give you the time it takes
to complete logs between time start
and time end   */
console.time('Hello');
console.timeEnd('Hello');