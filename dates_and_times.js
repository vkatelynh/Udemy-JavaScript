let val;

const today = new Date();

val = today;

console.log(val);

//Putting in a specific date
const birthday = new Date('9-24-1992');
val = birthday;
console.log(birthday);

//Putting in specific date, time
let day = new Date('9-10-1981 2:12:00');
console.log(day);

//many different ways to put in a date
//can look at documentation 
//Date('September 10 1981');
//Date('9/10/1981');

let val2 = today.getMonth();
console.log(val2);
//gives month as number
//arrays start at 0, so January would be 0

//Get date
let val3 = today.getDate();
console.log(val3);

//get Day of week (as a number)
//0 = Monday
let val4 = today.getDay(); 
console.log(val4);

let val5 = today.getFullYear();
console.log(val5);

let val6 = today.getHours();
console.log(val6);

let val7 = today.getMinutes();
console.log(val7);

let val8 = today.getSeconds();
console.log(val8);

let val9 = today.getMilliseconds();
console.log(val9);

//Amount of seconds that have passed since
let val10 = today.getTime();
console.log(val10);

//Manipulating Dates: 
birthday.setMonth(2);
console.log(birthday);

birthday.setDate(12);
console.log(birthday);

birthday.setFullYear(1985);
console.log(birthday);

birthday.setHours(3);

birthday.setMinutes(30);

birthday.setSeconds(13);




