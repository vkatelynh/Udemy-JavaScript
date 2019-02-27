const num1 = 100;
const num2 = 50;
let val; 
 
// Simple arithmetic
val = num1 + num2; 

val = num1 * num2; 

val = num1 - num2;

val = num1 / num2; 

val = num1 % num2; 


// Math Objects
val = Math.PI; //3.14.....
// math is an objects, meaning it has properties and methods
// property is similar to attribute
// method is similar to function
val = Math.E; //Euler's number
val = Math.round(2.8); //will round up to 3
val = Math.ceil(2.4); //rounds up
val = Math.floor(2.8); // rounds down
val = Math.sqrt(16); //gives square root
val = Math.abs(-7); 
val = Math.pow(8, 2); // like 8^2
val = Math.min(2, 44, 30, 348, 0); 
val = Math.max( 2, 433, 539, 95);
val = Math.random(); //gives a random decimal
val = Math.random() * 20; //number between 0 and 19, still decimal
val = Math.floor(Math.random()) * 20; //gives a random number up to 20, no decimal

//Output 
console.log(val);

