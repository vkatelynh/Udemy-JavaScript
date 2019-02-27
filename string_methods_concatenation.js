const firstName = 'Victoria';
const lastName = 'Blah';
const age = 26;
var string = 'Hello World'

let val; 

val = firstName + lastName; 

//Concatenation
val = firstName + ' ' + lastName;

//Appending
val = 'Victoria'; 
val += 'Blah';

val = 'Hello, my name is'; + firstName + ' and I am' + age;

//Escaping
val = "That's awesome. Can't wait!";
val = 'That\'s awesome. Can\'t wait!';

// Length
val = firstName.length;

//Concat Method
val = firstName.concat(' ', lastName);

//Upper and Lower
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0]; //gives 0 index value of string

// Index of Method
val = firstName.indexOf('i'); //('will look for first occurance
val = firstName.lastIndexOf('i'); //indexes backwards

//charAt()
val = firstName.charAt('2'); //gives you which character is at index val you specify

//Get last character
val = firstName.charAt(firstName.length - 1);

//substring
val = firstName.substring(0,4); 
//gives characters from index val 0 - 4, including 4

//slice
val = firstName.slice(0, 4); 
//same as substring, but can take negatives to take last characters

//split
val = string.split(' ');
//splits it at the spaces, and puts into array

//replace
val = string.replace('World', 'There');
//first value is your find, second is what you want to replace it with

//includes
val = string.includes('Hello');
//will return a boolean


console.log(val)