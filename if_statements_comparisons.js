/*
if(something){
    do something
}
else {
    do something else
}
*/

let id = 100;

// Equal to 
if(id == 100){
    console.log('Correct');
}
else {
    console.log('Incorrect');
}

// Not equal to: 
if(id != 101){
    console.log('Correct');
}
else {
    console.log('Incorrect');
}

// Test the type of value (string, num)
// use three = to test num vs string
if(id === 100){
    console.log('Correct');
} 
else {
    console.log('Incorrect');
}

// Not equal to value and type
if(id !== 101){
    console.log('Correct');
}
else {
    console.log('Incorrect');
}


// Test
if(id){
    console.log(`The ID is ${id}`);
}
else { 
    console.log('No ID.');
}

// Test if id is present/defined
// if(typeof id !== 'undefined'){
//    console.log(.....)
//}

// Greater than or less than
let val2 = 200
if(id > 200){
    console.log(`${id} is greater than ${val2}`);
}
else {
    console.log(`${id} is less than ${val2}`);
}

// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// != not equal to

// if else statements
let color = 'blue';
if(color === 'red'){
    console.log(`The color is ${color}.`)
}
else if(color === 'blue'){
    console.log('The color is blue.')
}
else{
    console.log('The color is not red or blue.')
}


// Logical Operators
let name = 'Steve';
let age = 23;

if(age > 0 && age < 12){
    console.log(`${name} is a child.`);
}
else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager.`);
}
else {
    console.log(`${name} is an adult.`);
}

// and &&
// or ||

if (age < 16 || age > 65){
    console.log(`${name} can not register due to age.`);
}
else {
    console.log(`${name} is eligible to register.`);
}

// Ternary Operator
 console.log(id === 100 ? 'Correct' : 'Incorrect');
 // says if id = 100 ? if true, print correct, 
 // : means else, print incorrect.


