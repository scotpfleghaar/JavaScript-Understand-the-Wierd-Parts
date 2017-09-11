var person = {
    firstname: "Scot",
    lastname: "Pfleghaar",
    address: {
        street: '111 main St.',
        city: 'New York',
        state: 'NY'
    }
};

function greet(person) {
    console.log("Hi, " + person.firstname);
}

console.log(person);
greet(person);

greet({
    firstname: "Sam",
    lastname: "Pfleghaar",
    address: {
        street: '111 main St.',
        city: 'New York',
        state: 'NY'
    }
});
