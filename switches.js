let color = 'green';

switch(color){
    case 'red':
        console.log('The color is red.');
        break;
    case 'blue':
        console.log('The color is blue.');
        break;
    default:
        console.log('The color is not red or blue.');
        break;
}
//use a switch when you have a lot of different cases
//rather than having a million else if statements

let day;
switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1: 
        day = 'Monday';
        break;
    case 2: 
        day = 'Tuesday';
        break;
    case 3: 
        day = 'Wednesday';
        break;
    case 4: 
        day = 'Thursday';
        break;
    case 5: 
        day = 'Friday';
        break;
    case 6: 
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}.`);
