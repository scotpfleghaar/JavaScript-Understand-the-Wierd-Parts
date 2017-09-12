// IIFE
var firstname = 'John';

(function (global, name) {

    var greeting = 'Hello';
    global.greeting = "Hello, from Global";
    console.log(greeting + ' ' + name);

}(window, firstname)); // IIFE


// Does Not Collide
console.log(greeting);
