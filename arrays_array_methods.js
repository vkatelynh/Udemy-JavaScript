// Array
const numbers = [1, 2, 3, 4, 5];
const numbers2 = new Array(22, 33, 45, 76, 54);

const fruit = ['apple', 'banana', 'orange', 'peach'
];

const mixed = ['random', undefined, 'things', 0, 'order'];

let val; 

// Array Length
val = numbers.length;

//Check if something is an array
val = Array.isArray(numbers);
    //boolean response

//Get a single value from array
val = numbers[1];
    //get value at that index

// Insert something into an array
numbers2[2] = 100;

//Find index of value
val = numbers2.indexOf(33);

//Mutating arrays

//adding on to an array (end)
numbers2.push(250);

// add to the front of array
numbers2.unshift(120);

//taking number off end
numbers2.pop();

//taking a number off front
numbers2.shift();

//splicing values
numbers2.splice(1,1);

//reversing an array
number.reverse();

//Concatenating Arrays
val = numbers.concat(numbers2);

//sort array
val = fruit.sort();
val = numbers.sort(); //sorts based on first number

//Using compare function to sort
val = numbers.sort(function(x, y) {
    return x - y;
});

//reverse sort 
val = numbers.sort(function(x,y) {
    return y - x;
});

//find method
function under50 (num){
    return num < 50;
}
val = numbers.find(under50); //will only return the first find


console.log(numbers);
console.log(val);
