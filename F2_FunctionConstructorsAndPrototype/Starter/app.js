class Person {
    constructor(firstname, lastname) {
        console.log(this);
        this.firstname = firstname;
        this.lastname = lastname;
        console.log('This function is invoked.');
    }
    getFullName() {
        return this.firstname + ' ' + this.lastname;
    }
}


Person.prototype.hello = function () {
    return 'Hello, ' + this.firstname;
};


var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

john.getFullName();