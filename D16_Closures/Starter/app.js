function greet(whattosay) {

    return function (name) {
        console.log(whattosay + ' ' + name);
    }

}

//greet("Hi,")('Scot');

var sayHi = greet("Hi,"); //Looks like Node.js
sayHi("Scot");

console.log(sayHi);
console.log(window);
