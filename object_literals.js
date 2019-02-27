const person = {
    firstName: 'Victoria',
    lastName: 'Blah',
    age: 30,
    email: 'vkatelynh@gmail.com',
    hobbies: ['programming', 'drawing'],
    address: {
        city: 'Blah',
        state: 'Blah'
    },
    getBirthYear: function(){
        return 2019 - this.age; //can't just say age
    }
}

let val;

val = person;

//To get a specific value
val = person.firstName;
val = person['firstName'];
val = person.age; 
val = person.hobbies; //you can index this to get more specific
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear(); //call your function



console.log(val);

const people = [
    {name: 'Victoria', age: 27}, 
    {name: 'Random', age: 30},
    {name: 'Nancy', age: 45}
]

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}