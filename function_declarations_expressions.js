// Function declarations
function greet(){
    console.log('Hello');
}

greet();

// or... 
function greeting(){
    return 'Hello';
}

greeting();

// Function Expressions
const square = function(x){
    return x * x;
};

console.log(square(8));

// Immediately Invokable Function Expressions
// IIFE
// declare and run at the same time

(function(){
    console.log('IIFE Ran...');
})();

// or... 
(function(name){
    console.log('Hello' + name);
})('Brad');

// Property Methods
// when function put inside object, it's called method

const todo = {
    add: function(){
        console.log('Add To-Do');
    },
    edit: function(id){
        console.log(`Edit To-Do ${id}`);
    }
}


todo.delete = function(){
    console.log('Delete To-Do');
}


todo.add();
todo.edit(22);
todo.delete();

