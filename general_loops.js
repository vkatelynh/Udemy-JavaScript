//for loops, while loops, and do while loops

// for loop
// takes in 3 parameters
// declare variable i = 0
// condition: as long as i < 10
// increment of i: i++ --> i + 1
for(let i = 0; i < 10; i++){
    console.log(i);
}
// you're saying print i as long as
// i is less than 10 (up to 10, but not inclusive)

for(let i = 0; i < 10; i++){
    if(i === 2){
        console.log('two');
        continue;
    }
    console.log('Number ' + i);
}

// break;
// breaks out of the loop when condition is met


// while loops

let i = 0;
while(i < 10){
    console.log('Number ' + i);
}


// do while loop

let i = 0;
do {
    console.log('Number ' + i);
    i++;
}
while(i < 10);


// looping through arrays

let cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let x = 0; x < cars.length; x++){
    console.log(cars[x]);
}


// forEach method
// can take in 3 parameters
// first is iterator
// second is index
// third is an array

cars.forEach(function(car, index, array){
    console.log(car);
    console.log(array);
});


// map function
const users = [
    {id: 1, name: 'John',},
    {id: 2, name: 'Sarah'},
    {id: 3, name: 'Karen'},
    {id: 4, name: 'Steve'}
];

const ids = users.map(function(user){
    return user.id;
});

console.log(ids);


// for in loops

const user = {
    firstName: 'John',
    lastName: 'Blah',
    age: 40
}

for(let x in user){
    console.log(x);
}
// OR.......
for(let x in user){
    console.log(`${x} : ${user[x]}`);
}