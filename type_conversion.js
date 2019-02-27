let val;

//number to string
val = String(5);
//expression to string
val = String(4 + 4); 
//Boolean to string
val = String(true);
//Date to string
val = String(new Date());
//Array to string
val = String([1, 2, 3, 4]);

//toString() method
val = (5).toString();
val = (true).toString();

//strings to numbers 
val = Number('5');
//boolean to number
val = Number(true); //gives you a 1
val = Number(false); //gives you a 0
val = Number(null); //gives you a 0

val = Number('Hello'); //gives you NaN
val = Number([1, 2, 3, 4]); //also NaN

val = parseInt('100.01'); //invalid - gives it back w no decimal
val = parseFloat('100.01'); //good for decimals

//output
//console.log(val);
//console.log(typeof val);
//console.log(val.length);
//console.log(val.toFixed());

const val1 = 5; 
//const val1 = String(5); will give you a sum of 56
const val2 = 6;
const sum = val1 + val2;
console.log(sum); 
console.log(typeof sum);
